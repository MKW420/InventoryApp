<template>
    
    <div id="load-main">
    <div id="load-wrap">
      <p>Loading Page</p>
      <div class="line"></div>
       <div class="line"></div>
        <div class="line"></div>
       </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style scoped>
#load-main{
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#load-wrap  .line:nth-last-child(1) {
 animation: loadingC 0.6s 0.1s linear infinite;
}
#load-wrap  .line:nth-last-child(2) {
 animation: loadingC 0.6s 0.1s linear infinite;
}
#load-wrap  .line:nth-last-child(3) {
 animation: loadingC 0.6s 0.1s linear infinite;
}
</style>
