export default UserToken = (state = {}, action) => {
	console.log("user token action................", state, action)

	if (action.type === 'fetched') {
		return action.data
	} else {
		return state;
	}
}