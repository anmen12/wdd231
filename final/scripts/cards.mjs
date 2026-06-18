export function createTreeCards(trees, callback) {
    document.querySelector("#tree-info").innerHTML = "";
    trees.forEach((tree) => {
        let card = document.createElement("section");
        let commonName = document.createElement("h2");
        let scientificName = document.createElement("h3");
        let image = document.createElement("img");
        let height = document.createElement("p");
        let button = document.createElement("button");

        commonName.innerHTML = `<span class="label">Common Name: </span>${tree.commonName}`;

        scientificName.innerHTML = `<span class="label">Scientific Name: </span>${tree.scientificName}`;

        image.setAttribute("src", tree.imageURL);
        image.setAttribute("alt", name.commonName);
        image.setAttribute("width", 500);
        image.setAttribute("height", 500);
        image.setAttribute("loading", "lazy");

        height.innerHTML = `<span class="label">Height:</span> ${tree.minHeight} - ${tree.maxHeight} feet`;

        button.innerHTML = `Learn More`;

        button.addEventListener('click', () => {
            callback(tree);
        });

        card.appendChild(commonName);
        card.appendChild(scientificName);
        card.appendChild(image);
        card.appendChild(height);
        card.appendChild(button);

        document.querySelector("#tree-info").appendChild(card);
    });
}

export function createHomeTreeCards(trees) {
    trees.forEach((tree) => {
        let card = document.createElement("section");
        let commonName = document.createElement("h2");
        let scientificName = document.createElement("h3");
        let link = document.createElement("a");
        let image = document.createElement("img");

        commonName.innerHTML = `<span class="label">Common Name: </span>${tree.commonName}`;

        scientificName.innerHTML = `<span class="label">Scientific Name: </span>${tree.scientificName}`;

        link.setAttribute("href", "trees.html");

        image.setAttribute("src", tree.imageURL);
        image.setAttribute("alt", name.commonName);
        image.setAttribute("width", 500);
        image.setAttribute("height", 500);
        image.setAttribute("loading", "lazy");

        link.appendChild(image);

        card.appendChild(commonName);
        card.appendChild(scientificName);
        card.appendChild(link);

        document.querySelector("#tree-cards").appendChild(card);
    });
}
