<template>
  <div class="student">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <button @click="sendStudentName">學生名給APP</button>
    <button @click="unbind">解綁事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "張三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 觸發student實例上的atguigu事件
      this.$emit("atguigu", this.name);
    },
    unbind() {
      // this.$off("atguigu");
      this.$off()
    },

  },
};
</script>

<style  scoped>
.student {
  background-color: pink;
  margin-top: 30px;
  padding: 5px;
}
</style>
