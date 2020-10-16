<template>
  <div class="container-fluid bg-dark home">
    <Loading :active.sync="isLoading"
              loader="bars"
              color="palevioletred"
              background-color="#000"></Loading>
    <div class="row">
      <div class="col-12 col-md-6 bannertext d-flex flex-column px-4 py-4">
        <p>A <span class="mb-0">Meme</span>  a day,</p>
        <p>Keeps the doctor away.</p>
      </div>
      <div class="col-12 col-md-6 d-none d-md-block bannerimg py-5 px-5 mx-auto">
        <img src="../assets/doge.png" class="d-none d-md-block">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8 py-5 px-5 mx-auto">
        <VueSlickCarousel class="px-4 py-4" v-bind="slickSettings">
          <div class="slide py-3"
          v-for="meme in memesSlick" :key="meme.id">
            <a :href="meme.url" target="_BLANK"
             class="d-flex flex-column justify-content-between align-items-center slickitem">
              <img :src="meme.url" alt="">
              <p class="mt-3 mb-0">{{ meme.name }}</p>
            </a>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import $ from 'jquery';

export default {
  name: 'Home',
  data() {
    return {
      slickSettings: {
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
  },
  computed: {
    ...mapGetters(['memesSlick', 'isLoading']),
  },
  created() {
    this.getData();
  },
  mounted() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  },
};
</script>

<style lang="scss">
.slickitem img {
  display: block;
  border: 3px solid #fff;
  transition: all .5s;
}
.slickitem p {
  color: #fff;
  transition: all .5s;
}

.slickitem {
  &:hover {
    text-decoration: none;
  }
   &:hover img {
    border: 3px solid palevioletred;
   }
   &:hover p {
    color: palevioletred;
   }
}

.bannertext {
  justify-content: center;
  @media screen and (max-width: 768px) {
      justify-content: flex-end;
      height: 80vh;
      background: url('../assets/doge.png') no-repeat center;
      background-size: contain;
  }
}

.bannertext p {
  color: white;
  font-family: 'Rock Salt', cursive;
  font-size: 40px;
  letter-spacing: 10px;
  @media screen and (max-width: 768px) {
      margin-bottom: 40px;
      background: rgba(0, 0, 0, .85);
      font-size: 26px;
  }
}
.bannertext span {
  display: inline-block;
  color: palevioletred;
  font-family: 'Rock Salt', cursive;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 10px;
  transition: all 1s;
  &:hover {
    transform: rotate(10turn);
  }
  @media screen and (max-width: 768px) {
      margin-bottom: 40px;
      font-size: 32px;
  }
}
.bannerimg img {
  max-width: 100%;
  height: 80vh;
}
.slide img {
  width: 150px;
  height: 150px;
}
</style>
