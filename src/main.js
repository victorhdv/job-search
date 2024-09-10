import { createApp } from "vue";
import App from "./App.vue";
import "@/index.css";
import router from "./router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faSearch,
  faLocationDot,
  faBuilding,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { createPinia } from "pinia";

/* add icons to the library */
library.add(faSearch, faLocationDot, faBuilding, faAngleDown, faAngleUp);

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
