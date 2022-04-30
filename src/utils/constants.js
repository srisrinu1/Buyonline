import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [{
        id: 1,
        text: "home",
        link: "/"
    },
    {
        id: 2,
        text: "about",
        link: "/about"
    },
    {
        id: 3,
        text: "products",
        link: "/products"
    }
]
export const services = [{
        id: 1,
        icon: < GiCompass / > ,
        title: "Mission",
        text: "Make the best in class furniture. That makes the life of your customers easy.",

    },
    {
        id: 2,
        icon: < GiDiamondHard / > ,
        title: "Vision",
        text: 'Bring elegance back to functional products. Why compromise? Bring harmony back to elegance and functionality.',
    },
    {
        id: 3,
        icon: < GiStabbedNote / > ,
        title: "History",
        text: 'Expertise of tradition combined with modern technology. Respecting the past, acknowledging the present.'
    }
]

export const products_url = "https://course-api.com/react-store-products";
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;