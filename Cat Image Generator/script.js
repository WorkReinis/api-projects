// Cat images App

let fetchButton = document.getElementById('btn');
let displayDiv = document.getElementById('display-info');

let image = document.getElementById('image')
const API_KEY = 'live_3mVhueO2GyWsvdji7rLi66f3qlYU3sfQKBfP41F8k8rHWXF7FyXfnLpIYiI1M4JG';

function fetchData() {
    console.log('Starting Fetch');
    fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET', // or 'POST', depending on the API
        headers: {
            'x-api-key': API_KEY // Include the API key in the headers
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Handle the data
        displayImage(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Attach the event listener and invoke the fetchData function
fetchButton.addEventListener('click', () => {
    fetchData();  // Call the fetchData function here
});

function displayImage(data) {
    // Populate basic information and add image
    displayDiv.innerHTML = `<img style="border-radius: 5px;" style="max-width: 375px; height: auto;" class="img-fluid" alt="Cat Image" src="${data[0].url}">`;
}