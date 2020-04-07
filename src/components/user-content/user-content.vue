<template>
  <div class="content">
    <a href>
      <img :src="userImg" alt height="300" />
    </a>
    <!-- <a href=""><img src="../../assets/4.jpg" alt="" width='300'></a> -->
  </div>
</template>

<script>
export default {
  props: ["userImg"]
};
</script>

<style scoped>
.content {
  display: flex;
  justify-self: center;
  align-self: center;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

.content__img {
  display: block;
  justify-content: center;
  min-height: 200px;
  min-width: 300px;
  justify-content: center;
  vertical-align: middle;
}

a {
  display: block;
  margin: 0 auto;
}
</style>