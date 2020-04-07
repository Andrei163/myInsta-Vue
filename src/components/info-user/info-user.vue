<template>
  <div class="info">
    <div class="info__title">
      <h2 class="info__name">Name.Surname</h2>
      <p class="info__button-wrapper">
        <button class="info__btn-ls" @click="loading">Загрузить фото</button>
        <input v-model="picture" />
      </p>
      <span class="info__button-wrapper">
        <button class="info__btn-sign">Подписаться</button>
      </span>
    </div>
    <div class="public-stat">
      <ul class="list">
        <li>
          <b>300</b> публикаций
        </li>
        <li>
          <b>300</b> подписчиков
        </li>
        <li>
          <b>300</b> подписок
        </li>
      </ul>
    </div>
    <div class="info-user">
      <h1 class="info-user__name">Name Surname</h1>
      <span class="info-user__link">https://vk.com</span>
      <a class="info-user__youtube" href>https://youtube.com</a>
    </div>

    <div class="followers">
      <span class="followers__info">Подписаны</span>
      <span class="followers__info">
        <b>user</b>
      </span>
      <span class="followers__info">
        <b>user</b>
      </span>
      <span class="followers__info">и еще +3</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loading() {
      const images = {
        url: this.picture
        
      };
    
      this.$store.dispatch("loadImg", images);
    }
  },
  computed: {
    
  }
};
</script>


<style scoped>
.info {
  grid-column: 2/4;
  grid-row: 2/3;
}

.info__btn-sign-ico-wrapper {
  height: 26px;
}

.info__btn-sign-ico {
  background-image: url(/img/sprite.png);
  background-position: -350px -377px;
}

.info__title {
  display: flex;
  align-items: center;
}

.info__name {
  font-size: 20px;
}

.info__btn-ls {
  height: 25px;
}

.info__btn-sign {
  height: 25px;
}

.info__button-wrapper {
  display: block;
  margin-left: 10px;
}

.info__btn-sign-ico-wrapper {
  height: 26px;
}

.info__btn-sign-ico {
  background-image: url(/img/sprite.png);
  height: 15px;
  width: 15px;
  background-position: -700px -750px;
}

.public-stat {
  height: 50px;
  margin-top: 25px;
}

.list {
  display: flex;
  list-style: none;
  font-size: 18px;
}

.list > li {
  margin-right: 40px;
}

.info-user__name {
  font-size: 20px;
}

.info-user__link {
  line-height: 30px;
  font-size: 18px;
}

.info-user__youtube {
  display: block;
  font-size: 18px;
  text-decoration: none;
  color: #3819e9;
}

.followers {
  font-size: 14px;
  margin-top: 20px;
}
</style>