/**
 * 該文件專門用於創建整個應用的路由器
 */
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'



// 創建並暴露路由器
export default new VueRouter({
    // 配置路由規則,key:value
    routes: [
        {
            path: '/about',
            // 注意，千萬不要寫成<About / >
            component: About  // 組件的路徑在最開始就import導入了
        },
        {
            path: '/home',
            component: Home,
            // 嵌套路由需要寫在自己父親的下面
            children: [
                {
                    // 子路由前面的path不能加斜杠/
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        },

    ]
})

