import { createWebHistory, createRouter } from "vue-router";
import Faq from './components/faq/Faq.vue';
import Qna from './components/Qna.vue';
import Login from './components/user/Login.vue';
import Updateform from './components/Updateform.vue';
import FaqOne from './components/faq/FaqOne.vue';
import Notice from './components/notice/Notice.vue';
import Front from './components/lecture/Front.vue';
import Backend from './components/lecture/Backend.vue';
import Mobile from './components/lecture/Mobile.vue';
import LectureDetail from './components/lecture/LectureDetail.vue'

const routes = [
    {
        path: '/',
        redirect: '/home',
        
    },
    {
        path: "/faq",
        component: Faq,
        children:[
            {
                path: "updateform/:faqNum",
                component: Updateform, 
            }
        ]
    },
    {
        path: "/faqOne/:faqNum",
        component: FaqOne,
    },
    {
        path: "/front",
        component: Front
    },
    {
        path: "/backend",
        component: Backend
    },
    {
        path: "/mobile",
        component: Mobile
    },
    {
        path: "/lectureDetail/:lecNum",
        component: LectureDetail
    },
    {
        path: "/notice",
        component: Notice
    },
    {
        path: "/qna",
        component: Qna
    },
    {
        path: "/home",
        component: () => import('@/components/Home.vue')
    },
    {
        path: "/login",
        component: Login
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
