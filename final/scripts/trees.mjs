import { apiFetch } from "./fetch.mjs";
import { createTreeCards } from "./cards.mjs";
import { displayModalDialog } from "./modal.mjs";

apiFetch("data/trees.json", createTreeCards, displayModalDialog, -1);

const linkAll = document.querySelector("#all-feet");
const link020 = document.querySelector("#link020");
const link2040 = document.querySelector("#link2040");
const link4060 = document.querySelector("#link4060");
const link6080 = document.querySelector("#link6080");
const link80100 = document.querySelector("#link80100");

linkAll.addEventListener("click", () => {
    apiFetch("data/trees.json", createTreeCards, displayModalDialog, -1);
    linkAll.classList.add("selected");
    link020.classList.remove("selected");
    link2040.classList.remove("selected");
    link4060.classList.remove("selected");
    link6080.classList.remove("selected");
    link80100.classList.remove("selected");
});

link020.addEventListener("click", () => {
    apiFetch("data/trees.json", createTreeCards, displayModalDialog, 0, 20);
    linkAll.classList.remove("selected");
    link020.classList.add("selected");
    link2040.classList.remove("selected");
    link4060.classList.remove("selected");
    link6080.classList.remove("selected");
    link80100.classList.remove("selected");
});

link2040.addEventListener("click", () => {
    apiFetch("data/trees.json", createTreeCards, displayModalDialog, 20, 40);
    linkAll.classList.remove("selected");
    link020.classList.remove("selected");
    link2040.classList.add("selected");
    link4060.classList.remove("selected");
    link6080.classList.remove("selected");
    link80100.classList.remove("selected");
});

link4060.addEventListener("click", () => {
    apiFetch("data/trees.json", createTreeCards, displayModalDialog, 40, 60);
    linkAll.classList.remove("selected");
    link020.classList.remove("selected");
    link2040.classList.remove("selected");
    link4060.classList.add("selected");
    link6080.classList.remove("selected");
    link80100.classList.remove("selected");
});

link6080.addEventListener("click", () => {
    apiFetch("data/trees.json", createTreeCards, displayModalDialog, 60, 80);
    linkAll.classList.remove("selected");
    link020.classList.remove("selected");
    link2040.classList.remove("selected");
    link4060.classList.remove("selected");
    link6080.classList.add("selected");
    link80100.classList.remove("selected");
});

link80100.addEventListener("click", () => {
    apiFetch("data/trees.json", createTreeCards, displayModalDialog, 80, 100);
    linkAll.classList.remove("selected");
    link020.classList.remove("selected");
    link2040.classList.remove("selected");
    link4060.classList.remove("selected");
    link6080.classList.remove("selected");
    link80100.classList.add("selected");
});
