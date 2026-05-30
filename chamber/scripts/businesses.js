const cards = document.querySelector("#businesses");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

gridButton.addEventListener("click", () => {
    gridButton.classList.add("selected");
    listButton.classList.remove("selected");
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    listButton.classList.add("selected");
    gridButton.classList.remove("selected");
    cards.classList.add("list");
    cards.classList.remove("grid");
});

async function apiFetch() {
    try {
        const response = await fetch("data/members.json");
        if(response.ok) {
            const data = await response.json();
            //console.log(data);
            displayBusinesses(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

const displayBusinesses = (businesses) => {
    businesses.businesses.forEach((business) => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let linkP = document.createElement("p");
        let link = document.createElement("a");

        image.setAttribute("src", business.image);
        image.setAttribute("alt", business.name);
        image.setAttribute("width", 100);
        image.setAttribute("height", 100);

        name.innerHTML = `${business.name}`;

        address.innerHTML = `${business.address}`;

        phone.innerHTML = `${business.phone}`;

        link.innerHTML = `${business.url}`;
        link.setAttribute("href", business.url);

        linkP.appendChild(link);

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(linkP);

        cards.appendChild(card);
    });
}

apiFetch();
