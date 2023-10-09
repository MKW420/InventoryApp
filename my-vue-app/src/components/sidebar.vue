<template>

  <div class="sideNav" :class="{'small-menu':smallMenuToggle}"  id="sidebardark">
     
           <span  @click="smallMenuToggle = !smallMenuToggle">
            
              <i class='bx bx-chevrons-right bx-sm'></i>
           </span>
    <div class="logo">
      <img alt="Inventory App logo" src="../assets/Logo(4).png" />
      <div class="logo-name">
      <span class="name">Invento</span>
      <p class="p-logo">Inventory App</p>
      </div>
    </div>


       
    


  
    
    <SidebarLink
      v-for="(item, index) in LinkTree"
      :key="index"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :data="item.children"
      :smallMenuToggle="smallMenuToggle"
    />

    

  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";

export default {

  components: { SidebarLink },

  name: "Sidebar-Com",
  data: () => ({
    smallMenuToggle:false,
    LinkTree: [
      {
        label: "Home",
        icon: "bx bx-home",
        children: [
          {
            label: "level 1.1",
            children: [
              {
                label: "level 1.1.1",
                icon: "bx bx-layer",
              },
            ],
          },

          {
            label: "level 1.2",
            icon: "",
          },
        ],
      },
      {
        label: "Settings",
        icon: "bx bx-cog",
        children: [
          {
            label: "Profile",
            icon: "bx bx-user",
          },

          {
            label: "App ",
            icon: "bx bx-code",
          },
        ],
      },
      {
        label: "Dashboard",
        icon: "bx bx-chart",
      },
      {
        label: "Suppliers",
        icon: "bx bx-group",
      },
      {
        label: "Products",
        icon: "bx bx-box",
      },
      {
        label: "Brands",
        icon: "bx bx-flag",
      },
    ],
  }),
 
};
</script>

<style  scoped>
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");

body {
  --sidebar-bg-color: #000080;
  --sidebar-item-hover: #f49e06;
  --sidebar-item-active: #2e6dd8;
}

ul{
   list-style: none;
}
.sideNav {
  position: fixed;
  display: flex;
  flex-direction: column;

  width:190px;
 background: #f3f6fd;
  left: 0;
  top: 0px;
  z-index: 1;
  padding: 0.3em;
  bottom: 0;
 
  transition: all 0.5s ease;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   

}

body.darkTheme{
  --sidebar-bg-color: #000080;
}
.switch-checkbx {

}
.switch-label{

}
img {
  width: 60px;
  height: 60px;
 margin-right:5px;
}
#block-bottom{
  width:180px;
  border-top:1px solid grey;
  height:250px;
  margin-top:200px;
}
li{
  margin-top:30px;
   color: #083346;
     font-weight:500;
}
.small-menu{


width:36px;


}
.logo-name{
  display: flex;
  flex-direction:column;
   color:#7d84ab;
}
.p-logo
{
  font-size:8px;
  margin-left:5px;
     color:#7d84ab;
}
.name{
margin-top:13px;
font-weight:bold;
margin-left:5px;
font-size:17px;

}
.logo{
margin-right:150px;
display: flex;
flex-direction: row;
}
/* Small devices (phones) */
@media only screen and (max-width: 600px) {

}
/* small devices (landscape tablets, 768px and up) */

@media only screen and (min-width:640px) and (max-width: 767px){
.sideNav {
 
  width:150px;
 

 
}
}
/* mobile devices */
@media only screen and (min-width: 360px)and (max-width: 639px) {
.sideNav {
 
  width:132px;
 

 
}
}

</style>
