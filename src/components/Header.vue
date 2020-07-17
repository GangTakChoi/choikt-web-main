<template>
    <div class="header">
      <div class="header-wrap">
        <router-link to="/">
          <img alt="Choikt logo" class="choikt-logo" src='../assets/choikt_logo.png'>
        </router-link>
          <ul v-if="!isMobile" class="top-menu">
            <li>
              <router-link to="/creation">
                Creation
              </router-link>
            </li>
          </ul>
        <!-- <button class="login-button">로그인</button> -->
      </div>
      <div @click="menuOpen" class="btn"></div>
      <div @click="menuOpen" class="page_cover"></div>
      <div id="menu">
        <div @click="menuOpen">
          <router-link to="/creation">
            Creation
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Header',
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    menuOpen () {
      if (this.isMenuOpen) {
        $('#menu,.page_cover,html').removeClass('open')
        this.isMenuOpen = false
      } else {
        $('#menu,.page_cover,html').addClass('open')
        this.isMenuOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $header-height: 55px;

  .header {
    height: $header-height;
    background-color: rgb(41, 41, 41);
  }

  .header-wrap {
    margin: 0 70px;
  }

  .choikt-logo {
    display: block;
    float: left;
    height: 35px;
    margin-top: 10px;
  }

  .login-button {
    display: block;
    float: right;
    font-size: 16px;
    margin-top: 12px;
  }

  .top-menu {
    display: block;
    float: left;
    height: $header-height;
    margin-left: 20px;
    li {
      height: $header-height;
      line-height: $header-height - 5px;
    }
  }

  // menu slide [start]
  html.open {
    overflow: hidden;
  }
  .btn {
    margin-left: 5px;
    width: $header-height;
    height: $header-height;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    background-image: url('~@/assets/menu_icon.svg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  .close {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 0px;
    background-image: url('~@/assets/close_icon.svg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  #menu {
    padding-top: 20px;
    font-size: 20px;
    width: 250px;
    height: 100%;
    position: fixed;
    top: $header-height;
    left: -302px;
    z-index: 10;
    border: 0;
    background-color: rgb(41, 41, 41);
    text-align: center;
    transition: All 0.5s ease;
    -webkit-transition: All 0.5s ease;
    -moz-transition: All 0.5s ease;
    -o-transition: All 0.5s ease;
    a {
      color: #fff;
    }
  }
  #menu.open {
    left: 0px;
  }
  .page_cover.open {
    display: block;
  }
  .page_cover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: $header-height;
    left: 0px;
    background-color: rgba(0,0,0,0.4);
    z-index: 4;
    display: none;
  }
  // menu slide [end]

</style>
