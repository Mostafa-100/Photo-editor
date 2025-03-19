import { API_HOST } from "@/lib/constants";
import { setUserIsLoggedIn } from "@/redux/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useLoginUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [userNotExistError, setUserNotExistError] = useState([]);

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post(`${API_HOST}/api/login`, data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      dispatch(setUserIsLoggedIn(true));
      setErrors([]);
      setUserNotExistError([]);
      navigate("/");
    },
    onError: (error) => {
      if (error?.response.status == 422) {
        setErrors(error.response.data.errors);
        setUserNotExistError([]);
      } else if (error?.response.status == 401) {
        setErrors([]);
        setUserNotExistError(error?.response.data.email);
      }
    }
  })

  return { mutation, errors, userNotExistError };

}

export default useLoginUser;