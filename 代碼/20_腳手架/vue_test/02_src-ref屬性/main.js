// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'



// 關閉Vue生產提示
Vue.config.productionTip = false

// 創建vm
new Vue({
    el: '#app',
    render: h => h(App)
})
