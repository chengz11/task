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
  data() {
    return {
      a: [1, 2, 3, 4, 5, 6, '--aaa']
    }
  },

  mounted() {
    const a = 'file://:admin/sqltext/text - 副本.sql//7'
    const index = a.lastIndexOf('//')
    const sqlFileName = a.substring(7, index)
    // const sqlFNameindex = sqlFName.indexOf('/')
    // const sqlFName = sqlFName.substring(sqlFNameindex + 1)
    // const id = value.sql.substr(index + 2)
    // const resindex = 9
    const resindex = sqlFileName.indexOf('/')

    const sqlFName = sqlFileName.indexOf(':') !== -1 ? sqlFileName.substring(resindex + 1) : sqlFileName
    console.log(sqlFileName);
    console.log(sqlFName);
    console.log(this.a.includes('--aaa'));
    var argv1 = process.env.npm_config_argv
    console.log(argv1);
    console.log(process.env);
    console.log(process.argv);
    console.log(process.argv[3])
    // setWaterMark(process.env.VUE_APP_PAGE_ID, process.env.VUE_APP_PAGE_ID);

  },
  destroyed() {
    // removeWatermark();
  },
  methods: {

  }

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
