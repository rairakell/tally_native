export default user = (state={}, action) => {
	switch (action.type) {
		case "fetch_local_token":
			return state.data;
		// case "fetch_local_token_failed":
		default:
		    return {};
	}
}