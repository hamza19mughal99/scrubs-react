// Admin Panel Interfaces & Enums

export type AttributesInterface = {
    name: string,
}

export type ColorInterface = {
    name: string,
    code: string
}

export interface IPersonalInformation {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    state: {
        label: string,
        value: string
    },
    email: string
}

export type GraphInterface = {
    values:{
        label:string,
        value:string
    }
}

export type CategoriesInterface = {
    name: string,
    parentCategory: {
        label: string,
        value: string
    }
}

export type CouponsInterface = {
    name: string,
    code: string,
    discountPrice: number,
    limit:number,
    expiryDate:Date
}

export type EgiftCardInterface = {
    name: string,
    code: string,
    price: string,
    image:File,
    description:string

}

export type EditMenuInterface = {
    menuName: string,
}

export type EditPagesInterface = {
    pagesCategory: {
        label: string,
        value: string
    }
}

export enum ORDER_KEY {
    totalOrder = "TotalOrders",
    pendingOrders = "PendingOrders",
    inProgressOrders = "InProgressOrders",
    completedOrders = "CompletedOrders",
    cancelledOrders = "CancelledOrders"
}

export type ProductInterface = {
    name: string,
    description: string;
    category: {
        label: string,
        value: string
    };
    attribute: {
        label: string,
        value: string
    };
    images: File;
    price: string;
    discountPrice: string;
    size: {
        label: string,
        value: string
    };
    quantity: number,
    productColor:{
        label: string,
        value: string
    };
    productColorSize:{
        label: string,
        value: string
    };
    type: {
        label: string,
        value: string
    }
    productColorQuantity: number

}

export type ProfileInterface = {
    name: string,
    email: string,
    phoneNumber: string,
    address: string,
    image: File,
    role: string,
    isSuperAdmin: boolean
}

export type CreatRoleInterface = {
    title: string,
}
export type CreateUserInterface = {
    name: string,
    email: string,
    phoneNumber: number,
    address: string,
    role: {
        value: string,
        label: string
    }
}
export enum SEO_KEY {
    Home = "Home",
    AboutUs = "AboutUs",
    ContactUs = "ContactUs",
}

export type SEOInterface = {
    metaTitle: string,
    metaDescription: string,
    keywords: string,
    tag1: string,
    tag2: string
}

export type ShippingInterface = {
    price: number,
}

export type SliderInterface = {
    image1: File,
    image2: File,
    image3: File,
    image4: File,
}

export type TexInterface = {
    tax: string,
}


// Auth Interfaces

export type IRegister = {
    name: string,
    email: string,
    phoneNumber: number,
    address: string,
    password: string,
    confirmPassword: string,
}

export type ILogin = {
    email: string,
    password: string,
    role: string
}
export enum LoginType {
    customer = '/login',
    admin = "/admin/login"
}

export type IForgotPass = {
    email: string,
}

export type IResetPass = {
    password: string,
    confirmPassword: string
}

// Career Page,Contact Page,Cart Details Interfaces

export type JobApplication = {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    applied: {
        label: string,
        value: string
    },
    date: number,
    image: File
}

export type ContactInterface = {
    name: string,
    email: string,
    textMessage: string
}

export type ShippingDetails = {
    name: string,
    address: string,
    city: string,
    country: string,
    cardNumber: number,
    cvv: number,
    expires: number
}

// Customer Panel Interfaces

export type SupportInterface = {
    subject: string,
    textMessage: string,
}

export type UploadPhotoInterface = {
    image: File,
}





