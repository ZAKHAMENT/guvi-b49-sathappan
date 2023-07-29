// Function to fetch data from the trace.moe API using a Promise
function getAnimeSceneInfo(imageURL) {
    const apiUrl = `https://trace.moe/?url=${imageURL}`;
    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
  
  // Function to update the UI with the retrieved anime scene information
  function updateUI(animeData) {
    const animeTitleElement = document.getElementById('animeTitle');
    const episodeNumberElement = document.getElementById('episodeNumber');
    const timestampElement = document.getElementById('timestamp');
  
    animeTitleElement.textContent = `Anime Title: ${animeData.anime}`;
    episodeNumberElement.textContent = `Episode Number: ${animeData.episode}`;
    timestampElement.textContent = `Timestamp: ${animeData.at}`;
  }
  
  // Main function to handle the image recognition process
  function handleImageRecognition() {
    const imageUrl = 'https://raw.githubusercontent.com/soruly/trace.moe/master/demo.jpg';
  
    // Call the function to fetch data from the trace.moe API
    getAnimeSceneInfo(imageUrl)
      .then((data) => {
        updateUI(data.result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Event listener to call the main function when the page is loaded
  window.addEventListener('load', handleImageRecognition);
  