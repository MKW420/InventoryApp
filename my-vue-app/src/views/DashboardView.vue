<template>
  <div id="app">
    <Sidebar />
    <SearchboxCom />
    <div></div>
    <h1>Dashboard</h1>
    <DashboardTrack :cards="dashboardData" />
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";
import DashboardTrack from "../components/block.vue";

export default {
  components: {
    Sidebar,
    SearchboxCom,
    DashboardTrack,
  },
  setup() {
    return {
      dashboardData: [
        {
          id: 1,
          icon: "bx bxs-calendar-check",
          number: 200,
          name: "Suppliers",
          color: "#2e6dd8",
          backgroundColor: "#000080",
        },
        {
          id: 2,
          icon: "bx bx-box",
          number: 550,
          name: "Brands",
          color: "#f4ac0c",
          backgroundColor: "#000080",
        },
        {
          id: 3,
          icon: "bx bx-building",
          number: 690,
          name: "Products",
          color: "#000080",
          backgroundColor: "#f4ac0c",
        },
        {
          id: 4,
          icon: "bx bx-money",
          number: 7250,
          name: "Total",
          color: "#f4ac0c",
          backgroundColor: "#f49e06",
        },

        // Add more data for other cards if needed
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: "Roboto", serif;
}
</style>
