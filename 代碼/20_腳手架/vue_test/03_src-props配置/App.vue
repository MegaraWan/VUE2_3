<template>
  <div>
    <!-- 这三个实例对象之间是独立的 -->
    <!-- 组件在复用，数据是独立的 -->

    <!-- 2.传送方，数字类型：冒号可以让里面的东西是数据类型；执行的引号里面是JS表达式 -->
    <!-- 不添加冒号则传送过去的都是字符串 -->
    <Student name="李四" sex="男" />
    <Student name="王五" :age="38" sex="男" />
    <Student name="张三" :age="66" sex="男" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { Student },
};
</script>
