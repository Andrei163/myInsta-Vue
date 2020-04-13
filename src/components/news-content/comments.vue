<template>
<div>
<p class="news-content__comment">
		<b>{{ name }}:</b> {{ message }} 
	</p>

</div>
    
</template>

<script>
export default {
    props: ["name", "message", "index"]
}
</script>


<style scoped>
.news-content__comment {
    padding: 0 20px 0 10px
}
</style>