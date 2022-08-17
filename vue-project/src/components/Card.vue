<script setup > 
 const props = defineProps({
  msg: String
  
  
})
 
//  if (!$store.state.data?.includes.users[index].profile_image_url){
//     $store.state.data?.includes.users[index].profile_image_url="none";
//  }

</script>

<template  >   
   <main>        
    <div  class="card m-1 border-dark" style="max-width:1000px" v-for="(item,index) in $store.state.data?.data" :key="index" >
        <div class="row g-0 d-flex">
            <div class="col-4 col-md-3 d-flex" style="padding:0;">
                <img :src="$store.state.data?.includes.users[index].profile_image_url" class="rounded-start p-2 w-100  " alt="..." style="min-width:144px">
             </div>
            <div class="col-8 col-md-9 m-0 px-2 px-sm-0 py-md-2">
                <div div class="card-body px-md-0  px-4 m-1" style="margin-top:0.5rem;">
                 <h5 class="card-title text-truncate">{{$store.state.data?.includes.users[index].username}}</h5>                 
                                  
                <p class="card-text text-truncate" >{{$store.state.data?.data[index].text}}</p>                  
                <!-- <p class="card-text  text-truncate" >{{ $store.state.data.data[index].entities.urls &&  $store.state.data.data[index].entities.urls[0].url}}</p>                   -->
                <p class="card-text"><small class="text-muted">{{$store.state.data?.data[index].created_at}}</small></p>
                </div>
            </div>
        </div>
    </div>  
          
    </main>
</template>

 
