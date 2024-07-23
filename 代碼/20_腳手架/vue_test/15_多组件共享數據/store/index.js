/**
 * 該文件用於創建Vuex最為核心的store
 */

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 準備actions--用於響應組件中的動作
const actions = {
    // context上下文,就是小型的store,包含需要的操作內容
    // value傳入的數據
    // jia(context, value) {
    //     console.log('jia');
    //     context.commit('JIA', value)  // commit封裝在context上下文之中
    // },
    // jian(context, value) {
    //     console.log('jian');
    //     context.commit('JIAN', value)

    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }

    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被調用了');
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)

    }
}
// 準備mutations--用於操作數據(state)
const mutations = {
    // 這里的key寫成大寫
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('@mutations中的ADD_PERSON被調用了');
        state.personList.unshift(value)
    }

}
// 準備state--用於存儲數據
const state = {
    sum: 0, // 用來求和
    school: '尚矽谷',
    study: '前端',
    personList: [
        { id: '001', name: 'ppgo' },
        { id: '002', name: 'ppzhu' }
    ]
}

// 準備getters——用於將state中的數據進行加工
const getters = {
    // 有些類似計算屬性，但是不完全是
    // 返回值賦值給函數名
    bigSum(state) {
        return state.sum * 10
    }
}



// 創建並暴露store
export default new Vuex.Store({
    // 采用對象的簡寫形式
    actions: actions,
    mutations,
    state,
    getters,

})

// 導出/暴露store
// export default store