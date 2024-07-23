<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="請輸入你的任務名稱，按回車鍵確認"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  props: ["addTodo"],
  methods: {
    add(e) {
      // 校驗數據
      if (!e.target.value.trim()) return alert("輸入不能為空");
      const todoObj = { id: nanoid(), title: e.target.value, done: false };

      // 通知APP組件添加數據
      this.addTodo(todoObj);
      console.log('@header',this);
      e.target.value = "";
    },
  },
};
</script>

<style scope>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>