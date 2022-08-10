<template>
    <button class="history-btn history-back" v-if="back" @click="goBack">
        <IconArrow class="history-btn__icon" />
    </button>
    <button class="history-btn history-next" v-if="next" @click="goNext">
        <IconArrow class="history-btn__icon" />
    </button>
</template>

<script>
    import IconArrow from '@/assets/images/icons/history_arrow.svg?component'

    export default {
        name: 'HistoryArrow',
        components: {
            IconArrow
        },
        props: {
            back: {
                type: Boolean,
                default: false
            },
            next: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            goBack() {
                return this.$router.go(-1)
            },
            goNext() {
                return this.$router.go(+1)
            }
        }
    }
</script>

<style lang="sass" scoped>
.history-btn
    padding: unit(10) unit(12)
    border: none
    outline: none
    fill: #8285B4
    font-size: 0
    &__icon
        fill: #8285B4
        width: unit(5.83)
        height: unit(9.55)

.history-next
    transform: rotateY(180deg)
</style>