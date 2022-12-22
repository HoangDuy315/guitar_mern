// import {OnlyComponents} from '../Layout'

import { Login, Signup } from "../component/pages/login_register/index";
import {
  About,
  Contact,
  Guitar,
  Blog,
  Header,
  Home,
  Footer,
  QLUser,
  InforUser,
  QLProduct,
  Terms,
  Cart,
  Checkout,
} from "../component/index";

const publichRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: Signup, layout: null },
  { path: "/terms", component: Terms, layout: null },
];
const privateRoutes = [
  { path: "/", component: Home },
  { path: "/header", component: Header },
  { path: "/footer", component: Footer },
  { path: "/about", component: About },
  { path: "/guitar", component: Guitar },
  { path: "/blog", component: Blog },
  { path: "/checkout", component: Checkout },
  { path: "/contact", component: Contact },
  { path: "/inforuser", component: InforUser },
  { path: "/cart", component: Cart },
];
const adminRouter = [
  { path: "/", component: Home },
  { path: "/header", component: Header },
  { path: "/footer", component: Footer },
  { path: "/about", component: About },
  { path: "/guitar", component: Guitar },
  { path: "/blog", component: Blog },
  { path: "/checkout", component: Checkout },
  { path: "/contact", component: Contact },
  { path: "/inforuser", component: InforUser },
  { path: "/cart", component: Cart },
  { path: "/qluser", component: QLUser },
  { path: "/qlproduct", component: QLProduct },
]
export { publichRoutes, privateRoutes, adminRouter };
