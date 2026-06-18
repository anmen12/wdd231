export function displayModalDialog(tree) {
    const modal = document.querySelector("#tree-details");

    modal.innerHTML = "";

    modal.innerHTML = `
        <button id="closeModal">&#10006;</button>
        <h2><span class="label">Common Name: </span>${tree.commonName}</h2>
        <h3><span class="label">Scientific Name: </span>${tree.scientificName}</h3>
        <img src="${tree.imageURL}" alt="${tree.commonName}" width="500" height="500" loading="lazy">
        <p><span class="label">Type: </span>${tree.type.join(", ")}</p>
        <p><span class="label">Family: </span>${tree.family}</p>
        <p><span class="label">Height: </span>${tree.minHeight} - ${tree.maxHeight} feet</p>
    `;

    closeModal.addEventListener("click", () => {
        modal.close();
    });

    modal.showModal();
}
