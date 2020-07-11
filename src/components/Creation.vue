<template>
  <div>
    <ul>
      <router-link to="/montihallproblem">
        <li>몬티홀의 역설</li>
      </router-link>
      <router-link to="/test">
        <li>test</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Creation'
}
</script>

<style lang="scss" scoped>
div {
  padding: 20px;
}
ul li {
  border: 1px solid white;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  transition: All 0.5s ease;
  -webkit-transition: All 0.5s ease;
  -moz-transition: All 0.5s ease;
  -o-transition: All 0.5s ease;
  &:hover {
    cursor: pointer;
    transition: All 0.5s ease;
    -webkit-transition: All 0.5s ease;
    -moz-transition: All 0.5s ease;
    -o-transition: All 0.5s ease;
    background-color: white;
    color: black;
  }
}
</style>
