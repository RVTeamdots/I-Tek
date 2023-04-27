import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./constants";
import { AuthService } from "../../../services";
import { JWT } from "../../../shared";

export const login = (data) => async (dispatch, getState) => {
  try {
    const response = await AuthService.Login(data);
    console.log("response is here", response);
    if (response.success) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.access_token });
      JWT.setJwt(response.data.access_token);
      return response;
    } else {
      dispatch({ type: LOGIN_FAILED, payload: null });
      return Promise.reject(new Error(response.message));
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: null });
    return Promise.reject(error);
  }
};

export const logout = () => (dispatch, getState) => {
  JWT.removeJWT();
  dispatch({ type: LOGOUT });
};
