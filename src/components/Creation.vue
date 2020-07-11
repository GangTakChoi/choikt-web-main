<template>
  <div>
    <ul>
      <router-link to="/montihallproblem">
        <li>몬티홀의 역설</li>
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
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
}
</style>
