import {
	SET_AUTHNTICATED,
	SET_UNAUTHNTICATED,
	SET_USER,
	SET_ERRORS,
	CLEAR_ERRORS,
	LOADING_UI,
} from "../types";

const initialState = {
	authenticated: false,
	credentials: {},
	likes: [],
	notifications: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_AUTHNTICATED:
			return {
				...state,
				authenticated: true,
			};
		case SET_UNAUTHNTICATED:
			return initialState;
		case SET_USER:
			return {
				authenticated: true,
				...action.payload,
			};
		default:
			return state;
	}
}
