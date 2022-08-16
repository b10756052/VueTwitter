<script setup>
    
    const token="AAAAAAAAAAAAAAAAAAAAAGUPgAEAAAAAlkK4Wr4NdPi2oCnO2z%2BdnlEA21U%3DBxGCX34hueME2YKUs9Hdov4Abey3J9StLK2zDsfd2lX7qPjClE";
    let searchKeywords; 

    let ChangeInput=(e)=>{
      searchKeywords=e.target.value;   
    }
    
    const DisplayPost=async(url)=>{
      console.log("正在抓");
      try{
        const corsURL = 'https://cors-anywhere.herokuapp.com/';
        const bearer = 'Bearer '+token;   
        console.log(url);      
        console.log(bearer);
        const dataFetch = await fetch(`${corsURL}${url}`,{
          method:'GET',
          headers:{            
            'Authorization': bearer,              
            credentials: 'include',            
          }
        });
        console.log("抓取成功");       
        var parseData = await dataFetch.json();
        console.log(parseData);
        
      }catch(e){
         console.log(e);
      }
      
      
    }

    let ClickSearch=()=>{      
      let queryURL =`https://api.twitter.com/2/tweets/search/recent?query=${searchKeywords}&tweet.fields=created_at&expansions=author_id,attachments.media_keys&media.fields=&user.fields=created_at`
      DisplayPost(queryURL); 
      
    }

</script>

<template>  
   <!-- <main class=" border  border-dark rounded  "> -->
   <main>           
      
    <form class="row g-4 flex-column  w-75  ">  
        <div class="col-12 d-flex  justify-content-center p-0  ">
            <label for="inputPassword2" class="visually-hidden ">Search</label>
            <input @change="ChangeInput" type="text" class="form-control mt-4" id="inputPassword2" placeholder="Search Keywords">
        </div>
        <div class="col-auto  d-flex justify-content-center p-0 ">
         <button @click="ClickSearch" type="button" class="btn btn-dark w-100 mb-4">Search</button>
        </div>
    </form>
  </main>
</template>

<style scoped>
 
  
</style>
