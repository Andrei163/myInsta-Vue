import VueRouter from 'vue-router'
import home from '@/pages/home'
import user from '@/pages/user'



export default new VueRouter ({
    routes: [
        {
        path: '/home', 
        component: home
        },
        {
        path: '/user', 
        component: user
        }
],
mode: 'history'

})