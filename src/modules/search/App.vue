<template>
  <div>
      <my-index></my-index>
      <my-search></my-search>
  </div>
</template>

<script>
  import MyIndex from '../../components/index/Index'
  import MySearch from '../../components/search/Search'
  export default {
    name: 'about',
    components: {
        MyIndex,
        MySearch
    }
  }
</script>

<style scoped>
  @import "../../common/style/marx.min.css";
</style>
