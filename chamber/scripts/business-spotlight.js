const cards = document.querySelector("#business-spotlight");

async function apiFetch() {
    try {
        const response = await fetch("data/members.json");
        if(response.ok) {
            const data = await response.json();
            //console.log(data);
            getSpotlightBusinesses(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getSpotlightBusinesses = (businesses) => {
    let validBusinesses = businesses.businesses.filter(business => business.membership > 1);
    let spotlight = [];
    for(let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * (validBusinesses.length));
        spotlight.push(validBusinesses[randomNumber]);
        validBusinesses = validBusinesses.filter(business => business != validBusinesses[randomNumber]);
    }
    displayBusinesses(spotlight);
}

const displayBusinesses = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let infoContainer = document.createElement("div");
        let image = document.createElement("img");
        let textContainer = document.createElement("div");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let linkP = document.createElement("p");
        let link = document.createElement("a");

        name.innerHTML = `${business.name}`;
        card.appendChild(name);

        image.setAttribute("src", business.image);
        image.setAttribute("alt", business.name);
        image.setAttribute("width", 100);
        image.setAttribute("height", 100);
        infoContainer.appendChild(image);

        email.innerHTML = `<span class="bold">Email</span>: ${business.email}`;
        textContainer.appendChild(email);

        phone.innerHTML = `<span class="bold">Phone</span>: ${business.phone}`;
        textContainer.appendChild(phone);

        link.innerHTML = `<span class="bold">URL</span>: ${business.url}`;
        link.setAttribute("href", business.url);
        linkP.appendChild(link);
        textContainer.appendChild(linkP);

        infoContainer.appendChild(textContainer);

        card.appendChild(infoContainer);

        cards.appendChild(card);
    });
}

apiFetch();
