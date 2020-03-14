<template lang="html">

  <div class="">
    <div class="index-header-banner banner-1" :style='{height:bannerHeight+"px"}' ref='bannerDom'>
      <a href="#" class="btn btn-prev" @click="prev()">&lt;</a>
      <a href="#" class="btn btn-next" @click="next()">&gt;</a>
      <ul :style="{width:totalWidth()+'px',left:totalLeft()+'px'}" >
        <li v-for="item in bannerImg" >
          <a href="#">

            <img :src="item" alt="">
          </a>
        </li>

      </ul>
      <div class="nums">
        <ol>
          <li :class="{cur:bannerCur == index}" v-for="item,index in bannerImg"></li>

        </ol>
      </div>
    </div>

  </div>

  <!-- <div class="index-header-banner banner-2" style='height:256px'>
    <a href="#" class="btn btn-prev">&lt;</a>
    <a href="#" class="btn btn-next">&gt;</a>
    <ul style="width:2600px;">
      <li>
        <a href="#">
          <img src="../../assets/imgs/banner-2-1.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/imgs/banner-2-2.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/imgs/banner-2-3.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/imgs/banner-2-4.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/imgs/banner-2-5.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/imgs/banner-2-6.png" alt="">
        </a>
      </li>
    </ul>
  </div> -->
</template>

<script >
// import {Vue,Component,Prop} from 'vue-property-decorator';

// export default class banner extends Vue{
//   @Prop({type:Array,required:true}) public bannerImg!:[]
//
//   created(){
//     console.log(this);
//   }
// }

export default {
  data(){
    return{
        bannerWidth : 0,
        banerLength : 0,
        bannerCur : this.Cur
    }
  },
  props : {
    bannerImg : {
      type : Array,
      require : true
    },
    Cur : {
      type : Number,
      require : true,
      default : 0,
    },
    bannerHeight : {
      type : Number ,
      require : true,
      defaule : 280,
    }
  },
  created(){

  },
  methods: {
    totalWidth(){
      return this.bannerWidth* this.banerLength;
    },
    curLeft(index){
      return this.bannerWidth*index;
    },
    prev(){
        this.bannerCur --;
        if(this.bannerCur < 0){
          this.bannerCur = this.banerLength-1;
        }
        console.log(this.bannerCur);

    },
    next(){
      this.bannerCur ++;
      if(this.bannerCur > this.banerLength-1){
        this.bannerCur = 0;
      }
      console.log(this.bannerCur);

    },
    totalLeft(){
      return -this.bannerCur * this.bannerWidth;
    }

  },
  mounted(){
    this.bannerWidth = this.$refs.bannerDom.offsetWidth;
    this.banerLength = this.bannerImg.length;
  }
}

</script>

<style lang="css" scoped>
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
    left:0;
    transition:.3s all ease;
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







  /* .banner-1 {
    width:520px;height:280px;
  }



  .banner-2 {
    width:520px;height:198px;
  } */




  .index-header-banner .nums {
    position:absolute;top:252px;z-index:2;
    width:100%;
    text-align:center;
  }
  .index-header-banner .nums ol {
    overflow:hidden;
    display:inline-block;
    background:rgba(255,255,255,.3);border-radius:10px;
  }
  .index-header-banner .nums li {
    width:8px;height:8px;margin:3px;
    background:#FFF;border-radius:50%;
    float:left;
  }
  .index-header-banner .nums li.cur {
    background:#ff5000
  }


</style>
