
// import {OnlyComponents} from '../Layout'

import {Login, Signup} from '../component/pages/login_register/index';
import { About, Contact, Guitar, Blog, Header, Home, Footer, QLUser, InforUser, QLProduct, Terms, Cart } from '../component/index';


const publichRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null},
    { path: '/signup', component: Signup, layout: null},
    { path: '/terms', component: Terms, layout: null},

]
const  privateRoutes = [
    { path: '/', component: Home },
    { path: '/header', component: Header },
    { path: '/footer', component: Footer },
    { path: '/about', component: About},
    { path: '/guitar', component: Guitar},
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/qluser', component: QLUser },
    { path: '/qlproduct', component: QLProduct },
    { path: '/inforuser', component: InforUser },
    { path: '/cart', component: Cart },
]

export {publichRoutes, privateRoutes}