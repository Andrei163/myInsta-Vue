<template>
    <div class="stories__subwrapper">
        <div class="stories__link">
            <a href="" class="stories__all">Истории</a>
            <a href="" class="stories__other">Смотреть все</a>
        </div>
       <storiesUsersWrapper />
    </div>
</template>

<script>

import storiesUsersWrapper from '@/components/storiesall/storiesSubwrapper/stories-users-wrapper'
export default {
    components: {
        storiesUsersWrapper
    }
}
</script>


<style scoped>
    .stories__subwrapper {
        border: 1px solid #c7c7c7;
        margin-bottom: 20px
    }

    .stories__link {
        display: flex;
        justify-content: space-between;
        padding: 20px 10px 10px 20px
    }

    .stories__all {
        display: block;
        text-decoration: none;
        color: grey
    }

    .stories__other {
        display: block;
        text-decoration: none;
        color: #000;
        font-weight: 700;
        font-size: 14px
    }
</style>