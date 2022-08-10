<template>
    <button class="bookmark">
        <IconBookmark />
    </button>
</template>

<script>
    import IconBookmark from '@/assets/images/icons/star.svg'

    export default {
        name: 'BookmarkBtn',
        components: {
            IconBookmark
        }
    }
</script>