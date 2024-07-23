<template>
  <div class="demo">
    <h2>學校名稱：{{ name }}</h2>
    <h2>學校地址：{{ age }}</h2>
    <button @click="showName"></button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "李華",
      age: 14,
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>