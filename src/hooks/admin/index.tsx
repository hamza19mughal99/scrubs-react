import Card1 from '../../assets/img/card1.jpg'
import Card2 from '../../assets/img/card2.jpg'
import Card3 from '../../assets/img/card3.jpg'
import Card4 from '../../assets/img/card4.jpg'
import Card5 from '../../assets/img/card5.jpg'
import Card6 from '../../assets/img/card6.jpg'
import Card7 from '../../assets/img/card7.jpg'
import Card8 from '../../assets/img/card8.jpg'

import BlackColor from "../../assets/img/blackColor.png";
import PewterColor from "../../assets/img/PewterColor.png";
import NavyColor from "../../assets/img/navyColor.png";
import RoyalColor from "../../assets/img/RoyalColor.png";
import CeilColor from "../../assets/img/CeilColor.png";
import WineColor from "../../assets/img/WineColor.png";
import Caribbean from "../../assets/img/Caribbean.png";
import Hunter from "../../assets/img/Hunter.png";
import Prints from "../../assets/img/Prints.png";

export const CouponData = [
    ["FirstCoupon", "HappyScrub", "30$"],
    ["SecondCoupon", "HappyScrub", "30$"],
    ["ThirdCoupon", "HappyScrub", "30$"],
    ["FourthCoupon", "Trousers", "30$"],
];

export const eGiftData = [
    ["fistCard", "008", "30$"],
    ["secondCard", "004", "30$"],
    ["thirdCard", "002", "30$"],
    ["fourthCard", "006", "30$"],
];

export const eGiftCardHistoryData = [
    ["23322", "544", "30$"],
    ["233423", "643", "40$"],
    ["23322", "643", "60$"],
    ["23534", "455", "70$"],
];

export const MenuData = [
    ["1", "Home"],
    ["2", "About"],
    ["3", "Contact"],
    ["4", "FAQ"],
];


export const OrderData = [
    ["1", "22-03-22", "$12", 'Completed'],
    ["2",  "24-03-22", "$18", 'Pending'],
    ["3", "25-03-22", "$20", 'InProcess'],
    ["4", "26-03-22", "$30", 'Cancelled'],
];

export const usersData = [
    ["user", "Harry", "92-134-22422", 'harry123@gmail.com'],
    ["admin", "John", "92-134-22524", 'john42@gmail.com'],
    ["customer", "Micheal", "92-134-2287", 'micheal900@gmail.com'],
    ["user", "Jordan", "92-134-22231", 'jordan901@gmail.com'],
]

export const disputeData = [
    ["1", '2', "Shirts"],
    ["2", '3', "Jeans"],
    ["3", '5', "Pents"],
    ["4", '7', "Shoes"],
    ["5", '9', "T-Shirts"]
]




export const productData = [
    ["1", "Alabama", '20'],
    ["2", "Alaska", '34'],
    ["3", "Arizona", '11'],
    ["4", "Arkansas", '21'],
    ["4", "California", '33'],
];


export const reviewData = [
    ["hamza", "good product", "Product"],
    ["obaid", "late delivery", "Product"],
    ["aqib", "on time", "Product"],
];

export const roleData = [
    ["1", "Sub Admin"],
    ["2", "Super Admin"],
    ["3", "Supervisor"],
];

export const categoryData = [
    ["1", "Mens"],
    ["2", "Womens"],
    ["3", "Child"],
];

export const colorsData = [
    ["1", "Black"],
    ["2", "Brown"],
    ["3", "Cream"],
    ["4", "Grey"],
    ["5", "Purple"],
    ["6", "Blue"],
];

export const taxesData = [
    ["1", "Alabama"],
    ["2", "Alaska"],
    ["3", "Arizona"],
    ["4", "Arkansas"],
    ["4", "California"],
];


export const allProductData = [
    {
        id: 1,
        img: Card1,
        cardTitle: "Men's Wear",
        cardText: "$56.00",
    },

    {
        id: 2,
        img: Card2,
        cardTitle: "Men's Wear",
        cardText: "$76.00",
    },

    {
        id: 3,
        img: Card3,
        cardTitle: "Men's Wear",
        cardText: "$60.00",
    },

    {
        id: 4,
        img: Card4,
        cardTitle: "Men's Wear",
        cardText: "34.00",
    },

    {
        id: 5,
        img: Card5,
        cardTitle: "Men's Wear",
        cardText: "$43.00",
    },

    {
        id: 6,
        img: Card6,
        cardTitle: "Men's Wear",
        cardText: "$103.00",
    },

    {
        id: 7,
        img: Card7,
        cardTitle: "Men's Wear",
        cardText: "$90.822",
    },

    {
        id: 8,
        img: Card8,
        cardTitle: "Men's Wear",
        cardText: "$67.00",
    },
    {
        id: 9,
        img: Card2,
        cardTitle: "Men's Wear",
        cardText: "$70.00",
    },

]

export const productColors = [
    {
        img: BlackColor,
        name: 'Black'
    },
    {
        img: NavyColor,
        name: 'navy'
    },
    {
        img: PewterColor,
        name: 'Pewter'
    },
    {
        img: RoyalColor,
        name: 'Royal'
    },
    {
        img: CeilColor,
        name: 'Ceil'
    },
    {
        img: WineColor,
        name: 'Wine'
    },
    {
        img: Caribbean,
        name: 'Caribbean'
    },
    {
        img: Hunter,
        name: 'Hunter'
    },
    {
        img: Prints,
        name: 'Prints'
    },
]

export const colorData = [
    { value: 'Black', label: 'Black' },
    { value: 'Brown', label: 'Brown' },
    { value: 'Cream', label: 'Cream' },
    { value: 'Grey', label: 'Grey' },
    { value: 'Purple', label: 'Purple' },
    { value: 'Blue', label: 'Blue' }
]
export const ColorSizeData = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' }
]

export const categoryOptions =[
    { value: 'C One', label: 'C One' },
    { value: 'C Two', label: 'C Two' },
    { value: 'C Three', label: 'C Three' }
]

export const attributes = [
    { value: 'C One', label: 'C One' },
    { value: 'C Two', label: 'C Two' },
    { value: 'C Three', label: 'C Three' }
]

export const sizes = [
    { value: 'Small', label: 'Small' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
    { value: 'X-Large', label: 'X-Large' }
]
