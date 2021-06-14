import { createStore, applyMiddleware, combineReducers } from 'redux';
import auth from './Containers/AuthenticatedApp/store/Reducer'
import tasks from './Containers/Tasks/store/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  auth,
  tasks
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;
