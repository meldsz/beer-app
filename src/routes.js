import BreweryDetails from "./components/BreweryDetails";
import RandomBeerPage from "./components/RandomBeerPage";

export default [
  {
    path: "/brewery-details",
    component: BreweryDetails
  },
  {
    path: "/",
    component: RandomBeerPage
  }
];
