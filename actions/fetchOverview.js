export default FetchOverview = (state={}, action) => {
	if (action.type == "init") {
		return action.data;
	} else {
		return state;
	}
}