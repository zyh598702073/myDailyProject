<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'my-electron',
    data: function() {
        return {

        }
    },
    mounted(){
    	this.$router.push('/')
    }
  }
</script>

<style>
  /* CSS */
</style>
