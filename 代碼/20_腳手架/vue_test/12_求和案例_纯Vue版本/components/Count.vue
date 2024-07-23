<template>
  <div>
    <h1>當前求和為:{{ sum }}</h1>
    <select v-model.number="n">
      <!-- 需求:讓輸入的n是數字類型 -->
      <!-- 方法1:在value前面添加冒號,冒號可以讓數字變成數字類型,不加冒號就是字符串類型 -->
      <!-- 方法2:使用修飾符,在v-model後使用number -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">當前求和為奇數再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用戶選擇輸入,默認1
      sum: 0, // 求和
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>