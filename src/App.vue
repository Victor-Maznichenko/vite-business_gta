<template>
  <div class="app__content">
    <router-view></router-view>
  </div>
</template>


<style lang="sass">
#app
  font-family: 'Gotham Pro'
  background-image: url('@/assets/images/bg.jpg')
  background-position: top center
  height: 100vh
  padding: unit(62) 0
  width: 100vw
  background-size: 100%
  background-repeat: no-repeat
  display: flex
  align-items: center
  justify-content: center
.app__content
  border-radius: unit(18)
  background-color: #121434
  margin: 0 auto
  max-width: unit(1400)
  width: 100%
  height: 100%
</style>