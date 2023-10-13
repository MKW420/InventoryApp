<template>
 <body> 
<main>
 <label class="switch">
  <input type="checkbox" id="checkbox" @click="toggle()">
  <span class="slider"></span>
</label>

<p id="text"></p>

</main>
 </body>
</template>
<script>



export default({
mounted(){

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}


},
methods:{

// Toggle dark mode
toggle(){
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
  
  if (isDarkMode) {
    window.localStorage.setItem("isDarkMode", "false");
    document.body.style.background = "#ffffff";
 
    document.getElementById("text").style.color = "#000000"
    document.getElementById("checkbox").checked = true;
  } else {
    window.localStorage.setItem("isDarkMode", "true");
    document.body.style.background = "#000000";
  
    document.getElementById("text").style.color = "#ffffff"
    document.getElementById("checkbox").checked = false;  
  }
}},
//  methods:{
//      getdark(){
//       darkToggle.addEventListener('change', ()=> {
//         document.body.classList.toggle('dark');
//       })
//      }


  setup(){}

});
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}

p {
  font-family: Monospace;
  font-size: 14px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #5BC236;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

</style>