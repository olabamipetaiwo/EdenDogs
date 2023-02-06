import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/main.scss";
import LazyLoadDirective from "./directives/LazyLoadDirective";

import CaretDownIcon from "./components/icons/CaretDown.vue";
import CaretRightIcon from "./components/icons/CaretRight.vue";
import DateIcon from "./components/icons/Date.vue";
import LocationIcon from "./components/icons/Location.vue";
import NairaIcon from "./components/icons/Naira.vue";
import SearchIcon from "./components/icons/Search.vue";
import TicketIcon from "./components/icons/Ticket.vue";

const app = createApp(App);

app.component("caret-down-icon", CaretDownIcon);
app.component("caret-right-icon", CaretRightIcon);
app.component("date-icon", DateIcon);
app.component("location-icon", LocationIcon);
app.component("naira-icon", NairaIcon);
app.component("search-icon", SearchIcon);
app.component("ticket-icon", TicketIcon);
app.directive("lazyload", LazyLoadDirective);



app.use(store).use(router).mount("#app");
