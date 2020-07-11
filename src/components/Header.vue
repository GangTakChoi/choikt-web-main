<template>
    <div class="header">
      <div class="header-wrap">
        <router-link to="/">
          <img alt="Choikt logo" class="choikt-logo" src='../assets/choikt_logo.png'>
        </router-link>
          <ul class="top-menu">
            <li>
              <router-link to="/creation">
                Creation
              </router-link>
            </li>
          </ul>
        <button class="login-button">로그인</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  $header-height: 50px;

  .header {
    height: $header-height;
    background-color: rgb(41, 41, 41);
  }

  .header-wrap {
    margin: 0 20px;
  }

  .choikt-logo {
    display: block;
    float: left;
    height: 35px;
    margin-top: 6px;
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
      line-height: 45px;
    }
  }

</style>
