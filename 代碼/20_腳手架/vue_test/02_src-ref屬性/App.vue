<template>
  <div>
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDOM" ref="btn">點我輸出上方的DOM元素</button>
    <!-- 給組件加ref,獲得school組件的實例對象 -->
    <School ref="sch" />
  </div>
</template>

<script>
// 引入MySchool組件
import School from "./components/MySchool.vue";

export default {
  name: "App",
  data() {
    return { msg: "歡迎光臨尚矽谷" };
  },
  components: {
    School,
  },
  methods: {
    showDOM(e) {
      // 1.原生JS方法輸出DOM標簽；但是這里是Vue不建議
      console.log("1:", e.target);
      // 2.Vue方法獲得DOM元素
      console.log("2:", this.$refs.title);
      console.log("2:", this.$refs.btn);
      console.log("-------------------");

      // 3.給組件打ref屬性,獲得的是對應組件的實例對象
      console.log(this.$refs.sch);
    },
  },
};
</script>
