<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 添加數據 -->
        <my-header :addTodo="addTodo" />
        <!-- 渲染數據 -->
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader,
    List,
  },
  data() {
    return {
      // 解決沒有本地存儲,返回值是null沒有length屬性的錯誤問題.
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一個todo
    addTodo(todoObj) {
      // 保存接受到的數據
      this.todos.unshift(todoObj);
    },
    // 勾選or取消勾選一個todos
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 刪除數據
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全選or取消全選
    checkAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },
    // 清楚所有已經完成的Todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    // 監視屬性下的函數可以有兩個參數,第一個是新值,第二個是舊值
    // 每次變化存儲的都是整個權限的todos,而不是其中的一條.
    todos: {
      // 需要使用深度監視,可以監視數組里面的每一項是否發生變化
      deep:true,
      handler(newValue) {
        localStorage.setItem('todos',JSON.stringify(newValue))
      },
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
