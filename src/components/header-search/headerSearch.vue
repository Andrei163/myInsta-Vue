<template>
    <div class='header__search'>
			<input class='header__search-input' type="text" placeholder="поиск">
		</div>
</template>

<style scoped>
    .header__search {
        grid-column: 2/3;
        grid-row: 1/2;
        align-self: center;
        justify-self: center
    }

    .header__search-input {
        width: 180px;
        height: 25px
    }
</style>