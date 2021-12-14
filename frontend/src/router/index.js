import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../views/HelloWorld/routes.js'
/* Importera in filen routes från views 
för att kunna spreada ut datan i routerView */
import TestView from '../views/TestView/routes.js'


Vue.use(VueRouter)

/* Här spreadar man ut alla routes */
const routes = [
	...HelloWorld,
	...TestView
]

/* Detta gör så att vi undviker att ha hashtags i våran url */
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});


export default router
