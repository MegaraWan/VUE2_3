<template>
  <div>
    <!-- 也可以寫自閉和,因為這里是腳手架的形式 -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// APP用來匯總所有組件
// 引入組件
import School from "./School.vue";
import Student from "./Student.vue";
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