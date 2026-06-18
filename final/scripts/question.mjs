export function recordQuestion(question) {
    localStorage.setItem("lastQuestion", JSON.stringify(question));
}

export function displayQuestion() {
    let lastQuestion = JSON.parse(localStorage.getItem("lastQuestion"));

    const questions = document.querySelector("#last-question");
    if(lastQuestion != null) {
        questions.innerHTML = `You last asked: ${lastQuestion}`;
    }
    else {
        questions.innerHTML = `Let us know if you have any questions!`;
    }
}
