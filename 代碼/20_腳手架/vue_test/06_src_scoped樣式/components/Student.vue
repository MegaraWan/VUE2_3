<template>
	<div class="demo">
		<h2 class="title">學生姓名：{{name}}</h2>
		<h2 class="atguigu">學生性別：{{sex}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'張三',
				sex:'男'
			}
		}
	}
</script>

<style lang="less" scoped>
	.demo{
		background-color: pink;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
