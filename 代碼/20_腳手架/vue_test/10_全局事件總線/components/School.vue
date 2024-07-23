<template>
  <div class="school">
    <h2 class="title">學校名稱：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
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
  mounted() {
    console.log("School", this.x);
    this.x.$on("aa", (name) => {
      console.log("我是school", name);
    });
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>