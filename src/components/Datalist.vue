<template>
  <div>
    <div class="row datalist">
      <div class="col-12 datalisttop">
        <img src="../assets/ehhface.png" alt="">
      </div>
    </div>
    <ul class="row py-3 pl-0" v-masonry transition-duration="0.3s" item-selector=".memeItem">
      <li v-masonry-tile class="col-12 col-md-6 col-lg-4 py-4 px-4 memeItem"
       v-for="meme in memes" :key="meme.id">
        <a :href="meme.url" class="w-100" target="_BLANK">
          <img :src="meme.url" class="w-100 memePic">
        </a>
        <p class="memeText my-2">{{ meme.name }}</p>
      </li>
    </ul>
    <div class="row">
      <div class="col-12 datalistbottom">
        <img src="../assets/ehhface.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
  },
  computed: {
    ...mapGetters(['memes']),
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
@keyframes pictop{
  0% { top: 0px; left: -35vw;}
  50% { top: 0px; left: 35vw; transform: rotate(720deg);}
  100% { top: 0px; left: -35vw;}
}
@keyframes picbottom{
  0% { top: 0px; left: 35vw;}
  50% { top: 0px; left: -35vw; transform: rotate(-720deg);}
  100% { top: 0px; left: 35vw;}
}
.datalisttop img {
  position: relative;
  max-width: 100%;
  height: 75px;
  animation: pictop 10s ease 0s infinite reverse both;
}
.datalistbottom img {
  position: relative;
  max-width: 100%;
  height: 75px;
  animation: picbottom 10s ease 0s infinite reverse both;
}
.memePic {
  border: 3px solid #fff;
  transition: all .5s;
}
.memeText {
  color: #fff;
  transition: all .5s;
}
.memeItem:hover {
  .memePic {
    border: 3px solid palevioletred;
  }
  .memeText {
    color: palevioletred;
  }
}
</style>
