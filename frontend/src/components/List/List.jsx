import React from 'react';
import Card from '../Card/Card';
import "./List.scss";

const data = [
    {
        id: 1,
        img: "https://wallpapercave.com/wp/wp3376810.jpg",
        img2: "https://w0.peakpx.com/wallpaper/143/88/HD-wallpaper-man-in-suit-suit-male-model-interior-black-tie-man-chair-business.jpg",
        title: "Tuxedo",
        category: "tuxedo",
        isNew: true,
        oldPrice: 30,
        price: 22,
    },
    {
        id: 2,
        img: "https://wallpapercrafter.com/sizes/1920x1080/207147-man-male-floral-and-shirt-hd.jpg",
        img2: "https://images.unsplash.com/photo-1511039912745-8bfa0bc56aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxvcmFsJTIwc2hpcnR8ZW58MHx8MHx8&w=1000&q=80",
        title: "Shirt",
        category: "shirt",
        isNew: true,
        oldPrice: 4,
        price: 3,
    },
    {
        id: 3,
        img: "https://cdn11.bigcommerce.com/s-r7ihm/images/stencil/1280x1280/products/772/11437/Kerry_Wax_Brown_New_Merino_MM12__50507.1621266042.jpg?c=2",
        img2: "https://media.istockphoto.com/id/858160872/photo/hipster-handsome-male-model-with-beard-wearing-black-blank-baseball-cap-with-space-for-your.jpg?b=1&s=170667a&w=0&k=20&c=_kNzJqROh9U6tJjfadrUlaFb5CXdWFNxeND--SrNsYg=",
        title: "Hat",
        category: "hat",
        oldPrice: 5,
        price: 4,
    },
    {
        id: 4,
        img: "https://c0.wallpaperflare.com/preview/994/558/349/adult-businessman-contemporary-corporate.jpg",
        img2: "https://c4.wallpaperflare.com/wallpaper/343/79/693/jai-courtney-men-suits-wallpaper-preview.jpg",
        title: "Coat",
        category: "coat",
        isNew: true,
        oldPrice: 20,
        price: 18,
    }
];

const List = () => {
    return (
        <div className="list">
            {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List