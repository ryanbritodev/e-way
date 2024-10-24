import axios from "axios";

export const checkAuthToken = async () => {
  const req = await axios.get(import.meta.env.VITE_API_URL + "/users/auth", {
    withCredentials: true,
  });

  if (req) {
    return req;
  }
};
