<template>
  <!-- 組件結構 -->
  <div class="demo">
    <h2>學校名稱：{{ name }}</h2>
    <h2>學校地址：{{ addr }}</h2>
  </div>
</template>

<script>
// 組件交互相關代碼，如數據、方法等

// 暴露數據，其他程序才可以引入；建議默認暴露方法,因為後面引入可以簡寫
export default {
  name: "School", // 在這里寫名字的目的,在Vue開發者工具中顯示School
  data() {
    return {
      name: "尚矽谷",
      addr: "北京",
    };
  },
};
</script>

<style>
/* 組件樣式代碼 */
.demo {
  background-color: pink;
}
</style>

     