<template>
  <router-link to="/">Back</router-link>
</template>

<script>
export default {
  name: "BreweryDetails",
  props: {
    breweryDetails: {
      type: Array,
      default: null,
    },
  },
};
</script>