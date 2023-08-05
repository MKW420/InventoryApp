<template>
  <div class="sideNav">
    <img alt="Inventory App logo" src="../assets/img/logoill.png" />
 
    <SidebarLink
      v-for="(item, index) in LinkTree"
      :key="index"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :data="item.children"
    />
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
        icon: "home",
        children: [
          {
            label: "level 1.1",
            children: [
              {
                label: "level 1.1.1",
              },
            ],
          },

          {
            label: "level 1.2",
          },
        ],
      },
      {
        label: "Settings",
        icon: "settings",
      },
      {
        label: "Dashboard",
        icon: "dashboard",
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
  transition: all 0.3s ease;
  overflow: auto;
}
img {
  width: 140px;
  height: 140px;
  margin-left: 40px;
}
</style>
