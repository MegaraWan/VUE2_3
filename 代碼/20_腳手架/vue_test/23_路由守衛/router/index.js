/**
 * 該文件專門用於創建整個應用的路由器
 */
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 創建路由器
const router = new VueRouter({
    // 修改路由器的工作模式
    mode: 'history',
    // 配置路由規則,key:value
    routes: [
        {
            // 路由命名
            name: 'guanyu',
            path: '/about',
            // 注意，千萬不要寫成<About / >
            component: About,  // 組件的路徑在最開始就import導入了
            meta: { title: '關於' }
        },
        {
            name: 'shoye',
            path: '/home',
            component: Home,
            meta: { title: '首頁' },
            // 嵌套路由需要寫在自己父親的下面
            children: [
                {
                    name: 'xinwen',
                    // 子路由前面的path不能加斜杠/
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新聞' },
                    // 獨享路由守衛——只有前置沒有後置
                    // beforeEnter: (to, from, next) => {
                    //     // 邏輯和全局前置守衛的邏輯一樣
                    //     if (to.meta.isAuth) {
                    //         if (JSON.parse(localStorage.getItem('school')) === 'atguigu') {
                    //             next()
                    //         } else {
                    //             alert('學校名不對,不與通過!')
                    //         }
                    //     } else {
                    //         // 其他頁面全部允許訪問,不做任何限制
                    //         next()
                    //     }
                    // }

                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title', // 使用占位符 聲明接受pramas參數
                            component: Detail,
                            meta: { isAuth: true, title: '詳情' }

                        }
                    ]

                }
            ]
        },

    ]
})


// 創建全局前置路由守衛
// 調用時機: 1.初始化的時候調用 2.每次路由切換之前
// 都會調用beforeEach中的函數
// router.beforeEach((to, from, next) => {
//     console.log('@我是前置路由守衛!');
//     // to 要去哪里
//     // from 來自哪里

//     // 不告訴路由守衛放行,他是不會放行的;攔截式操作
//     // 路由守衛會把所有的東西都攔住,需要寫next()方法才會放行
//     // next  


//     // 如果想訪問以下兩個頁面,且是尚矽谷學校的就放行
//     // if (to.path === '/home/news' || to.path === '/home/message') {
//     // 使用路由元數據代替上述寫法
//     if (to.meta.isAuth) {
//         if (JSON.parse(localStorage.getItem('school')) === 'atguigu') {
//             next()
//         } else {
//             alert('學校名不對,不與通過!')
//         }
//     } else {
//         // 其他頁面全部允許訪問,不做任何限制
//         next()
//     }

// })

// 全局後置路由守衛
// 調用時機: 1.初始化時調用 2.每次路由切換之後
// 後置路由守衛沒有next方法
// router.afterEach((to, from) => {
//     console.log('@我是後置路由守衛!');
//     // 應用場景:在切換頁面之後,更換瀏覽器頁簽中的標題為頁面對應的內容
//     // console.log(to.meta.title);
//     document.title = to.meta.title || '矽谷系統'
// })



export default router