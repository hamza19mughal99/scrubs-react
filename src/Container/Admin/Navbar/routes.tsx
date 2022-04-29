import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiReceiptTax } from "react-icons/hi";
import { FaCriticalRole, FaSlidersH, FaUserEdit } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

import Profile from "../Pages/Profile/Profile";
import Orders from "../Pages/Order/Order";
import Taxes from "../Pages/Taxes/Taxes";
import ShippingCost from "../Pages/ShippingCost/ShippingCost";
import Coupons from "../Pages/Coupons/Coupons";
import CreateCoupons from "../Pages/Coupons/CreateCoupons/CreateCoupons";
import Categories from "../Pages/Categories/Categories";
import Attributes from "../Pages/Attributes/Attributes";
import Products from "../Pages/Products/Product";
import CreateProduct from "../Pages/Products/CreateProduct/CreateProduct";
import CreateUser from "../Pages/AllUsers/CreateUser/CreateUser";
import Role from "../Pages/Role/Role";
import CreateRole from "../Pages/Role/CreateRole/CreateRole";
import EditMenu from "../Pages/EditMenu/EditMenu";
import PictureApproval from "../Pages/PictureApproval/PictureApproval";
import Review from "../Pages/Review/Review";
import Slider from "../Pages/Slider/Slider";
import Seo from "../Pages/SEO/Seo";
import EditPages from "../Pages/EditPages/EditPages";
import EditCategory from "../Pages/Categories/CreateCategory/CreateCategory";
import CreateAttribute from "../Pages/Attributes/CreateAttribute/CreateAttribute";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Dispute from "../Pages/Dispute/Dispute";
import Colors from "../Pages/Colors/Color";
import CreateColor from "../Pages/Colors/CreateColor/CreateColor";
import Graph from "../Pages/Graph/Graph";
import EGiftCard from "../Pages/EGiftCard/EGiftCard";
import CreateEGiftCard from "../Pages/EGiftCard/CreateEGiftCard/CreateEGiftCard";
import EGiftCardHisotry from "../Pages/EGiftCardHistory/EGiftCardHistory";
import OrderDetails from "../Pages/Order/OrderDetails/OrderDetails";
import ResetPassword from "../../Auth/ResetPassword/ResetPassword";
import React from "react";
import EditProduct from "../Pages/Products/EditProduct/EditProduct";
import ReturnOrder from "../Pages/ReturnOrder/ReturnOrder";
import Home from '../Pages/EditPages/Home/Home';
import About from "../Pages/EditPages/About/About";

export interface RoutesLink {
  component: JSX.Element;
  path: string;
}

export interface SideBarAdminRoutes {
  icon: JSX.Element;
  path?: string;
  title: string;
  ability: string;
  isSubNav?: boolean,
  subNav?: {
    path: string,
    title: string
  }[]
}

export const adminRoutes: RoutesLink[] = [
  {
    path: "/admin/profile",
    component: <Profile />,
  },
  {
    path: "/admin/orders",
    component: <Orders />,
  },
  {
    path: "/admin/return",
    component: <ReturnOrder/>
  },
  {
    path: "/admin/taxes",
    component: <Taxes />,
  },
  {
    path: "/admin/coupons",
    component: <Coupons />,
  },
  {
    path: "/admin/create-coupon",
    component: <CreateCoupons />,
  },
  {
    path: "/admin/edit-coupon/:id",
    component: <CreateCoupons />,
  },
  {
    path: "/admin/shipping-cost",
    component: <ShippingCost />,
  },
  {
    path: "/admin/categories",
    component: <Categories />,
  },
  {
    path: "/admin/create-categories",
    component: <EditCategory />,
  },
  {
    path: "/admin/create-categories/:id",
    component: <EditCategory />,
  },
  {
    path: "/admin/attributes",
    component: <Attributes />,
  },
  {
    path: "/admin/create-attributes",
    component: <CreateAttribute />,
  },
  {
    path: "/admin/create-attributes/:id",
    component: <CreateAttribute />,
  },
  {
    path: "/admin/products",
    component: <Products />,
  },
  {
    path: '/admin/edit-product/:id',
    component: <EditProduct />,
  },
  {
    path: "/admin/create-product",
    component: <CreateProduct />,
  },
  {
    path: "/admin/create-user",
    component: <CreateUser />,
  },
  {
    path: "/admin/role",
    component: <Role />,
  },
  {
    path: "/admin/create-role",
    component: <CreateRole />,
  },
  {
    path: "/admin/edit-role/:id",
    component: <CreateRole />,
  },
  {
    path: "/admin/edit-menu",
    component: <EditMenu />,
  },
  {
    path: "/admin/picture-approval",
    component: <PictureApproval />,
  },
  {
    path: "/admin/review-approval",
    component: <Review />,
  },
  {
    path: "/admin/slider",
    component: <Slider />,
  },
  {
    path: "/admin/seo",
    component: <Seo />,
  },
  {
    path: "/admin/edit-pages",
    component: <EditPages />,
  },
  {
    path: "/admin/all-users",
    component: <AllUsers />,
  },
  {
    path: "/admin/dispute",
    component: <Dispute />,
  },
  {
    path: "/admin/colors",
    component: <Colors />,
  },
  {
    path: "/admin/create-colors",
    component: <CreateColor />,
  },
  {
    path: "/admin/product-graph",
    component: <Graph />,
  },
  {
    path: "/admin/e-giftcard",
    component: <EGiftCard />,
  },
  {
    path: "/admin/create-egiftcard",
    component: <CreateEGiftCard />,
  },

  {
    path: "/admin/edit-egiftCard/:id",
    component: <CreateEGiftCard />,
  },

  {
    path: "/admin/egiftcard-history",
    component: <EGiftCardHisotry />,
  },

  {
    path: "/admin/order-details/:id",
    component: <OrderDetails />,
  },
  {
    path: "/admin/reset-password",
    component: <ResetPassword />
  },
  {
    path: "/admin/edit-home",
    component: <Home />
  },
  {
    path: "/admin/edit-about",
    component: <About />
  },
];

export const adminSideBarItems: SideBarAdminRoutes[] = [
  {
    path: "/admin/profile",
    icon: <CgProfile />,
    title: "Profile",
    ability: "profile",
    isSubNav: false
  },
  {
    path: "/admin/orders",
    icon: <MdIcons.MdOutlineViewHeadline />,
    title: "View Orders",
    ability: "order",
    isSubNav: false
  },
  {
    path: "/admin/dispute",
    icon: <MdIcons.MdOutlineCategory />,
    title: "Dispute",
    ability: "dispute",
    isSubNav: false
  },
  {
    path: "/admin/return",
    icon: <MdIcons.MdOutlineCategory />,
    title: "Return",
    ability: "return",
    isSubNav: false
  },
  {
    path: "/admin/categories",
    icon: <MdIcons.MdCategory />,
    title: "Categories",
    ability: "categories",
    isSubNav: false
  },
  {
    path: "/admin/attributes",
    icon: <MdIcons.MdEditAttributes />,
    title: "Attributes",
    ability: "attributes",
    isSubNav: false
  },
  {
    path: "/admin/colors",
    icon: <MdIcons.MdBorderColor />,
    title: "Colors",
    ability: "colors",
    isSubNav: false
  },
  {
    path: "/admin/products",
    icon: <RiIcons.RiProductHuntFill />,
    title: "Products",
    ability: "products",
    isSubNav: false
  },
  {
    path: "/admin/coupons",
    icon: <RiIcons.RiCoupon3Line />,
    title: "Coupons",
    ability: "coupon",
    isSubNav: false
  },
  {
    path: "/admin/e-giftcard",
    icon: <MdIcons.MdAutoGraph />,
    title: "E-Gift Card",
    ability: "giftCard",
    isSubNav: false
  },

  {
    path: "/admin/egiftcard-history",
    icon: <MdIcons.MdAutoGraph />,
    title: "E-Gift History",
    ability: "giftCardHistory",
    isSubNav: false
  },
  {
    path: "/admin/picture-approval",
    icon: <MdIcons.MdOutlineApproval />,
    title: "Picture Approval",
    ability: "pictureApproval",
    isSubNav: false
  },
  {
    path: "/admin/review-approval",
    icon: <MdIcons.MdOutlineReviews />,
    title: "Review Approval",
    ability: "reviewApproval",
    isSubNav: false
  },
  {
    path: "/admin/shipping-cost",
    icon: <RiIcons.RiPriceTag3Fill />,
    title: "Shipping Cost",
    ability: "shippingCost",
    isSubNav: false
  },
  {
    path: "/admin/taxes",
    icon: <HiReceiptTax />,
    title: "Taxes",
    ability: "taxes",
    isSubNav: false
  },
  {
    path: "/admin/role",
    icon: <FaCriticalRole />,
    title: "Role",
    ability: "role",
    isSubNav: false
  },
  {
    path: "/admin/all-users",
    icon: <FiUsers />,
    title: "All Users",
    ability: "user",
    isSubNav: false
  },
  {
    path: "/admin/edit-pages",
    icon: <MdIcons.MdEditNote />,
    title: "Edit Pages",
    ability: "editPage",
    isSubNav: true,
    subNav: [
      {
        path: '/admin/edit-home',
        title: 'Home'
      },
      {
        path: '/admin/edit-about',
        title: 'About'
      }
    ]
  },
  {
    path: "/admin/edit-menu",
    icon: <MdIcons.MdEditNote />,
    title: "Edit Menu",
    ability: "editMenu",
    isSubNav: false,
  },
  {
    path: "/admin/slider",
    icon: <FaSlidersH />,
    title: "Slider",
    ability: "slider",
    isSubNav: false,
  },
  {
    path: "/admin/seo",
    icon: <MdIcons.MdOutlineCategory />,
    title: "SEO",
    ability: "seo",
    isSubNav: false,
  },
  {
    path: "/admin/product-graph",
    icon: <MdIcons.MdAutoGraph />,
    title: "Graph",
    ability: "graph",
    isSubNav: false
  },
];
