<template>
    <div class="stories">
        <div class="stories__wrapper">
            <storiesInfo />
            <storiesSubwrapper />
        </div>
    </div>
</template>

<script>

import storiesInfo from '@/components/storiesall/stories-info/stories-info'
import storiesSubwrapper from '@/components/storiesall/storiesSubwrapper/stories-subwrapper'


export default {
    components: {
        storiesInfo,
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