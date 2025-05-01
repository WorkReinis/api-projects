
let fetchButton = document.getElementById('btn');
let displayDiv = document.getElementById('display-info');

const getStarWarsPerson = async () => {
    try {
        let randomNum = Math.floor(Math.random() * 83) + 1;
        const result = await axios.get(`https://icanhazdadjoke.com/`, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json' // Include the API key in the headers
            }
    }) 
        console.log(result.data)
        displayQuote(result.data)
    }
    catch(error) { error => console.log('Error: ', error)}
}

// Attach the event listener and invoke the fetchData function
fetchButton.addEventListener('click', () => {
    getStarWarsPerson();  // Call the fetchData function here
});


function displayQuote(data) {
    // Populate basic information and add image
    displayDiv.innerHTML = `
        <p class="fw-bolder fs-1 mb-0">${data.joke}</p>
        `;
}
