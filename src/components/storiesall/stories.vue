<template>
    <div class="stories">
        <div class="stories__wrapper">
           
            <storiesSubwrapper />
        </div>
    </div>
</template>

<script>


import storiesSubwrapper from '@/components/storiesall/storiesSubwrapper/stories-subwrapper'


export default {
    components: {
      
        storiesSubwrapper
    }
    
}
</script>




<style scoped>
.stories {
    position: relative;
    margin-left: 30px
}

.stories__wrapper {
    position: fixed;
    width: 282px
}
</style>