<template lang="html">
  <div class="">
    <siteNav/>
    <Header/>
  </div>
</template>

<script>

import {Component, Vue} from 'vue-property-decorator';
import siteNav from '@/components/common/siteNav';
import Header from '@/components/header/Header';
@Component({
  components: {
    siteNav,
    Header
  }
})
export default class Index extends Vue {

}
</script>

<style lang="css" >
.site-nav-page {
  width:1090px;
  margin:0 auto;
}

.index-page-container {width:1190px;margin:0 auto;}
.index-page {background:#f4f4f4;}
</style>
