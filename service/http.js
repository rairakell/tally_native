const ServerHost = 'http://192.168.0.103:3000';

Auth = (email, password, done, fail) => {
	fetch(ServerHost + '/api/v1/users/sessions', {
	  method: 'POST',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    email: email,
	    password: password,
	  }),
	}).then((response) => {
		if (response.ok) {
			const data = response.json().then((data) => {
				done(data);
			})
		} else {
			console.log("auth failed:", response);
			fail();
		}
	}).catch((error) => {
		console.log("Fetch token error: ", error);
	})
}

Overview = (email, token, done, fail) => {
	fetch(ServerHost + '/api/v1/summary', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Token token="' + token + '", email="' + email + '"',
		}
	}).then((response) => {
		if (response.ok) {
			const data = response.json().then((data) => {
				done(data);
			})
		} else {
			fail();
		}
	}).catch((error) => {
		console.log("Fetch Overview error: ", error);
	})
}

export {Auth, Overview};