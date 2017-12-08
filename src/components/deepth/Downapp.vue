<template>
  <div id="download">
    <img src="../../assets/index/scan.png" alt="">
  </div>
</template>

<script>
    export default {
        name: 'downapp'
    }
</script>

<style scoped>

  #download{
    position: fixed;
    width:100%;
    height:100%;
    left: 0;
    top: 0;
    background-color:rgba(39,44,47,.9);
    z-index: 30;
  }
  #download img{
    width: 436px;
    height: 440px;
    margin-top: 15%;
    margin-left: 30%;

  }
</style>
