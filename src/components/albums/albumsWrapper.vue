<template>
    <div class="albums">
        <div class="albums__visible">
            <div class="albums__img-wrapper">
                <img class='albums__img' src="../../assets/album1.jpg" alt="" width="85">
            </div>
            <span class='albums__name'>Album</span>
        </div>
        <div class="albums__visible">
            <div class="albums__img-wrapper">
                <img class='albums__img' src="../../assets/album2.jpg" alt="" width="85">
            </div>
            <span class='albums__name'>Album</span>
        </div>
        <div class="albums__visible">
            <div class="albums__img-wrapper">
                <img class='albums__img' src="../../assets/album3.jpg" alt="" width="85">
            </div>
            <span class='albums__name'>Album</span>
        </div>
        <div class="albums__visible">
            <div class="albums__img-wrapper">
                <img class='albums__img' src="../../assets/album4.jpeg" alt="" width="85">
            </div>
            <span class='albums__name'>Album</span>
        </div>
        <div class="albums__visible">
            <div class="albums__img-wrapper">
                <img class='albums__img' src="../../assets/album5.jpeg" alt="" width="85">
            </div>
            <span class='albums__name'>Album</span>
        </div>
        <div class="albums__visible">
            <div class="albums__img-wrapper">
                <img class='albums__img' src="../../assets/album6.webp" alt="" width="85">
            </div>
            <span class='albums__name'>Album</span>
        </div>
        <div class="albums__visible">
            <div class="albums__img-wrapper">
                <img class='albums__img' src="../../assets/album6.webp" alt="" width="85">
            </div>
            <span class='albums__name'>Album</span>
        </div>
    </div>
</template>

<style scoped>
.albums {
    display: flex;
    justify-content: space-between;
    grid-column: 1/4;
    grid-row: 3/4;
    align-items: center
}

.albums__visible {
    width: 120px;
    text-align: center
}

.albums__img-wrapper {
    margin-bottom: 10px
}

.albums__img {
    border-radius: 50%
}
</style>