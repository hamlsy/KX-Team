import Vue from 'vue';
import VueRouter from 'vue-router';
import TempPage from '@/components/TempPage.vue';
import RoadViewModeMain from '@/components/roadViewMode/RoadViewModeMain.vue';
import PhotoModeMain from '@/components/photoMode/PhotoModeMain.vue';
import HomePage from '@/components/HomePage.vue';
import MainPage from '@/components/MainPage.vue';
import RoadViewPractice from '@/components/roadViewMode/RoadViewPractice.vue';
import TestMapPage from '@/components/TestMapPage.vue';


Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect: "/homePage",
    },
    {
        path:'/mainPage',
        name: "MainPage",
        component: MainPage
    },
    {
        path: '/homePage',
        name: "HomePage",
        component: HomePage
    },
    {
        path: '/roadViewModeMain',
        name: "RoadViewModeMain",
        component: RoadViewModeMain
    },
    {
        path: '/photoModeMain',
        name: "PhotoModeMain",
        component: PhotoModeMain
    },
    {
        path:'/roadViewPractice',
        name: "RoadViewPractice",
        component: RoadViewPractice
    },
    {
        path: '/tempPage',
        name: "TempPage",
        component: TempPage
    },
    {
        path: '/testMapPage',
        name: "TestMapPage",
        component: TestMapPage
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;