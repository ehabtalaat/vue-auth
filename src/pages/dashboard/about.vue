<template>
  <div class="about">
    <the-header></the-header>
  <p>about</p>
  </div>
</template>
<script>
import TheHeader from '../../components/layout/TheHeader.vue';

export default {
   components: {
    TheHeader
  },
  name: 'Home',
  created(){
     console.log(this.$store.getters.token,this.$store.getters.user);
 },
}
</script>
