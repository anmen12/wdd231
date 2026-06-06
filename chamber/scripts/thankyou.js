const getString = window.location.search;
const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector("#results").innerHTML = `
<p>Application made by <span class="bold">${myInfo.get("fname")} ${myInfo.get("lname")}</span>, <span class="bold">${myInfo.get("title")}</span> of <span class="bold">${myInfo.get("company")}</span> on <span class="bold">${myInfo.get("timestamp")}</span></p>
<p>Phone number is <span class="bold">${myInfo.get("phone")}</span></p>
<p>Email address is <span class="bold">${myInfo.get("email")}</span></p>
<p>Application is for <span class="bold">${myInfo.get("membership")} membership</span> for the company: <span class="bold">${myInfo.get("company")}</span></p>
`;
