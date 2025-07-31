const countries = ["Saudi Arabia", "Uganda", "Bhutan",];
const apiUrl = "https://restcountries.com/v3.1/all";
const container = document.getElementById("countries-info");

function fetchWeatherData(name) {
  let key = '012841b3102cff179c14d39d5fcc77ef';
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${key}`)
    .then(response => response.json());
}

fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("Error fetching data:", response.statusText);
    }
  })
  .then((val) => {
    console.log("Fetched Data:", val);

    const selectedCountriesData = val.filter((country) =>
      countries.includes(country.name.common)
    );

    console.log("Selected Countries:", selectedCountriesData);

    selectedCountriesData.forEach((country) => {
      const { capital, latlng, flags, region, name, cca2} = country;
      console.log(`Flag URL for ${name.common}:`, flags);
    
      const [latitude, longitude] = latlng;

      const cardDiv = document.createElement("div");
      cardDiv.className = "col-md-4";
      cardDiv.setAttribute("data-country", name.common);
    
      const card = document.createElement("div");
      card.className = "card my-3";
    
      const img = document.createElement("img");
      img.className = "card-img-top";
      img.src = flags.png;
      img.alt = `${name.common}`;
    
      img.onerror = function() {
        console.log(`Failed to load image for ${name.common}`);
      };
    
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
    
      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = name.common;
    
      const capitalPara = document.createElement("h6");
      capitalPara.className = "card-text";
      capitalPara.textContent = `Capital: ${capital}`;
    
      const regionPara = document.createElement("h6");
      regionPara.className = "card-text";
      regionPara.textContent = `Region: ${region}`;
    
      const codePara = document.createElement("h6");
      codePara.className = "card-text";
      codePara.textContent = `Country Code: ${cca2}`;
    
      const latlngPara = document.createElement("h6");
      latlngPara.className = "card-text";
      latlngPara.textContent = `Latitude/Longitude: ${latlng.join(", ")}`;
    
      const weatherLink = document.createElement("a");
      weatherLink.className = "btn btn-primary";
      weatherLink.textContent = "Click for Weather";

      // Funtion for opening current country's weather in openweather.com
      weatherLink.addEventListener("click", () => {
        fetchWeatherData(name.common)
          .then(weatherData => {
            const url2 = `https://openweathermap.org/city/${weatherData.id}`;
            window.open(url2, '_blank');
          })
          .catch(error => {
            console.error("Error fetching weather data:", error);
          });
      });

      // showcasing the value in DOM
      cardBody.appendChild(title);
      cardBody.appendChild(capitalPara);
      cardBody.appendChild(regionPara);
      cardBody.appendChild(codePara);
      cardBody.appendChild(latlngPara);
      cardBody.appendChild(weatherLink);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardDiv.appendChild(card);
      container.appendChild(cardDiv);
    });
  })
  .catch((err) => {
    console.log("error", err);
  });
