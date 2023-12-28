import axios from "axios";
import {
  GET_Login_Error,
  GET_Login_Success,
  GET_Login_request,
  GET_Singup_Error,
  GET_Singup_Success,
  GET_Singup_request,
} from "./actionTypes";
import { toast } from "react-toastify";


const get_singup_request = () => {
  return {
    type: GET_Singup_request,
  };
};

const get_singup_success = (payload) => {
  return {
    type: GET_Singup_Success,
    payload,
  };
};

const get_singup_Error = () => {
  return {
    type: GET_Singup_Error,
  };
};

const get_login_request = () => {
  return {
    type: GET_Login_request,
  };
};
const get_login_success = (payload) => {
  return {
    type: GET_Login_Success,
    payload,
  };
};

const get_login_Error = () => {
  return {
    type: GET_Login_Error,
  };
};

export const signupfunc =
  ({ name, email, password, username, phone }) =>
  (dispatch) => {
    dispatch(get_singup_request());
    axios
      .post("https://tbw.vercel.app/api/auth/signup", {
        name, email, password, username, phone
      })
      .then((res) => {
        console.log(res);
        dispatch(get_singup_success(res));
      })
      .catch((err) => dispatch(get_singup_Error()));
  };



export const loginfunc =
  ({ email, password, navigate }) =>
  async (dispatch) => {
    dispatch(get_login_request());
    try {
      const response = await axios.post(
        "https://tbw.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        dispatch(get_login_success(response.data));
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        navigate("/");
        window.location.reload();
      } else {
        const errorMessage =
          response.data && response.data.error
            ? response.data.error
            : "Invalid email or password please try again .";
        toast.error(errorMessage);
        dispatch(get_login_Error());
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(get_login_Error());
      toast.error("Invalid email  or password  please try again .");
    }
  };
