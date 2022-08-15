<script setup>
 let name="search";
</script>

<template>  
   <!-- <main class=" border  border-dark rounded  "> -->
   <main  >
    <form class="row g-4 flex-column  w-75  ">  
        <div class="col-12 d-flex  justify-content-center p-0  ">
            <label for="inputPassword2" class="visually-hidden ">Password</label>
            <input type="password" class="form-control mt-4" id="inputPassword2" placeholder="Search Keywords">
        </div>
        <div class="col-auto  d-flex justify-content-center p-0 ">
         <button type="submit" class="btn btn-dark w-100 mb-4">Search</button>
        </div>
    </form>
  </main>
</template>

<style scoped>
 
  
</style>
