<template>
  <div>
    <button type="button" @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    // http://localhost:5000/students
    getStudents() {
      // 把请求发送给8080;域名后面的路径不变
      axios.get("http://localhost:8080/test.txt").then(
        (res) => {
          console.log("请求成功,", res.data);
        },
        (err) => {
          console.log("请求失败了", err);
        }
      );
    },
  },
};
</script>

