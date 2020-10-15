<template>
  <div class="container footer bg-dark">
    <div class="row flex-column flex-md-row justify-content-center align-items-center py-4">
      <div class="col-12 col-md-4 my-2 my-md-0 d-flex justify-content-center align-items-center">
        <h2 class="mb-0">
          <router-link to="/" class="navbar-brand text-white logo">
            <span class="logoText">M</span>
            <span class="logoText">E</span>
            <span class="logoText">M</span>
            <span class="logoText">E</span>
            <span class="logoText">S</span>
          </router-link>
        </h2>
      </div>
      <div class="col-12 col-md-4 my-2 my-md-0 d-flex justify-content-center align-items-center">
        <p class="text-white mb-0 mr-4">純屬</p>
        <img src="../assets/leo.png">
        <p class="text-white mb-0 ml-4">練習。</p>
      </div>
      <div class="col-12 col-md-4 my-2 my-md-0 d-flex justify-content-center align-items-center">
        <ul class="d-flex justify-content-center align-items-center list-unstyled w-100 mb-0">
          <li class="mx-3">
            <a href="">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="mx-3">
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="mx-3">
            <a href="">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="mx-3">
            <a href="">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
h2 .logo {
  font-family: 'Monoton', cursive;
  font-size: 40px;
  .logoText {
    transition: all .5s;
  }
  &:hover {
    .logoText:nth-child(1){
      color: red;
    }
    .logoText:nth-child(2){
      color: orange;
    }
    .logoText:nth-child(3){
      color: yellow;
    }
    .logoText:nth-child(4){
      color: lime;
    }
    .logoText:nth-child(5){
      color: skyblue;
    }
  }
}
i {
  font-size: 24px;
  color: white;
  transition: all .5s;
  &:hover {
    color: palevioletred;
    transform: rotate3d(1, 1, 0, 360deg);
  }
}

.footer img {
    max-width: 100%;
    height: 100px;
  }
</style>
