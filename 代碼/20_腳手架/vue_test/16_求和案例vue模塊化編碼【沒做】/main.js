//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//關閉Vue的生產提示
Vue.config.productionTip = false

// 引入store
import store from './store'  // 沒寫默認引入該文件夾下的index

//創建vm
const vm = new Vue({
	el: '#app',
	store,
	render: h => h(App),
})

