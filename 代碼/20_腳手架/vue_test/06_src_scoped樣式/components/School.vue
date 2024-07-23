<template>
	<div class="demo">
		<h2 class="title">學校名稱：{{name}}</h2>
		<h2>學校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚矽谷atguigu',
				address:'北京',
			}
		}
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>