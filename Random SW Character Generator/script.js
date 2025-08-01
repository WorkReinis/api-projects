
let fetchButton = document.getElementById('btn');
let displayDiv = document.getElementById('display-info');

const getStarWarsPerson = async () => {
    try {
        let randomNum = Math.floor(Math.random() * 83) + 1;
        const result = await axios.get(`https://swapi.tech/api/people/${randomNum}/`) 
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
        <p>Name: ${data.result.properties.name}</p>
        <p>Birth Year: ${data.result.properties.birth_year}</p>
        <p>Gender: ${data.result.properties.gender}</p>
        <p>Height: ${data.result.properties.height}</p>
        <p>Mass: ${data.result.properties.mass}</p>
        <p>Skin Color: ${data.result.properties.skin_color}</p>
        <p>Hair Color: ${data.result.properties.hair_color}</p>
        `;
}

