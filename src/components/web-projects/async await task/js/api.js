import { displayCard } from './ui.js';

export async function GetCountry(country) {
    try {
        const data = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!data.ok) {
            throw new Error("Cannot get your response");
        }
        const countryData = await data.json();
        displayCard(countryData);

        if (countryData[0].borders && countryData[0].borders.length > 2) {
            const neighbor = countryData[0].borders[2];
            const sideNeighbor = await fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
            const neighborData = await sideNeighbor.json();
            displayCard(neighborData);
        } else {
            console.log('This country has less than 3 neighbors.');
        }
    } catch (err) {
        console.error(err.message);
    }
}