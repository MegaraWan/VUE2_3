<template>
  <div class="demo">
    <h2>學校名稱：{{ name }}</h2>
    <h2>學校地址：{{ age }}</h2>
    <button @click="showName">點我顯示</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "李華",
      age: 14,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>