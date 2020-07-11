<template>
  <div>
    {{ isMobile ? '모바일에서 보고 계시군요' : 'PC에서 보고 계시군요' }}
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>

<style lang="scss" scoped>
  div {
    padding: 40px;
  }
</style>
