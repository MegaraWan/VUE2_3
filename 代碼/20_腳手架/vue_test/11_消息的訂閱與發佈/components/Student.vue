<template>
  <div class="student">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <button @click="sendStudentName">把學生名給School組件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"; // pubsub是對象形式
export default {
  name: "Student",
  data() {
    return {
      name: "張三",
      sex: "男",
    };
  },
  methods: {
    // 學生方,發送消息;
    // 什麽時候發送?在點擊按鈕的時候
    sendStudentName(){
      pubsub.publish('hello',666)
    }
    
  },
  mounted() {},
};
</script>

<style  scoped>
.student {
  background-color: pink;
  margin-top: 30px;
  padding: 5px;
}
</style>
