document.addEventListener('DOMContentLoaded', () => {
    const fetchJokeBtn = document.getElementById('fetchJokeBtn');
    const jokeText = document.getElementById('jokeText');
  
    fetchJokeBtn.addEventListener('click', () => {
      getJoke()
        .then(joke => {
          jokeText.textContent = joke;
        })
        .catch(error => {
          jokeText.textContent = 'Failed to fetch a joke. Please try again later.';
          console.error(error);
        });
    });
  });
  
  function getJoke() {
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
  
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data.value);
  }
  