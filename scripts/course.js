const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//select buttons
const allLink = document.querySelector("#all");
const cseLink = document.querySelector("#cse");
const wddLink = document.querySelector("#wdd");

//create event listeners for buttons
allLink.addEventListener("click", () => {
    createCourseCards(courses);
    allLink.classList.add("selected");
    cseLink.classList.remove("selected");
    wddLink.classList.remove("selected");
});

cseLink.addEventListener("click", () => {
    createCourseCards(courses.filter(course => course.subject == "CSE"));
    allLink.classList.remove("selected");
    cseLink.classList.add("selected");
    wddLink.classList.remove("selected");
});

wddLink.addEventListener("click", () => {
    createCourseCards(courses.filter(course => course.subject == "WDD"));
    allLink.classList.remove("selected");
    cseLink.classList.remove("selected");
    wddLink.classList.add("selected");
});

//create cards
function createCourseCards(courses) {
    document.querySelector("#card-grid").innerHTML = "";
    courses.forEach(course => {
        let card = document.createElement("section");
        let name = document.createElement("h3");

        if(course.completed) {
            name.innerHTML = `&#9745 ${course.subject} ${course.number}`;
            card.classList.add("completed");
        }
        else {
            name.innerHTML = `${course.subject} ${course.number}`;
        }

        card.appendChild(name);

        document.querySelector("#card-grid").appendChild(card);
    });
    adjustCredits(courses)
}

const credits = document.querySelector("#credits");

//credits
function adjustCredits(courses) {
    let total = 0;
    courses.forEach(course => {
        total += course.credits;
    });
    document.querySelector("#credits").innerHTML = `The total credits for the courses listed above is <span class="credit-value">${total}</span>`;
}

//run function
createCourseCards(courses);
