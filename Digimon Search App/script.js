let fetchButton = document.getElementById('btn');
let displayDiv = document.getElementById('display-info');

function fetchData() {
    console.log('Starting Fetch');
    const userInput = document.getElementById('search-input').value;

    fetch(`https://digimon-api.vercel.app/api/digimon/name/${userInput}/`)
        .then(response => {
            console.log("Response status:", response.status);  // Log the response status code
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Logs the full object
            displayDigimon(data);
        })
        .catch(error => {
            console.error('Error:', error);  // Logs any error
        });
}

// Attach the event listener and invoke the fetchData function
fetchButton.addEventListener('click', () => {
    fetchData();  // Call the fetchData function here
});


function displayDigimon(data) {
    // Populate basic information and add image
    displayDiv.innerHTML = `
        <p>Digimon Name: ${data[0].name}</p>
        <p>Digimon Level: ${data[0].level}</p>
        <img id="sprite" src="${data[0].img}" alt="${data.name} image">
    `;
}