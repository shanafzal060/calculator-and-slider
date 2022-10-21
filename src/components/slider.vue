<template>
  <hooper :hoverPause="false" :infiniteScroll="true"  :progress="true" :autoPlay="true" :playSpeed="2000">
    <slide>
      <img src="../assets/1-image.jpg" alt="" width="100%" />
    </slide>
    <slide>
      <img src="../assets/2-image.jpg" alt="" width="100%" />
    </slide>
    <slide>
      <img src="../assets/3-image.jpg" alt="" width="100%" />
    </slide>
    <slide>
      <img src="../assets/4-image.jpg" alt="" width="100%" />
    </slide>
    <slide>
      <img src="../assets/5-image.jpg" alt="" width="100%" />
    </slide>
    <slide>
      <img src="../assets/1-image.jpg" alt="" width="100%" />
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-progress slot="hooper-addons"></hooper-progress>
  </hooper>
</template>

<script>
import { Hooper,
         Slide, 
         Navigation as HooperNavigation,
         Pagination as HooperPagination,
         Progress as HooperProgress
          } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    HooperProgress
  },
};
</script>
