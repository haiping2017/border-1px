<template>
  <div id="app">
    <v-header></v-header>

    <div class="tab border-1px border-1px-top">
      <div class="tab-item">

        <router-link to="/goods">
          商品
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/sellers">
          商家
        </router-link>
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>



<script>
import header from './components/header'

export default {
  components: {
    "v-header": header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
#app
  .tab
    display: flex
    width:100%
    height:40px
    line-hight:40px
    border-1px(rgba(7,17,27,0.1))
    border-1px-top(rgba(7,17,27,0.1))
    .tab-item
      flex:1
      text-align:center
      & > a
        display :block
        text-decoration :none
        font-size :14px
        line-height :40px
        color:rgb(77,85,93)
        &.active
          color: rgb(240,20,20)
</style>