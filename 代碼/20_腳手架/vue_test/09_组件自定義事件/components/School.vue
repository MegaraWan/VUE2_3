<template>
  <div class="school">
    <h2 class="title">學校名稱：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
    <button @click="sendSchoolName">學校名給APP</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚矽谷atguigu",
      address: "北京",
    };
  },
  props: ["getSchoolName"],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>