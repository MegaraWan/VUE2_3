<template>
  <div>
    <h1 v-text="msg"></h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <!-- 2.接收方 传过来是字符串类型，+强制类型转换为数字类型 -->
    <h2>学生年龄：{{ myAge }}</h2>

    <button @click="updateAge">点击修改年龄</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是尚硅谷的一个学生",
      myAge: this.age,
    };
  },
  // props配置项写法
  // 1.数组,顺序不重要；简单声明接受
  // props: ["name", "age", "sex"],

  // 2.对象,接收数据的同时限制类型
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },

  // 3.多层对象,全部限制：类型+默认值指定+是否必须填写
  props: {
    name: {
      type: String, // 数据类型
      required: true, // 传送方必须传
    },
    age: {
      type: Number,
      default: 99, // 默认数值,不和required一起用
    },
    sex: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateAge() {
      // this指向组件对应的实例化对象，用vc来指代。
      this.myAge++;
    },
  },
};
</script>
