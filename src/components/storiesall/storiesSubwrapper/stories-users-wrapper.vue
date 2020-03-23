<template>
    <div class="stories__users-wrapper">
        <storiesUsers />
        <storiesUsers />
        <storiesUsers />
        <storiesUsers />
        <storiesUsers />
        <storiesUsers />
        </div>
</template>

<script>

import storiesUsers from '@/components/storiesall/storiesSubwrapper/stories-users'
export default {
    components: {
        storiesUsers
    }
}
</script>

<style scoped>
.stories__users-wrapper {
    height: 200px;
    overflow-y: scroll
}
</style>