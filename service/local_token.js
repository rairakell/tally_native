import { 
  AsyncStorage, 
} from 'react-native'; 

const UserKey = '@kjizhang:user';

function FetchLocalToken(done, fail) {
	AsyncStorage.getItem(UserKey)
		.then((value) => {
			data = JSON.parse(value);

		    console.log("Fetch local token successfully!")

		    done(data);
		})
		.catch((error) => {
			console.log("Fetch local token failed!", error)

			fail()
		})
}

function SetLocalToken(data, done, fail) {
	console.log("Set local token.....", data)

	AsyncStorage.setItem(UserKey, JSON.stringify(data))
		.then(() => {
			console.log("Set up token successfully")
			done()
		})
		.catch(() => {
			console.log("Set up token failed")
			fail()
		})
}

export {FetchLocalToken, SetLocalToken};