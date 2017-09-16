import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Coins from '@/components/Coins';
import ToDos from '@/components/ToDos';

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/coins/:id',
            name: 'Coins',
            component: Coins,
        },
        {
            path: '/todos/',
            name: 'ToDos',
            component: ToDos,
            children: [
                {
                    path: 'all',
                    component: ToDos,
                },
                {
                    path: 'active',
                    component: ToDos,
                },
                {
                    path: 'completed',
                    component: ToDos,
                },
            ],
        },
    ],
});

export default router;
