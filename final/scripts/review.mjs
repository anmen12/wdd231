import { recordQuestion } from "./question.mjs";

const myInfo = new URLSearchParams(window.location.search);

document.querySelector("#review").innerHTML = `
<p>Question asked by <strong>${myInfo.get("fname")} ${myInfo.get("lname")}</strong></p>
<p>Email address is <strong>${myInfo.get("email")}</strong></p>
<p>Phone number is <strong>${myInfo.get("phone")}</strong></p>
<p>Question asked: <strong>${myInfo.get("question")}</strong></p>
`;

recordQuestion(myInfo.get("question"));
