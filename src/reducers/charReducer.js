import { types } from './../types/types';

export const charReducer = (state = [], action) => {
	switch (action.type) {
		case types.allCharacters:
			return [...action.payload];
		default:
			return state;
	}
};
