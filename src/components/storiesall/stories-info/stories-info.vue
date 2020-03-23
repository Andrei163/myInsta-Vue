<template>
    <div class="stories__info">
        <div class='stories__avatar'>
            <div><img class='stories__img' src="../../../assets/urgant.jpg" alt=""></div>
            <div class='stories__info'>
                <div class='stories__name'><a href="">Ivan Urgant</a></div>
            </div>
        </div>
	</div>
</template>

<style scoped>
.stories__info {
    display: flex;
    flex-direction: column;
    justify-content: start
}

.stories__avatar {
    display: flex
}

.stories__img {
    width: 50px;
    border-radius: 50%
}

.stories__name {
    margin-top: 20px;
    margin-left: 10px
}

.stories__name a {
    display: block;
    text-decoration: none;
    font-weight: 700;
    vertical-align: middle;
    color: #000
}
</style>