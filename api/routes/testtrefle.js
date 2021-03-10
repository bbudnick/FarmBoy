
// The parameters for our POST request
const params = {
  origin: "http://localhost:9000",
  token: "lMjyhDCKH5D43P-4SlgHJeM7557Ch37abJ0TBT0-gBE",
};

const urlPlants = "https://trefle.io/api/auth/claim";

let fetchPlants = async () => {
  try {
    let response = await fetch(urlPlants, {
      method: "post",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    fetchAllPlants("https://trefle.io/api/v1/plants?token=" + json.token);
    console.log(json);
  } catch (error) {
    console.log("Request failed", error);
  }
};

let fetchAllPlants = async (url) => {
  try {
    let response = await fetch(url);
    let plantData = await response.json();
    res.render('index', { })
  } catch (error) {
    console.log("Request failed", error);
  }
};


fetchPlants(urlPlants);