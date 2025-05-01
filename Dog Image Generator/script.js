
let fetchButton = document.getElementById('btn');
let displayDiv = document.getElementById('display-info');

function fetchData() {
    console.log('Starting Fetch');
    fetch('https://dog.ceo/api/breeds/image/random')
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
    displayDiv.innerHTML = `<img style="border-radius: 5px;" style="max-width: 375px; height: auto;" class="img-fluid" alt="Cat Image" src="${data.message}">`;
}