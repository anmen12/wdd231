import { apiFetch } from "./fetch.mjs";
import { createHomeTreeCards } from "./cards.mjs";

apiFetch("data/trees.json", createHomeTreeCards, "", -1);
