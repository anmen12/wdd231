import { recordVisit } from "./visit.mjs";
import areasOfInterest from "../data/areas-of-interest.mjs";

recordVisit();

//create cards
function createAreaCards(areas) {
    document.querySelector("#areas").innerHTML = "";
    areas.forEach(area => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");

        name.innerHTML = `${area.name}`;

        image.setAttribute("src", area.imageURL);
        image.setAttribute("alt", area.name);
        image.setAttribute("width", 300);
        image.setAttribute("width", 200);

        figure.appendChild(image);

        address.innerHTML = `${area.address}`;

        description.innerHTML = `${area.description}`;

        button.innerHTML = `Learn More`;

        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        document.querySelector("#areas").appendChild(card);
    });
}

//run function
createAreaCards(areasOfInterest.areas);
