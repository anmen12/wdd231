const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `<span style="color:#415039">Last Modification: ${document.lastModified}</span>`;