import cardImage1 from '../../assets/img/offer_gift.png'
import cardImage2 from '../../assets/img/offer_gift.png'
import cardImage3 from '../../assets/img/offer_gift.png'
import cardImage5 from '../../assets/img/offer_gift.png'

import shirt from '../../assets/img/shirt.png';
import shirt2 from '../../assets/img/shirt2.png';
import shirt3 from '../../assets/img/shirt3.png';

export const orderData = [
    ["1", "22-03-22", "$12", 'approved'],
    ["2", "24-03-22", "$18", 'cancelled'],
    ["3", "25-03-22", "$20", 'approved'],
    ["4", "26-03-22", "$30", 'cancelled'],
];


export const rewardsData = [
    {
        id: 1,
        img: cardImage1,
    },
    {
        id: 2,
        img: cardImage2
    },
    {
        id: 3,
        img: cardImage3
    },
    {
        id: 4,
        img: cardImage5
    }
]

export const customerOrderData = [
    {
        id: 1,
        name: 'WOMEN\'S SCRUB TOP',
        img: shirt3,
        price: "45.99",
        color: "Gray",
        size: "XL",
        Qty: "5"
    },

    {
        id: 2,
        name: 'WOMEN\'S SCRUB TOP',
        img: shirt2,
        price: "50.99",
        size: "XL",
        color: "Sky Blue",
        Qty: "3"
    },
    {
        id: 3,
        name: 'WOMEN\'S SCRUB TOP',
        img: shirt,
        color: "Navy",
        price: "70.99",
        size: "XL",
        Qty: "2"
    }
]