<template>
  <div>
    <!-- 也可以寫自閉和,因為這里是腳手架的形式 -->
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// APP用來匯總所有組件
// 引入組件
import School from "./components/MySchool.vue";
import Student from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>