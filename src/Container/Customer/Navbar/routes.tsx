import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri"

import Profile from "../Pages/Profile/Profile";
import Orders from "../Pages/Orders/Orders";
import Support from "../Pages/Support/Support";
import UploadPhoto from "../Pages/UploadPhoto/UploadPhoto";
import Rewards from "../Pages/Rewards/Rewards";
import OrderDetails from '../../Admin/Pages/Order/OrderDetails/OrderDetails';
import ResetPassword from "../../Auth/ResetPassword/ResetPassword";
import React from "react";

export interface RoutesLink {
    component: JSX.Element,
    path: string,
}

export interface SideBarCustomerRoutes {
    icon: JSX.Element,
    path?: string,
    title: string,
}

export const customerRoutes: RoutesLink[] = [
    {
        path: '/customer/profile',
        component: <Profile/>,
    },
    {
        path: '/customer/orders',
        component: <Orders/>,
    },
    {
        path: '/customer/contact-support',
        component: <Support/>,
    },
    {
        path: '/customer/upload-photo',
        component: <UploadPhoto/>,
    },
    {
        path: '/customer/rewards',
        component: <Rewards/>,
    },
    {
        path: '/customer/order-details/:id',
        component: <OrderDetails/>,
    },
    {
        path: "/customer/reset-password",
        component: <ResetPassword />
    },
]

export const customerSideBarItems: SideBarCustomerRoutes[] = [
    {
        path: '/customer/profile',
        icon: <AiIcons.AiFillDashboard/>,
        title: 'Profile',
    },
    {
        path: '/customer/orders',
        icon: <RiIcons.RiProductHuntFill/>,
        title: 'Orders',
    },
    {
        path: '/customer/contact-support',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Contact Support',
    },
    {
        path: '/customer/upload-photo',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Upload Photo',
    },
    {
        path: '/customer/rewards',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Reward and Gift',
    },
]
