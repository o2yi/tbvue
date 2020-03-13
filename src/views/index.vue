<template lang="html">
  <div class="">
    <siteNav/>
    <Header/>
    <Nav/>

  </div>
</template>

<script>

import {Component, Vue} from 'vue-property-decorator';
import siteNav from '@/components/common/siteNav';
import Header from '@/components/header/Header';
import Nav from '@/components/main/Nav';
@Component({
  components: {
    siteNav,
    Header,
    Nav
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
