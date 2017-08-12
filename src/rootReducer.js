import { combineReducers } from 'redux';
import activeTeches from './reducers/activeTeches';

/**
 * The root reducer that combines all separated reducers
 */
export default combineReducers({
    activeTeches,
});
