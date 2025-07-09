export function displayCard(countryData) {
    const body = document.querySelector("body");
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${countryData[0].flags.png}">
        <h2>Name: ${countryData[0].name.common}</h2>
        <p>Region: ${countryData[0].region}</p>
    `;
    body.appendChild(card);
}