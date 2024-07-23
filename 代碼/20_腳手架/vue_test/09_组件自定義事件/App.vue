<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通過父組件傳遞給子組件函數類型的props,可以接受到子組件的數據 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 1.通過父組件給子組件綁定一個自定義事件:實現子給父傳遞數據 -->
    <!-- <Student @atguigu="demo" /> -->

    <!-- 2.子組件綁定事件的另一個方法 -->
    <Student ref="student" />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  data() {
    return {
      msg: "你好啊",
    };
  },
  components: { School, Student },
  methods: {
    getSchoolName(name) {
      console.log("APP收到了學校名:", name);
    },
    demo(name) {
      console.log("APP收到了學生名:", name);
    },
  },
  mounted() {
    // 另外一種給子組件綁定事件的方法
    // 需求:等待3s再觸發時間
    setTimeout(() => {
      this.$refs.student.$on("atguigu", this.demo);
      // 要求只觸發一次
      // this.$refs.student.$once("atguigu", this.demo);
    }, 1000);
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
