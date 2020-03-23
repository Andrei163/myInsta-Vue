<template>
  <div class='main'>
    <logo />
    <headerSearch />
    <buttons />
    <stories />
    <newsContent />
    <newsContent />
    <newsContent />
    <newsContent />
 
            
  
  </div>
 
</template>

<script>
import logo from '@/components/logo/logo'
import headerSearch from '@/components/header-search/headerSearch'
import buttons from '@/components/header-button/buttons'
import stories from '@/components/storiesall/stories'
import newsContent from '@/components/news-content/news-content'





export default {

       data() {
      return {
        images: [
          
         {title:'img 1', url: '../../assets/urgant.jpg'},
         {title:'img 2', url: 'https://avatars.mds.yandex.net/get-pdb/2092521/d93c7937-454b-4f0b-99cb-0f1305fd02da/s1201'}
        
        ],
      
      };
    },
  components: {
    logo,
    headerSearch,
    buttons,
    stories,
    newsContent
    
   
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