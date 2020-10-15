<template>
  <div class="container-fluid datalist">
    <div class="row">
      <div class="col-12">

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
.datalist {
  background-color: palevioletred;
  height: 80vh;
}
</style>
