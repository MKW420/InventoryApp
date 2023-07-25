<template>

 
   <div id="app">
       <Sidebar />
    </div>  
   
   
</template>

<script>
import Sidebar from '../components/sidebar.vue'




export default ({
  components: { Sidebar},
    setup() {

        return {}
        
    }
})
</script>

<style scoped>
 
 #app{
    font-family: 'Roboto', serif;
   
 }
</style>
