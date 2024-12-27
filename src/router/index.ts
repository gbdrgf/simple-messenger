import { createRouter, createWebHistory } from 'vue-router';
import ChatWindow from '@/components/ChatWindow.vue';

const routes = [
    {
        path: '/',
        name: 'ChatWindow',
        component: ChatWindow,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
