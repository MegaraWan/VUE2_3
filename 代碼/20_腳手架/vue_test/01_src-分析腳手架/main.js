// 引入vue
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'

// 引入APP组件
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false;

let person = {a:1}
new Vue({
    el: '#app',
    render: (h) => h(App),

    // template:'<h1>你好</h1>',
    // components:{App}

})