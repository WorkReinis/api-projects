let fetchButton = document.getElementById('btn');
let displayDiv = document.getElementById('display-info');

function fetchQuote() {
    const url = 'https://api.api-ninjas.com/v1/quotes?category=fitness'; // Endpoint for a random quote

    fetch(url, {
            headers: { 'X-Api-Key': 'gGf1pn15nXIEEyxv1G1pbg==rnRJlrxgkC3AceeX'},
            contentType: 'application/json',})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayQuote(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// async function fetchQuote() {
//     const url = 'https://api.api-ninjas.com/v1/quotes?category=fitness'; // Endpoint for a random quote
//     try {
//         const response = await fetch(url,  {
//             headers: { 'X-Api-Key': 'gGf1pn15nXIEEyxv1G1pbg==rnRJlrxgkC3AceeX'},
//             contentType: 'application/json',}
//         ); 
//         // Wait for the fetch to complete
//         if (!response.ok) {
//             throw new Error('Network response was not ok'); // Handle bad responses
//         }
//         const data = await response.json(); // Wait for the JSON parsing
//         console.log(data); // Handle the data (quote)
//         // Display the quote in your HTML
//         displayQuote(data)
//     } catch (error) {
//         console.error('Error:', error); // Handle any errors
//     }
// }

// Attach the event listener and invoke the fetchData function
fetchButton.addEventListener('click', () => {
    fetchQuote();  // Call the fetchData function here
});

function displayQuote( data) {
    // Populate basic information and add image
    displayDiv.innerHTML = `
        <p>${data[0].quote}</p>
        <p>- ${data[0].author}</p>
        `;
}
