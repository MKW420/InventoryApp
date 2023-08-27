<template>


  <div class="sideNav" >
    <div class="logo">
    <img alt="Inventory App logo" src="../assets/Logo2.png" />
   </div>
 

    <SidebarLink
      v-for="(item, index) in LinkTree"
      :key="index"
      :label="item.label"
      
      :icon="item.icon"
      :depth="0"
      :data="item.children"
    />

    <div id="navbar-wrapper">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand"><i class=""></i></a>


        </div>
        </div>
      </nav>





    </div>
  </div>

</template>

<script>
import SidebarLink from "./SidebarLink.vue";


export default {
  components: { SidebarLink },

  name: "Sidebar-Com",
  data: () => ({
    LinkTree: [
      {
        label: "Home",
        icon: "",
        children: [
          {
            label: "level 1.1",
            children: [
              {
                label: "level 1.1.1",
                icon: "",
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
          },
          
          {
            label: "App ",
            icon: "",
          },],
          
      },
      {
        label: "Dashboard",
        icon: "bx bx-home-alt-2",
      },
      {
        label: "Suppliers",
        icon: "suppliers",
      },
      {
        label: "Products",
        icon: "suppliers",
      },
      {
        label: "Brands",
        icon: "brands",
      },
    ],
  }),
  setup() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");

body{

  --sidebar-bg-color: #000080;
  --sidebar-item-hover: #f49e06;
  --sidebar-item-active: #2e6dd8;
}
.sideNav {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
    
  width: 200px;

  left: 0;
  top: 0px;
  z-index: 1;
  background-color: #2e6dd8;
  padding: 0.3em;
  bottom: 0;
  border-right: 1px solid #f49e06;
  transition: all 0.5s ease;
  overflow: auto;
}
img {
  width: 140px;
  height: 140px;
  margin-left: 40px;
}
.collapse-icon{
  position: absolute;
  bottom: 0;
  padding:0.75em;
}
/* Small devices (phones) */
@media only screen and (max-width: 600px) {

.sideNav {
 width: 120px;


}
img {
  width: 80px;
  height: 80px;
  margin-left: 25px;
}
} 
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {


.sideNav {
 width: 170px;


}
img {
  width: 100px;
  height: 100px;
  margin-left: 25px;
}





} 
</style>
