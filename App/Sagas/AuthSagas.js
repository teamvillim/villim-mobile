import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * login (api, action) {
  const { email, password } = action
  // make the call to the api
  const response = yield call(api.login, email, password);
  
  if (response.success) {
    const user = response.user;
    // do data conversion here if needed
    yield put(AuthActions.loginSuccess(user));
  } else {
    const message = response.message;
    yield put(AuthActions.loginFailure(message));
  }
}

export function * signup (api, action) {
  const { firstname, lastname, email, password, hasCode, code } = action
  // make the call to the api
  const response = yield call(api.signup, firstname, lastname, 
    email, password, hasCode, code);

  if (response.success) {
    const user = response.user;
    // do data conversion here if needed
    yield put(AuthActions.signupSuccess(user));
  } else {
    const message = response.message;
    yield put(AuthActions.signupFailure(message));
  }
}

export function * getUser (api, action) {
  const { token } = action
  // make the call to the api
  const response = yield call(api.getUser, token);

  if (response.success) {
    const user = response.user;
    // do data conversion here if needed
    yield put(AuthActions.userSuccess(user))
  } else {
    const message = response.message;
    yield put(AuthActions.userFailure(message))
  }
}
