import { combineReducers } from 'redux';

import { authentication } from './Auth/authentification.reducers';
import { registration } from './Auth/registration.reducer';
import { users } from './User/user.reducer';
import { alert } from './Alert/alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;