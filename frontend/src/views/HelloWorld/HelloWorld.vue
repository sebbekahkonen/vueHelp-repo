<template>
	<div>
		
	</div>
</template>
<script>
/* imports skrivs alltid överst i script */ 

/* Man måste importera mapGetters och mapActions
   för att kunna komma åt data i storen	 */
import { mapActions, mapGetters } from 'vuex';

export default {
	/* Variabler */ 
	data: () => ({
		greeting: 'Hello',
		name: ''
	}),

	/* Lagra responsiv data */
	computed: {
		/* Getters från store */
		...mapGetters('authentication', ['getAuthentication']),
	},

	/* När komponenten är skapad 
	   Finns också mounted, vilket
	   är steget efter created */
	created() {
		this.testMethod();
	},
	
	/* Metoder */
	methods: {
		/* Setters från store */
		...mapActions('user', ['login']),
		...mapActions('authentication', ['changeAuthentication']),

		testMethod(){
			console.log('helloWorld')
		}
	}
	
};

/* CSS/SCSS scoped menas att css/scss körs bara
   i den här filen, utan scoped så körs css/scss globalt */
<style lang="scss" scoped>
	
</style>