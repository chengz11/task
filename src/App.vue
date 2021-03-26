<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>
<script>
import { removeWatermark, setWaterMark } from '@/common/js/watermark'; 

export default {
  data(){
    return{
    }
  },
  mounted() {
  setWaterMark('111222', '1112441');
  },
  destroyed() {
    removeWatermark();
}

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
