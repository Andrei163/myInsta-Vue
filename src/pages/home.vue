<template>
  <div class="main-home">
    <logo />
    <headerSearch />
    <buttons />
    <avatar />
    <infoUser />
    <albums />
    <userContent v-for="(image, index) of images" :key="index" :userImg="image.url" />
    <h3>{{ images.url }}</h3>
  </div>
</template>

<script>
import logo from "@/components/logo/logo";
import headerSearch from "@/components/header-search/headerSearch";
import buttons from "@/components/header-button/buttons";
import avatar from "@/components/info-user/avatar";
import infoUser from "@/components/info-user/info-user";
import albums from "@/components/albums/albumsWrapper";
import userContent from "@/components/user-content/user-content";

export default {
  // props: ['imagess'],
  // data() {
  //   return {
  //     endpoint: 'http://jsonplaceholder.typicode.com/photos',
  //     images: [],
  //     resource: null
  // }
  // },
 
  components: {
    logo,
    headerSearch,
    buttons,
    avatar,
    infoUser,
    albums,
    userContent
  },
  computed: {
    images() {
      return this.$store.getters.image;
    }
  }
  // methods: {
  //   loadImg() {
  //     let options = {
  //       params: {
  //         _start: 1,
  //         _limit: 5
  //       }
  //     }
  //     this.$http.get(this.endpoint, options).then(function(response){
  //       this.images = response.data
  //     })
  //   },

  //   created: function() {
  //     this.loadImg()
  //   },
  //    load() {
  //   this.images.push({url: this.picture})
  //   this.picture=''
  // }
  // },
  // mounted() {
  //   this.loadImg()
  // }
};
</script>




<style scoped>
.main-home {
  position: relative;
  display: grid;
  grid-template-rows: 70px 250px 150px repeat(auto-fit, 320px);
  grid-template-columns: 320px 320px 320px;
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  width: 960px;
  margin: 0 auto;
}
</style>