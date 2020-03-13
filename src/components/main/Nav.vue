<template lang="html">
  <div class="index-page-container">
    <div class="index-nav">
      <div class="index-nav-header clearfix">
        <h2 class="fl">主题市场</h2>
        <ul class="index-nav-header-bd fl">
          <li class="fl"><a href="#">天猫</a></li>
          <li class="fl"><a href="#">聚划算</a></li>
          <li class="fl"><a href="#">天猫超市</a></li>
        </ul>
        <ul class="index-nav-header-bd fl">
          <li class="pipe fl">|</li>
          <li class="fl"><a href="#">淘抢购</a></li>
          <li class="fl"><a href="#">电器城</a></li>
          <li class="fl"><a href="#">司法拍卖</a></li>
          <li class="fl"><a href="#">淘宝心选</a></li>
          <li class="fl"><a href="#">兴农扶贫</a></li>
        </ul>
        <ul class="index-nav-header-bd fl">
          <li class="pipe fl">|</li>
          <li class="fl"><a href="#">飞猪旅行</a></li>
          <li class="fl"><a href="#">智能生活</a></li>
          <li class="fl"><a href="#">苏宁易购</a></li>
        </ul>
      </div>
      <Catalog></Catalog>
    </div>
  </div>
</template>




<script lang='ts'>

import Catalog from "./catalog.vue";
import {Component, Vue,Watch} from 'vue-property-decorator';




@Component({
  components : {
    Catalog
  }
})

export default  class Nav extends Vue{

}
</script>

<style lang="css" scoped>

  .index-nav {}
  .index-nav-header {
    width:1190px;height:30px;
    background-image:linear-gradient(to right,#ff9000 0,#ff5000 100%);
  }
  .index-nav-header h2 {
    width:190px;height:30px;line-height:30px;
    text-align:center;
    font-size:16px;font-weight:bold;
    background:#ff5000;color:#FFF;
  }

  .index-nav-header-bd {}
  .index-nav-header-bd li {padding:0 4px;margin-left:3px;}
  .index-nav-header-bd .pipe {
    margin-left:7px;
    line-height:30px;color:#FFF;font-size:14px;
  }
  .index-nav-header-bd a {
    display:block;
    padding:0 5px;
    font-size:16px;
    font-weight:700;
    line-height:30px;
    color:#FFF;
  }

  .index-nav-content {width:1190px;height:632px;}
  .index-nav-content .main {
    width:900px;height:632px;
  }
  .index-nav-content .main-top {
    width:900px;height:522px;
    position:relative;
  }
  .index-nav-content .main-bottom {
    width:890px;height:100px;
    margin-top:10px;
  }
  .index-nav-content .right {
    width:290px;height:622px;margin-top:10px;
    background:url(../../assets/imgs/_main-right.png) no-repeat;
  }









  .index-nav-banner-container {width:710px;}
  .index-nav-banner-container .banners {
    width:520px;height:512px;
    margin-left:10px;margin-top:10px;
  }
  .index-nav-banner-container .ads {
    width:160px;height:512px;
    margin-right:10px;margin-top:10px;
  }

  .index-nav-banner-container .ads .ad1 {
    width:160px;height:280px;
  }
  .index-nav-banner-container .ads .ad1 img {
    width:160px;height:280px;
  }

  .index-nav-banner-container .ads .ad2 {
    width:160px;height:230px;
  }
  .index-nav-banner-container .ads .ad2 h4 {
    padding-top:6px;height:24px;line-height:24px;
    font-size:12px;font-weight:400;
    color:#a1a1a1;background:#f1f1f1;
  }
  .index-nav-banner-container .ads .ad2 img {
    width:160px;height:200px;
  }

  /*  */
  .index-header-banner {
    position:relative;
    overflow:hidden;
  }
  .index-header-banner ul {
    height:100%;
    position:absolute;z-index:1;
  }
  .index-header-banner ul li {
    width:520px;height:100%;
    float:left;
  }

  .index-header-banner .btn {
    width:20px;height:30px;line-height:30px;text-align:center;
    position:absolute;z-index:2;
    top:50%;margin-top:-15px;
    background:rgba(0,0,0,.3);color:#fff;
    display:none;
  }
  .index-header-banner .btn-prev {left:0;border-top-right-radius:15px;border-bottom-right-radius:15px;text-indent:-5px;}
  .index-header-banner .btn-next {right:0;border-top-left-radius:15px;border-bottom-left-radius:15px;text-indent:5px;}
  .index-header-banner .btn:hover {background:rgba(0,0,0,.5)}
  .index-header-banner:hover .btn {display:block;}

  .banner-1 {
    width:520px;height:280px;
  }
  .banner-1 .nums {
    position:absolute;top:252px;z-index:2;
    width:100%;
    text-align:center;
  }
  .banner-1 .nums ol {
    overflow:hidden;
    display:inline-block;
    background:rgba(255,255,255,.3);border-radius:10px;
  }
  .banner-1 .nums li {
    width:8px;height:8px;margin:3px;
    background:#FFF;border-radius:50%;
    float:left;
  }
  .banner-1 .nums li.cur {
    background:#ff5000
  }

  .banner-2 {
    width:520px;height:198px;
  }




  .tmall-title {
    width:520px;height:16px;padding-top:10px;padding-bottom:3px;
    border-bottom:3px solid #ff1648;
    overflow:hidden;
  }
  .tmall-title .title {
    font-size:12px;color:#666;margin-left:14px;
  }
  .tmall-title .indicator i {color:#ff1648;}


  .taobao-toutiao {
    display:block;
    width:890px;height:100px;
    background:url(../../assets/imgs/tb-toutiao.png);
  }

</style>
