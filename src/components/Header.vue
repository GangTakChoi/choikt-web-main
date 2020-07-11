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
      <div class="btn"></div>
      <div @click="menuClose" class="page_cover"></div>
      <div id="menu">
        <div @click="menuClose" class="close"></div>
        <div @click="menuClose">
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
  methods: {
    menuClose () {
      $('#menu,.page_cover,html').removeClass('open')
    }
  },
  mounted () {
    $('.btn').click(function () {
      $('#menu,.page_cover,html').addClass('open')
      window.location.hash = '#open'
    })
    window.onhashchange = function () {
      if (location.hash !== '#open') {
        this.menuClose()
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
    margin-top: 8px;
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
    width: 55px;
    height: 55px;
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
    padding-top: 70px;
    font-size: 20px;
    color: #000 !important;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0px;
    left: -202px;
    z-index: 10;
    border: 1px solid #c9c9c9;
    background-color: white;
    text-align: center;
    transition: All 0.2s ease;
    -webkit-transition: All 0.2s ease;
    -moz-transition: All 0.2s ease;
    -o-transition: All 0.2s ease;
    a {
      color: black;
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
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.4);
    z-index: 4;
    display: none;
  }
  // menu slide [end]

</style>
