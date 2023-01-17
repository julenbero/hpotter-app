import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from 'redux';
import { charReducer } from '../reducers/charReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	char: charReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
