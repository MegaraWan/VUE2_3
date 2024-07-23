//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//關閉Vue的生產提示
Vue.config.productionTip = false


// 使用vc構造事件總線
/* 
const Demo = Vue.extend({})
const d = new Demo()  // 因為這里沒辦法寫,沒通過標簽實例化<Demo /> 
Vue.prototype.x = d
*/


//創建vm
const vm = new Vue({
	el: '#app',
	render: h => h(App),
	// 如果寫在外邊,是不行的;
	// 寫在外面所有已經執行完了;其他的鉤子在mounted的時候就已經開始調用下面的方法了,會報錯;
	// 所以需要在最開始就寫事件總線
	beforeCreate() {
		// 最標準的事件總線方法
		// 加$符是為了符合vue對變量名的設計,有$符的給程序員用 
		Vue.prototype.$bus = this
	}

})

