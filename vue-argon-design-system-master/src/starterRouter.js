import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import Landing from "./views/Landing.vue";
import signUp from "./views/signUp.vue";
import Dashboard from "./views/Dashboard.vue";
import Transaction from "./views/Transaction.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: Header,
        default: Landing,
        footer: Footer
      }
    },
    {
      path: "/transaction",
      name: "transaction",
      components: {
        header: Header,
        default: Transaction,
        footer: Footer
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      components: {
        header: Header,
        default: Dashboard,
        footer: Footer
      }
    },
    {
      path: "/signup",
      name: "signUp",
      components: {
        header: Header,
        default: signUp,
        footer: Footer
      }
    },
    {
      path: "/starter",
      name: "starter",
      components: {
        header: Header,
        default: Starter,
        footer: Footer
      }
    }
  ]
});
