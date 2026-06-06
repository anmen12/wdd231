const memberships = [
    {
        level: 0,
        name: "Non-Profit",
        class: "np",
        cost: 0,
        benefits: [
            "Listings"
        ]
    },
    {
        level: 1,
        name: "Bronze",
        class: "bronze",
        cost: 1000,
        benefits: [
            "Listings", "Advertizing Privileges"
        ]
    },
    {
        level: 2,
        name: "Silver",
        class: "silver",
        cost: 10000,
        benefits: [
            "Listings", "Advertizing Privileges", "Spotlight"
        ]
    },
    {
        level: 3,
        name: "Gold",
        class: "gold",
        cost: 20000,
        benefits: [
            "Listings", "Advertizing Privileges", "Spotlight", "Special Training"
        ]
    }
]

//create cards
function createMembershipCards(memberships) {
    document.querySelector("#memberships").innerHTML = "";
    memberships.forEach(membership => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let button = document.createElement("button");

        name.innerHTML = `${membership.name} Membership`;

        button.innerHTML = `Learn More`;

        button.addEventListener('click', () => {
            displayModalDialog(membership);
        });

        card.appendChild(name);
        card.appendChild(button);

        card.classList.add(`${membership.class}`);

        document.querySelector("#memberships").appendChild(card);
    });
}

//run function
createMembershipCards(memberships);

//modal dialog
const modal = document.querySelector("#membership-details");

function displayModalDialog(membership) {
    modal.innerHTML = "";

    modal.innerHTML = `
        <button id="closeModal">&#120;</button>
        <h2>${membership.name} Membership</h2>
        <p><strong>Technologies</strong>: ${membership.benefits.join(", ")}</p>
    `;

    closeModal.addEventListener("click", () => {
        modal.close();
    });

    modal.showModal();
}
