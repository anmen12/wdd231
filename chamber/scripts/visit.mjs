export function recordVisit() {
    let lastVisit = parseInt(JSON.parse(localStorage.getItem("lastVisit")));
    let thisVisit = Date.now();

    const visits = document.querySelector("#last-visit");
    if(lastVisit >= 0) {
        let timeDifference = Math.floor((thisVisit - lastVisit) / 86400000);

        if(timeDifference >= 2) {
            visits.innerHTML = `You last visited <span class="bold">${timeDifference}</span> days ago.`;
        }
        else if(timeDifference >= 1) {
            visits.innerHTML = `You last visited <span class="bold">${timeDifference}</span> day ago.`;
        }
        else {
            visits.innerHTML = `Back so soon! Awesome!`;
        }
    }
    else {
        visits.innerHTML = `Welcome! Let us know if you have any questions.`;
    }

    localStorage.setItem("lastVisit", JSON.stringify(thisVisit));
}
