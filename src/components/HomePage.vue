<template>
  <div>
    <div>
      <h1>The Random Beer App</h1>
      <button @click="dispatchFetchRandomBeer">Show Another Beer</button>
    </div>
    <div>
      <div>
        <img
          src="https://touch.daft.ie/static/images/fallbacks/no-image-size740x480.jpg"
          height="100%"
          width="100%"
        />
      </div>
      <div>
        <div>{{ beerDetails.name }}</div>
        <div></div>
        <button @click="showBreweryDetails"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { FETCH_NEW_BEER } from "../store/types";

export default {
  name: "HomePage",
  computed: {
    ...mapState(["beerDetails"]),
  },
  methods: {
    ...mapActions({
      dispatchFetchRandomBeer: FETCH_NEW_BEER,
    }),
    showBreweryDetails() {},
  },
  created() {
    this.dispatchFetchRandomBeer();
  },
};
</script>

<style scoped>
</style>