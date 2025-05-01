
let fetchButton = document.getElementById('btn');
let displayDiv = document.getElementById('display-info');

const getStarWarsPerson = async () => {
    try {
        let randomNum = Math.floor(Math.random() * 83) + 1;
        const result = await axios.get(`https://swapi.dev/api/people/${randomNum}/`) 
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
        <p>Name: ${data.name}</p>
        <p>Birth Year: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>
        <p>Height: ${data.height}</p>
        <p>Mass: ${data.mass}</p>
        <p>Skin Color: ${data.skin_color}</p>
        <p>Hair Color: ${data.hair_color}</p>
        `;
}

