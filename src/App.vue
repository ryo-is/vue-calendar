<template lang="pug">
  v-app
    //- v-card(height="54px" flat tile)
    //-   v-app-bar.pl-12.pr-6(
    //-     color="indigo darken-2" height="54px"
    //-     prominent dense absolute elevate-on-scroll scroll-target=".main-content"
    //-   )
    //- v-content.main-content.overflow-y-auto
    v-content.main-content
      router-view
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
body {
  margin: 0;

  // スクロールバー非表示
  ::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  // &::-webkit-scrollbar-track {
  //   background-color: $scrollbar-track-color;
  // }

  // &::-webkit-scrollbar-thumb {
  //   background: rgba($scrollbar-thumb-color, .6);
  //   border-radius: 8px;
  // }
}

#app {
  font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans',
    'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo,
    'ＭＳ Ｐゴシック', 'MS PGothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  // .main-content {
  //   height: calc(100vh - 54px);

  //   &::-webkit-scrollbar {
  //     width: 0px;
  //   }
  // }
}
</style>
