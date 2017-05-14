import Vue 					          from "vue";
import VueRouter 			        from "vue-router";

Vue.use(VueRouter);

import Dashboard 				      from "../components/Dashboard/Dashboard.vue";

// define routes
const routes = [
	{ path: "/", redirect: "/dashboard" },
	{ path: "/dashboard", component: Dashboard },
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	routes
});
