import { combineReducers } from "redux";
// import reducers here
import infor from "./inforReducer";
import cinemaInfor from "./cinemaReducer";
import movieLengthInfor from "./movieReducer";

const reducers = combineReducers({
	// here we will be adding reducers
	personalInfor: infor,
	cinemaInfor: cinemaInfor,
	movieLengthInfor: movieLengthInfor,
});

export default (state, action) => reducers(state, action);
