<template>
  <div>
    <h1>當前求和為:{{ sum }}</h1>
    <h3>使用getters擴大10倍：{{ bigSum }}</h3>
    <h3>我在{{ school }}學習{{ study }}</h3>
    <h3 :style="{ color: 'red' }">
      下方組件的總人數是：{{ personList.length }}
    </h3>
    <select v-model.number="n">
      <!-- 需求:讓輸入的n是數字類型 -->
      <!-- 方法1:在value前面添加冒號,冒號可以讓數字變成數字類型,不加冒號就是字符串類型 -->
      <!-- 方法2:使用修飾符,在v-model後使用number -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">當前求和為奇數再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用戶選擇輸入,默認1
    };
  },
  computed: {
    ...mapState(["sum", "school", "study", "personList"]), // 數組方法
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // increment() {
    //   //  this.$store.dispatch("jia", this.n);
    //   //  不需要在actions處理,因此直接在此處調用commit;簡化寫法
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   //   this.$store.dispatch("jian", this.n);
    //   this.$store.commit("JIAN", this.n);
    // },
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>