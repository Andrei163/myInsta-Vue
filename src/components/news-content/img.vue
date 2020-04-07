<template>
    <img class="news-content__img" :src="img">
</template>


<script>
export default {
    props: ['img']
}
</script>
<style scoped>
.news-content__img {
    width: 100%
}
</style>