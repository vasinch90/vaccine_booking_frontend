<template>
  <router-view/>
</template>

<script>

export default{
  name: 'App',
  watch: {
    $route(){
      document.title = process.env.VUE_APP_TITLE
    }
  }
}
</script>


<style>
    body{
        background-color: rgba(249, 250, 251, 1);
    }
</style>