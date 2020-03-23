<template>
    <div class="stories__users">
        <div class='stories__avatar'>
            <div><img class='stories__img' src="../../../assets/putin.jpg" alt=""></div>
            <div class='stories__username'>
                <div class='stories__username-firstname'><a href="">Vovan</a></div>
                <div class='stories__username-time'><a href="">20 часов назад</a></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.stories__users {
    padding: 5px 10px 10px 20px
}

.stories__username {
    padding: 8px
}

.stories__username-firstname>a {
    text-decoration: none;
    color: #000;
    font-weight: 700
}

.stories__avatar {
    display: flex
}

.stories__img {
    width: 50px;
    border-radius: 50%
}

.stories__username-time>a {
    text-decoration: none;
    color: #8b8b8b
}
</style>