/* I denna fil kan man kalla på API anrop */
/* Man kallar på denna login från store, och store kallas från en vue component*/
/* exempel ifall man skulle ha en login */
export const login = (username, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'sebbe'
				&& password === 'test123') {
				resolve({
					id: 1234,
					username: 'sebbe',
					email: 'sebbetest@hotmail.com',
					phonenumber: 123456,
					token: '123asd'
				});

				return;
			}

			reject('Wrong username and password');

		}, 3000);

	});
};