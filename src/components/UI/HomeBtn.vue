<template>
    <router-link to="/">
        <IconHome class="icon" />
    </router-link>
</template>

<script>
    import IconHome from '@/assets/images/icons/home_icon.svg?component'

    export default {
        name: 'HomeBtn',
        components: {
            IconHome
        }
    }
</script>

<style lang="sass" scoped>
.icon
    fill: #8285B4
    width: unit(15)
    height: unit(15)
</style>