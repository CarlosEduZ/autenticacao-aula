import axios from "axios";

const getTrips = (setData) => {
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-eduardo-teemo/trips";

  axios
    .get(url)
    .then((res) => setData(res.data.trips))
    .catch((err) => console.log(err));
};

export default getTrips;
