const countries = ["Saudi Arabia", "Uganda", "Lithuania"];
const apiUrl = "https://restcountries.com/v3.1/all";

fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })

  .then((val) => {
    const selectedCountriesData = val.filter((country) =>
      countries.includes(country.name.common)
    );

    selectedCountriesData.forEach((country) => {
      const { capital, latlng, flag, region, name, cca2 } = country;
      console.log("Country:", name.common);
      console.log("Capital:", capital);
      console.log("Latitude/Longitude:", latlng.join(", "));
      console.log("Flag URL:", flag);
      console.log("Region:", region);
      console.log("Country Code:", cca2);
      console.log("===============================");
    });
  })

  .catch((err) => {
    console.log("error", err);
  });

 