<template>
  <div class="school">
    <h2 class="title">學校名稱：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js"; // pubsub是對象形式
export default {
  name: "School",
  data() {
    return {
      name: "尚矽谷atguigu",
      address: "北京",
    };
  },
  mounted() {
    // 訂閱一個消息
    // 接受到的參數,第一個參數是消息名,第二個參數是接受到的數據
    // 和定時器類似,會返回一個唯一id
    this.pubId = pubsub.subscribe("hello", function (msgName, data) {
      console.log("有人發布hello消息,hello消息的回調執行了", msgName, data);
      // 回調函數寫成普通形式,里面的This不在指向vc實例化對象
      // 回調函數寫成箭頭函數形式,里面的this指向vc實例化對象,不出現問題
      // 或者把回調函數寫在methods中,普通函數的形式this也是指向vc實例化對象
      console.log(this);
    });
  },
  beforeDestroy() {
    // 取消訂閱,定時器
    pubsub.undescribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>