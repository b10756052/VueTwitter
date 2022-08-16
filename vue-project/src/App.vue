<script setup>
 import Card from "./components/Card.vue"  
 let msg="這是從app傳到card的propssssss";
 
</script>

<template>    
   <main class="appMain">
    <Card :msg=msg />   
    <button   type="button" class="btn btn-dark w-50 w-md-100 mx-auto my-3 my-md-0">Load More</button>
  </main>
  
</template>

<style scoped>
 
  
</style>
