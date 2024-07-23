<template>
  <div>
    <ul>
      <li>消息编号：???</li>
      <li>消息内容：???</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route.query);
  },
};
</script>

<style>
</style>