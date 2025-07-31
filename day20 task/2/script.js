function fetchData() {
    const url = 'https://file.io/pgiPc2';
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }
  
  function displayData(data) {
    const dataContainer = document.getElementById('data-container');
  
    const dataHtml = `
      <p>Data Property 1: ${data.property1}</p>
      <p>Data Property 2: ${data.property2}</p>
    `;
  
    dataContainer.innerHTML = dataHtml;
  }
  
  function main() {
    fetchData()
      .then(data => displayData(data))
      .catch(error => {
        console.error('An error occurred:', error);
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
      });
  }
  
  document.addEventListener('DOMContentLoaded', main);
  