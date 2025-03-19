import { API_HOST } from "@/lib/constants";
import { setShowLogin } from "@/redux/login";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

function useRegisterUser() {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);

  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return axios.post(`${API_HOST}/api/register`, data);
    },
    onSuccess: () => { dispatch(setShowLogin(true)) },
    onError: (error) => {
      if (error?.response.status == 422) {
        setErrors(error.response.data.errors);
      }
    }
  })

  return { mutation, errors };
}

export default useRegisterUser;