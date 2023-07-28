<template>
  <div class="container">
    <div class="head-title">
      <div class="left"></div>
      <ul class="box-info">
        <li v-for="card in cards" :key="card.id">
          <i
            class="bx"
            :class="card.icon"
            :style="{ color: card.color, background: card.backgroundColor }"
          ></i>
          <span class="text">
            <h3>{{ card.number }}</h3>
            <h2>{{ card.name }}</h2>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  name: "DashboardTrack",
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap"); */
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");

body {
  --dark: #000000;
  --jumbo: #7f8087;
  --light: #f9f9f9;
  --lighty: #ece7e7;
}

.container {
  max-width: 800px;
  padding: 0px 13rem;
}

body {
  background: var(--lighty);
}

.box-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 36px;
}

.box-info li {
  padding: 40px;
  background: var(--light);
  border-radius: 20px;
  display: flex;
  align-items: center;
  grid-gap: 24px;
}

.box-info li .bx {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
