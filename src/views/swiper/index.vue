<template>
  <div class="app-container">
    <div class="swiper">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          v-for="item in 5"
          :key="item"
          :style="{backgroundImage: 'url('+require('@/assets/logo.png')+')'}"
        >
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
//导入swiper
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'default',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',    //与slot="pagination"处 class 一致
          clickable: true,            //轮播按钮支持点击
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  .swiper {
    width: 100%;
    height: 100%;
    & >>> .swiper-container {
      width: 100%;

      .swiper-slide {
        width: 100%;
        height: 0;
        padding-bottom: 28.1%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-pagination {
        .swiper-pagination-bullet-active {
          background-color: #f29b76;
        }
      }
    }
  }
}
</style>
