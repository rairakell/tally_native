export default Auth = (email, password, done, fail) => {
	fetch('http://192.168.0.103:3000/api/v1/users/sessions', {
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
	}).catch((response) => {
	})
}