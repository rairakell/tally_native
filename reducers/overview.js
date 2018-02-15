export default overview = (state={}, action) => {
	if (action.type == "init") {
		return action.overview;
	} else {
		return state;
	}
}