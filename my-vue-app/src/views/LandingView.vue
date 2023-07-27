<template>
  <div>
    <HeaderTrack />
    <section class="container">
      <div class="header">
        <h1>Welcome to Invento Syst.</h1>

        <p>
          Get your stock on lock. Inventory Management system for Retail
          businesses Worldwide!
        </p>

        <button>Sign Up</button>
      </div>
      <div class="sqaurebx">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="circlebx">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderTrack from "../components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderTrack,
  },
};
</script>

<style scoped>
* {
  /* box-sizing: border-box; */
  margin: 0px auto;
  padding: 0;
}

body {
  font-family: "Roboto", serif;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
a,
a:active,
a:focus {
  color: #333;
  text-decoration: none;
}
.container {
  background-image: linear-gradient(#2e6dd8, #000080);
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.header h1 {
  color: #fff;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
}

.header p {
  color: #fff;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  z-index: 1;
}
button {
  color: #000080;
  border: 1px solid #fff;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  height: 50px;
  width: 280px;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  z-index: 1;
  border-radius: 80px;
  border: 2px solid #f49e06;
  box-shadow: 0 0 20px #f49e06;
  border-radius: 4px;
}
.btn {
  top: 40%;
  left: 50%;
}
button:hover {
  color: #fff;
  background: #f49e06;
  cursor: pointer;
}

ul li {
  position: absolute;
  border: 1px solid #f49e06;
  width: 30px;
  height: 30px;
  list-style: none;
  opacity: 0;
  background: #f49e06;
}
/* .navlist li{
       border:none;
       position: relative;
       background:none;
       margin:50px;
       top:25px;
       margin-left: 80px;
       list-style-type: none;
       opacity: 1 ;
       padding-left: 0;
      
   
   } */
.link1 {
  display: inline;
  color: #f49e06;
  font-weight: bold;
}
.link1 a::after {
  display: inline-block;
  color: #fff;
  font-size: 150%;
  font-weight: bold;
  padding: 0 3px;
}
.sqaurebx li {
  top: 50vh;
  left: 45vh;
  animation: sqaure 10s linear infinite;
}

.sqaurebx li:nth-child(2) {
  top: 200vh;
  left: 10vh;
  animation-delay: 1s;
}
.sqaurebx li:nth-child(3) {
  top: 200vh;
  left: 85vh;
  animation-delay: 2s;
}
.sqaurebx li:nth-child(4) {
  top: 190vh;
  left: 70vh;
  animation-delay: 3s;
}
.sqaurebx li:nth-child(5) {
  top: 180vh;
  left: 10vh;
  animation-delay: 4s;
}

@keyframes sqaure {
  0% {
    transform: scale(0) rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(5) rotateY(1000deg);
    opacity: 0;
  }
}
.circlebx li {
  opacity: 0.4;
  bottom: 0;
  left: 15wv;
  animation: circle 10s linear infinite;
}
.circlebx li:nth-child(2) {
  left: 35vw;
  animation-delay: 1s;
}
.circlebx li:nth-child(3) {
  left: 55vw;
  animation-delay: 2s;
}
.circlebx li:nth-child(4) {
  left: 75vw;
  animation-delay: 3s;
}
.circlebx li:nth-child(5) {
  left: 90vw;
  animation-delay: 4s;
}

@keyframes circle {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
    bottom: 0;
    border-radius: 0;
  }
  100% {
    transform: scale(5) rotate(1000deg);
    opacity: 0;
    bottom: 90vh;
    border-radius: 50%;
  }
}
.container-footer {
  background: #000080;
}
div.container-footer.w-container {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-bottom: 40px;
  padding-top: 70px;
}

div.container-footer.w-container:after {
  clear: both;
  content: " ";
  display: table;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
}

div.container-footer.w-container:before {
  content: " ";
  display: table;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
}

div.w-row {
  box-sizing: border-box;
  margin-left: -10px;
  margin-right: -10px;
}

div.w-row:after {
  clear: both;
  content: " ";
  display: table;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
}

div.w-row:before {
  content: " ";
  display: table;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
}

div.footer-column.w-clearfix.w-col.w-col-4 {
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  padding-left: 60px;
  padding-right: 10px;
  position: relative;
  width: 33.3333%;
}

div.footer-column.w-clearfix.w-col.w-col-4:after {
  clear: both;
  content: " ";
  display: table;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
}

div.footer-column.w-clearfix.w-col.w-col-4:before {
  content: " ";
  display: table;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
}

img.failory-logo-image {
  border-width: 0;
  box-sizing: border-box;
  display: inline-block;
  float: left;
  max-width: 100%;
  vertical-align: middle;
}

h3.footer-failory-name {
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.1em;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-top: 24px;
}

p.footer-description-failory {
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.8);
  display: block;
  font-family: Lato, sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.5em;
  margin-bottom: 16px;
  margin-top: 15px;
}

br {
  box-sizing: border-box;
}

div.footer-column.w-col.w-col-8 {
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  width: 66.6667%;
}

div.w-col.w-col-8 {
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  width: 66.6667%;
}

div.w-col.w-col-7.w-col-small-6.w-col-tiny-7 {
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  width: 58.3333%;
}

h3.footer-titles {
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.1em;
  margin-bottom: 0;
  margin-left: 0;
  margin-top: 0px;
}

p.footer-links {
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.8);
  display: block;
  font-family: Lato, sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8em;
  margin-bottom: 16px;
  margin-top: 2px;
}

a {
  background-color: transparent;
  box-sizing: border-box;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.2em;
  text-decoration: none;
}

a:active {
  outline: 0;
}

a:hover {
  outline: 0;
}

span.footer-link {
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
}

span.footer-link:hover {
  color: #f49e06;
  font-weight: 400;
}

span {
  box-sizing: border-box;
}

strong {
  box-sizing: border-box;
  font-weight: 700;
}

div.w-col.w-col-5.w-col-small-6.w-col-tiny-5 {
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  width: 41.6667%;
}

div.column-center-mobile.w-col.w-col-4 {
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  width: 33.3333%;
}

a.footer-social-network-icons.w-inline-block {
  background-color: transparent;
  box-sizing: border-box;
  color: #ffffff;
  display: inline-block;
  font-family: Lato, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.2em;
  margin-right: 8px;
  margin-top: 10px;
  max-width: 100%;
  opacity: 0.8;
  text-decoration: none;
}

a.footer-social-network-icons.w-inline-block:active {
  outline: 0;
}

a.footer-social-network-icons.w-inline-block:hover {
  opacity: 1;
  outline: 0;
}

img {
  border-width: 0;
  box-sizing: border-box;
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
}

p.footer-description {
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.8);
  display: block;
  font-family: Lato, sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.5em;
  margin-bottom: 16px;
  margin-top: 15px;
}

strong.link-email-footer {
  box-sizing: border-box;
  font-weight: 700;
}
</style>
