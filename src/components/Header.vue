<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <h1>
      <router-link to="/" class="navbar-brand text-white logo">
        <span class="logoText">M</span>
        <span class="logoText">E</span>
        <span class="logoText">M</span>
        <span class="logoText">E</span>
        <span class="logoText">S</span>
      </router-link>
    </h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
     data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link px-4 text-white">
            <span class="itemText">Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/data" class="nav-link px-4 text-white">
            <span class="itemText">SeeMore</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss">
h1 .logo {
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
.nav-link {
  border-bottom: 2px solid transparent;
  transition: all .5s;
  &:hover {
    border-bottom: 2px solid palevioletred;
  }
  &:hover .itemText {
    color: palevioletred;
  }
}
.navbar-toggler {
  border: 1px solid #fff;
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(244,244,244)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
}
</style>
