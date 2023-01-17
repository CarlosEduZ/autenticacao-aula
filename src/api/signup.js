import axios from "axios";

const signup = () => {
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-eduardo-teemo/signup";
  const body = {
    email: "carlosteemo@email.com",
    password: "12345678"
  };

  axios
    .post(url, body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export default signup;
