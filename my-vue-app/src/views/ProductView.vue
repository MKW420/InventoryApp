<template>
  <div id="main-prod">
    <Sidebar />
    <nav>
      <SearchboxCom />
    </nav>
    <div id="prod-banner">
      <Banner-com />
    </div>
    <div id="prod-Tbl">
      <div id="dropdown">
        <label for="product-select">Select Product:</label>
        <select id="product-select" v-model="selectedProduct">
          <option
            v-for="product in products"
            :key="product.id"
            :value="product.id"
          >
            {{ product.name }}
          </option>
        </select>
      </div>
      <TblTrackCom :rows="Tbldata" :selectedProduct="selectedProduct" />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";
import BannerCom from "../components/bannerCom.vue";
import TblTrackCom from "../components/table/tableCom.vue";

export default {
  components: {
    Sidebar,
    SearchboxCom,
    BannerCom,
    TblTrackCom,
  },

  data() {
    return {
      Tbldata: [
        {
          id: 1,
          col1: "Name",
          col2: "Name",
          col3: "Name",
          col4: "Name",
        },
        {
          id: 2,
          col1: "Name",
          col2: "Name",
          col3: "Name",
          col4: "Name",
        },
        {
          id: 3,
          col1: "Name",
          col2: "Name",
          col3: "Name",
          col4: "Name",
        },
        {
          id: 4,
          col1: "Name",
          col2: "Name",
          col3: "Name",
          col4: "Name",
        },
        {
          id: 4,
          col1: "Name",
          col2: "Name",
          col3: "Name",
          col4: "Name",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
        {
          id: 4,
          col1: "Nope",
          col2: "Nope",
          col3: "Nope",
          col4: "Nope",
        },
      ],
      products: [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
        // Add more dummy products as needed
      ],
      selectedProduct: null,
    };
  },

  setup() {},
};
</script>
<style scoped>
#main-prod {
  font-family: "Roboto", serif;
}
#prod-Tbl {
  width: 80%;
  height: 100vh;
  /* border:3px solid red; */
  margin-left: 200px;
  margin-top: 80px;
  position: relative;
}
#prod-banner {
  width: 80%;
  height: 200px;
  margin-left: 250px;
  /* border:3px solid red; */
}
#dropdown {
  right: 50px;
  position: absolute;
  top: 0;
  color: white;
  background-color: #2e6dd8;
  border: 1px solid #61b2d8;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
