import { Home, Video } from '@/pages';
import { DefaultLayout, OnlyHeaderLayout } from '@/layouts';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/video', component: Video, layout: OnlyHeaderLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
