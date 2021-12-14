import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';

/* Man använder denna för att spara state i localstorage */
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);

export default new Vuex.Store({
	/* Här skrver man alla moduler som ska fungera med Getters och Setters.
	   Alla filer i mappen store med andra ord */
	modules: {
		user
	},

	/* Detta betyder att jag sparar user i localstorage */
	plugins: [createPersistedState({
		key: 'user',
		paths: ['user']
	})]
});
