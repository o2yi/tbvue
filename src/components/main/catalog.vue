<template lang="html">
  <div class="">
    <ul class="catalog-list fl" @mouseout='catalog.active = -1'>
      <!-- <li class="on"> -->
      <li :class="{'on':catalog.active == index}" @mouseover='catalog.active = index' v-for='item,index in catalog.httpData' >
        <template v-for='item2,index2 in item'>
          <a :href="item2.href">{{item2.title}}</a>
          {{index2 != item.length-1?'/':''}}
        </template>

      </li>

    </ul>
    <div class="catalog-sub-list clearfix" v-if='catalog.active != -1'>
      <div class="catalog-sub-list-links fl">
        <div class="service-panel" v-for="item in catalog.httpData2.panels ">
          <h3>
            {{item.title}}
            <a href="#" class="more">更多</a>
          </h3>
          <div class="links" >
            <a v-for='item2 in item.links' :href="item2.href" :class="{'hot':item2.hot}">{{item2.title}}</a>

          </div>
        </div>

      </div>
      <div class="catalog-sub-list-ad fr">
        <h3>猜你喜欢</h3>
        <div class="catalog-ad-list">
          <a :href="item.href" v-for='item in catalog.httpData2.rmds'>
            <img :src="item.img|imgPath" alt="">
            <span>{{item.title}}</span>
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import {Component, Vue,Watch} from 'vue-property-decorator';
// import axios from '@/libs/axios.js'
@Component({
  components: {
  },

})
export default class Catalog extends Vue{

  async created(){
    console.log("1");
    let url = `/catalog/list`;
    if(sessionStorage[url]){
      try {
        this.catalog.httpData = JSON.parse(sessionStorage[url]);
        return false;
      } catch (error) {

      }
    }
    try {
      let {data:{data,err,msg}} = await (this as any).axios('catalog/list');
      if(err){
        console.log(msg);
      }else{
        this.catalog.httpData = data;
        sessionStorage[url] = JSON.stringify(data);
      }

    } catch (error) {

    }



  }
  @Watch('catalog.active')

          async onCatalog2(val:any){
            if(val == -1){
              return false;
            }
            let detail = `/catalog/xq/${val}`;
            if(sessionStorage[detail]){
              try {
                this.catalog.httpData2  = JSON.parse(sessionStorage[detail]);
                return;
              } catch (error) {}

            }

            try {
                let {data:{data,msg,err}} = await (this as any).axios(`catalog/detail/${val}`,{method: 'GET'})
                if(err){
                  console.log(msg);
                }else{
                  this.catalog.httpData2 = data;
                  sessionStorage[detail] = JSON.stringify(data);
                }
            } catch (error) {}



          }

  private catalog = {
    active : -1,
    httpData : [],
    httpData2 : []
  }

}
</script>

<style lang="css" scoped>
  /*  */
  .catalog-list {
    width:188px;height:512px;
    padding-top:5px;padding-bottom:3px;
    border:1px solid #ff5000;
    border-top:none;
    background:#FFF;
  }
  .catalog-list li {
    padding-left:25px;
    padding-right:19px;
    width:145px;height:32px;line-height:32px;
    font-size:14px;font-weight:400;
    position:relative;
  }
  .catalog-list li.on {
    background:#ffe4dc;
  }
  .catalog-list li.on a {
    color:#FF5000;
  }
  .catalog-list li a {
    font-size:14px;font-weight:400;
  }
  .catalog-list li a:hover {text-decoration:underline;}
  .catalog-list li:after{
    content:'>';
    position:absolute;
    right:10px;
    font-size:12px;
    height:32px;line-height:32px;
    color:#666;
  }


  .catalog-sub-list {
    position:absolute;
    z-index:2;
    left:188px;top:0;
    padding:0 0 0 18px;
    border:2px solid #F94A14;
    box-shadow:2px 2px 0 #dcdadb;
    background:#FFF;
    width:692px;height:518px;
  }

  .catalog-sub-list-links {
    padding:10px;
    padding-right:12px;
    padding-bottom:0;
    width:415px;height:490px;
  }
  .catalog-sub-list-ad {
    border-left:1px solid #f4f4f4;
    width:253px;height:498px;
    padding-top:20px;
  }
  .catalog-sub-list-links .service-panel {
    margin-bottom:5px;
    height:173px;overflow:hidden;
  }
  .catalog-sub-list-links .service-panel h3 {
    width:415px;height:36px;line-height:36px;
    font-size:16px;color:#3C3C3C;font-weight:bold;
    position:relative;
  }
  .catalog-sub-list-links .service-panel .more {
    position:absolute;
    right:0;top:0;
    height:36px;line-height:36px;
    font-size:12px;font-weight:400;
  }
  .catalog-sub-list-links .service-panel .links {
    width:415px;height:104px;padding-bottom:33px;
    overflow:hidden;
  }
  .catalog-sub-list-links .service-panel .links a {
    display:inline-block;
    margin-right:12px;
    color:#666;
    white-space:nowrap;
    font-size:12px;line-height:26px;
  }
  .catalog-sub-list-links .service-panel .links a:hover {
    color:#ff5000;
  }


  .catalog-sub-list-ad h3 {
    color:#333;
    font-size:14px;font-weight:400;
    line-height:18px;text-align:center;
  }
  .catalog-sub-list-ad .catalog-ad-list {
    width:253px;height:459px;
  }
  .catalog-sub-list-ad .catalog-ad-list a {
    float:left;
    width:97px;height:143px;
    padding-left:20px;padding-top:10px;
  }
  .catalog-sub-list-ad .catalog-ad-list img {
    width:97px;height:97px;
  }
  .catalog-sub-list-ad .catalog-ad-list span {
    display:block;
    width:97px;height:26px;
    overflow:hidden;
    font-size:12px;line-height:26px;
    color:#999;font-weight:400;
  }
  .catalog-sub-list-ad .catalog-ad-list span:hover {
    color:#ff5000;
  }
</style>
