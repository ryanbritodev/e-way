import axios from "axios";

export const checkAuthToken = async () => {
  const req = await axios.get("/api/users/auth", {
    withCredentials: true,
  });

  if (req) {
    return req;
  }
};
