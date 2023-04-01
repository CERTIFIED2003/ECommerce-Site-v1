'use strict';
const stripe = require('stripe')(process.env.STRIPE_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const { products } = ctx.request.body;

        try {
            const lineItems = await Promise.all(
                products.map(async (product) => {
                    const item = await strapi
                        .service("api::product.product")
                        .findOne(product.id, { populate: ["img"] });
                    const productImg = "https://certystore-v1.pages.dev" + item.img.url;
                    return {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: item.title,
                                images: [productImg],
                            },
                            unit_amount: Math.round(item.price * 100),
                        },
                        quantity: product.quantity,
                    };
                })
            );

            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?success=false`,
                line_items: lineItems,
                shipping_address_collection: { allowed_countries: ["IN"] },
                payment_method_types: ["card"],
            });

            await strapi.service("api::order.order").create({
                data: {
                    products,
                    stripeId: session.id,
                },
            });

            return { stripeSession: session };
        }
        catch (error) {
            ctx.response.status = 500;
            return error;
        }
    }
}));
