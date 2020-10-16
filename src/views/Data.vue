<template>
  <div class="container bg-dark ">
    <Loading :active.sync="isLoading"
              loader="bars"
              color="palevioletred"
              background-color="#000"></Loading>
    <Datalist></Datalist>
  </div>
</template>

<script>
import Datalist from '@/components/Datalist.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Datalist,
  },
  computed: {
    // isLoading() {
    //   return this.$store.state.isLoading;
    // },
    ...mapGetters(['isLoading']),
  },
};
</script>
