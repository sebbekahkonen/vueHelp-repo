import services from '@/services';

/* Man kan skapa ett initialState 
   vilket är som en grundUser tills 
   man anger värden */
const initialState = () => ({
	id: null,
	username: '',
	email: '',
	phonenumber: null,
	token: ''
});

export default {
	/* Detta låter flera moduler reagera på samma actions/mutations */
	namespaced: true,

	/* spara variabler här */
	state: {
		user: initialState()
	},

	/* Man skulle kunna kalla på setUser direkt men detta är bad practice
	   Istället kallar man på setUser från actions */
	mutations: {
		setUser(state, data) {
			console.log(data);
			state.user = data;
		},
		setUsername(state, data) {
			state.user.username = data;
		}
	},
	/* Man tar in data här och gör något med datan */
	actions: {
		async login({ commit }, data) {
			const userData = await services.user.login(data.username, data.password);

			commit('setUser', userData);

		},

		/* Detta kallar man på via mapActions i vue filerna */
		changeUserInfo({ commit }, data) {
			commit('setUser', data);
		},

		/* Detta kallar man på via mapActions i vue filerna */
		changeOnlyUsername({ commit }, data) {
			commit('setUsername', data);
		},
	},
	/* Detta är en getter som det låter som, 
	   man får staten av user i storen	*/
	getters: {
		/* Detta kallar man på via mapGetters i vue filerna */
		getUser(state) {
			return state.user;
		}
	}
};