<template>
  <div class="main">
    <logo />
    <headerSearch />
    <buttons />
    <stories />
    <newsContent v-for="(image, index) in imagess" :key="index" :index="index" :img="image.url" />
  </div>
</template>

<script>
import logo from "@/components/logo/logo";
import headerSearch from "@/components/header-search/headerSearch";
import buttons from "@/components/header-button/buttons";
import stories from "@/components/storiesall/stories";
import newsContent from "@/components/news-content/news-content";

export default {
  data() {
    return {
      endpoint: "http://jsonplaceholder.typicode.com/photos",
      images: [],
      resource: null
    };
  },
  components: {
    logo,
    headerSearch,
    buttons,
    stories,
    newsContent
  },
  // methods: {
  //   loadImg() {
  //     let options = {
  //       params: {
  //         _start: 1,
  //         _limit: 10
  //       }
  //     };
  //     this.$http.get(this.endpoint, options).then(function(response) {
  //       this.images = response.data;
  //     });
  //   },

  //   created: function() {
  //     this.loadImg();
  //   }
  // },
  computed: {
    imagess() {
      return this.$store.getters.image;
    }
  },
  mounted() {
    this.loadImg();
  }
};
</script>




<style scoped>
.main {
  position: relative;
  display: grid;
  grid-template-rows: 70px repeat(auto-fit, 500px);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column dense;
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  width: 960px;
  margin: 0 auto;
}
</style>