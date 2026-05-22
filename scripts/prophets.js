const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let dateOfBirth = document.createElement("p");
        let placeOfBirth = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        dateOfBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;

        placeOfBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute("alt",fullName);
        portrait.setAttribute("loading","lazy");
        portrait.setAttribute("width",200);
        portrait.setAttribute("width",200);

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();