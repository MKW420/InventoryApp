<template>
<body>
 <div class="drawing" id="loading">
    
  
    <div class="loading-dot"></div>
  </div>

</body>
</template>
<script>


export default({
    name:"LoadingTracker",
    setup() {
        
    },
})
</script>
<style scoped>



#div-name{
    margin-left:500px;
   
}
#name{
    color:white;
}
.drawing{
    width: 101%;
    margin-top:-15px;
    margin-left:-8px;
    height: 100vh;
    position: relative;
    display: block;
    background-color: #222B5F;
 
}




/* -- Loading thingy --*/
.loading-dot {
    border-radius:100%;
    height:10px;
    width:10px;
    background-color: #EB3E1B;
    position:absolute;
    left:0;
    right:0;
    margin:auto;
    top:0;
    bottom:0;
    box-shadow: 0px 40px 0px 0px #EB3E1B,0px -40px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,
    40px 40px 0px 0px #EB3E1B,-40px -40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B;
    -webkit-animation: load 3s infinite linear;
    -moz-animation: load 3s infinite linear;
    -o-animation: load 3s infinite linear;
    animation:load 3s infinite linear;
}


@-webkit-keyframes load {
  0%   {
    -webkit-transform: translate(0px,0px),rotate(0deg); 
    box-shadow: 0px 40px 0px 0px #EB3E1B,0px -40px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,
    40px 40px 0px 0px #EB3E1B,-40px -40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B;
  }

  25%{
    box-shadow: 0px 40px 0px 0px #EB3E1B,0px -40px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,
    -40px -40px 0px 0px #EB3E1B,40px 40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B;
  }

  50%{
    box-shadow: 0px -40px 0px 0px #EB3E1B,0px 40px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B ,
    -40px -40px 0px 0px #EB3E1B,40px 40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B ;
  }

  70%{
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
  }

  75%{
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
    height:10px;
    width:10px;
  }

  80%{
    -webkit-transform: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
    background-color: #EB3E1B;
    height:40px;
    width:40px;
  }

  85%{
    -webkit-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
    background-color: #EB3E1B; 
    height:40px;
    width:40px;
  }

  90%{
    -webkit-transform: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
    background-color: #EB3E1B; 
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px #EB3E1B,0px -40px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,
    40px 40px 0px 0px #EB3E1B,-40px -40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B;
  }

  100%{
    -webkit-transform: rotate(360deg);
    box-shadow: 0px 40px 0px 0px #EB3E1B,0px -40px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,
    40px 40px 0px 0px #EB3E1B,-40px -40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B;
  }

}

@-moz-keyframes load {
  0%   {
    -moz-transform: translate(0px,0px),rotate(0deg); 
    box-shadow: 0px 40px 0px 0px #EB3E1B,0px -40px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,
    40px 40px 0px 0px #EB3E1B,-40px -40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B;
  }

  25%{
    box-shadow: 0px 40px 0px 0px #EB3E1B,0px -40px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,
    -40px -40px 0px 0px #EB3E1B,40px 40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B;
  }

  50%{
    box-shadow: 0px -40px 0px 0px #EB3E1B,0px 40px 0px 0px #EB3E1B,-40px 0px 0px 0px #EB3E1B,40px 0px 0px 0px #EB3E1B,
    -40px -40px 0px 0px #EB3E1B,40px 40px 0px 0px #EB3E1B,-40px 40px 0px 0px #EB3E1B,40px -40px 0px 0px #EB3E1B;
  }

  70%{
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
  }

  75%{
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
    height:10px;
    width:10px;
  }

  80%{
    -moz-transform: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
    background-color: #EB3E1B;
    height:40px;
    width:40px;
  }

  85%{
    -moz-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,
    0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B,0px 0px 0px 0px #EB3E1B;
    background-color: #EB3E1B; 
    height:40px;
    width:40px;
  }

  90%{
    -moz-transform: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    background-color: #EB3E1B ; 
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

  100%{
    -moz-transform: rotate(360deg);
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

}

@keyframes load {
  0%   {
    transform: translate(0px,0px),rotate(0deg); 
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

  25%{
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    -40px -40px 0px 0px #EB3E1B ,40px 40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ;
  }

  50%{
    box-shadow: 0px -40px 0px 0px #EB3E1B ,0px 40px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,
    -40px -40px 0px 0px #EB3E1B ,40px 40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ;
  }

  70%{
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
  }

  75%{
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    height:10px;
    width:10px;
  }

  80%{
    transform: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    background-color: #EB3E1B ;
    height:40px;
    width:40px;
  }

  85%{
    transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    background-color: #EB3E1B ; 
    height:40px;
    width:40px;
  }

  90%{
    transform: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    background-color: #EB3E1B ; 
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

  100%{
    transform: rotate(360deg);
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

}
@-o-keyframes load {
  0%   {
    -o-transforms: translate(0px,0px),rotate(0deg); 
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

  25%{
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    -40px -40px 0px 0px #EB3E1B ,40px 40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ;
  }

  50%{
    box-shadow: 0px -40px 0px 0px #EB3E1B ,0px 40px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,
    -40px -40px 0px 0px #EB3E1B ,40px 40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ;
  }

  70%{
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
  }

  75%{
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    height:10px;
    width:10px;
  }

  80%{
    -o-transforms: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    background-color: #EB3E1B ;
    height:40px;
    width:40px;
  }

  85%{
    -o-transforms: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    background-color: #EB3E1B ; 
    height:40px;
    width:40px;
  }

  90%{
    -o-transforms: translate(0px,0px) rotate(360deg); 
    box-shadow: 0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,
    0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ,0px 0px 0px 0px #EB3E1B ;
    background-color: #EB3E1B ; 
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

  100%{
    -o-transforms: rotate(360deg);
    box-shadow: 0px 40px 0px 0px #EB3E1B ,0px -40px 0px 0px #EB3E1B ,40px 0px 0px 0px #EB3E1B ,-40px 0px 0px 0px #EB3E1B ,
    40px 40px 0px 0px #EB3E1B ,-40px -40px 0px 0px #EB3E1B ,40px -40px 0px 0px #EB3E1B ,-40px 40px 0px 0px #EB3E1B ;
  }

}



</style>
