<template>
  <div class='main-home'>
    <logo />
    <headerSearch />
    <buttons />
    <avatar />
    <infoUser />
    <albums />
    <userContent />
    <userContent />
    <userContent />
    <userContent />
    <userContent />
    <userContent />
    <userContent />
    <userContent />
    <userContent />
          
  
  </div>
 
</template>

<script>
import logo from '@/components/logo/logo'
import headerSearch from '@/components/header-search/headerSearch'
import buttons from '@/components/header-button/buttons'
import avatar from '@/components/info-user/avatar'
import infoUser from '@/components/info-user/info-user'
import albums from '@/components/albums/albumsWrapper'
import userContent from '@/components/user-content/user-content'

export default {
//   name: 'app',
  components: {
    logo,
    headerSearch,
    buttons,
    avatar,
    infoUser,
    albums,
    userContent
  
   
  }
 
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
  margin: 0 auto
  }
</style>