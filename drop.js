const q1 = document.getElementById("question1");
const img1 = document.getElementById("img1");

(q1 || img1).addEventListener("click", () => {
    drop1();
});

const q2 = document.getElementById("question2");
const img2 = document.getElementById("img2");

(q2 || img2).addEventListener("click", () => {
    drop2();
});

const q3 = document.getElementById("question3");
const img3 = document.getElementById("img3");

(q3 || img3).addEventListener("click", () => {
    drop3();
});

const q4 = document.getElementById("question4");
const img4 = document.getElementById("img4");

(q4 || img4).addEventListener("click", () => {
    drop4();
});

const q5 = document.getElementById("question5");
const img5 = document.getElementById("img5");

(q5 || img5).addEventListener("click", () => {
    drop5();
});

const q6 = document.getElementById("question6");
const img6 = document.getElementById("img6");

(q6 || img6).addEventListener("click", () => {
    drop6();
});


function drop1(){
    const ans = document.getElementById("answer1");
    const question = document.getElementById("question1");
    const img = document.getElementById("img1");

    if(ans.style.display === "block"){
        ans.style.display = "none";
        question.classList.remove("active");
        img.src = "./src/img/bottom.png";
    } else {
        ans.style.display = "block";
        question.classList.toggle("active");
        img.src = "./src/img/up.png";
    }
}


function drop2(){
    const ans = document.getElementById("answer2");
    const question = document.getElementById("question2");
    const img = document.getElementById("img2");

    if(ans.style.display === "block"){
        ans.style.display = "none";
        question.classList.remove("active");
        img.src = "./src/img/bottom.png";
    } else {
        ans.style.display = "block";
        question.classList.toggle("active");
        img.src = "./src/img/up.png";
    }
}

function drop3(){
    const ans = document.getElementById("answer3");
    const question = document.getElementById("question3");
    const img = document.getElementById("img3");

    if(ans.style.display === "block"){
        ans.style.display = "none";
        question.classList.remove("active");
        img.src = "./src/img/bottom.png";
    } else {
        ans.style.display = "block";
        question.classList.toggle("active");
        img.src = "./src/img/up.png";
    }
}

function drop4(){
    const ans = document.getElementById("answer4");
    const question = document.getElementById("question4");
    const img = document.getElementById("img4");

    if(ans.style.display === "block"){
        ans.style.display = "none";
        question.classList.remove("active");
        img.src = "./src/img/bottom.png";
    } else {
        ans.style.display = "block";
        question.classList.toggle("active");
        img.src = "./src/img/up.png";
    }
}

function drop5(){
    const ans = document.getElementById("answer5");
    const question = document.getElementById("question5");
    const img = document.getElementById("img5");

    if(ans.style.display === "block"){
        ans.style.display = "none";
        question.classList.remove("active");
        img.src = "./src/img/bottom.png";
    } else {
        ans.style.display = "block";
        question.classList.toggle("active");
        img.src = "./src/img/up.png";
    }
}

function drop6(){
    const ans = document.getElementById("answer6");
    const question = document.getElementById("question6");
    const img = document.getElementById("img6");

    if(ans.style.display === "block"){
        ans.style.display = "none";
        question.classList.remove("active");
        img.src = "./src/img/bottom.png";
    } else {
        ans.style.display = "block";
        question.classList.toggle("active");
        img.src = "./src/img/up.png";
    }
}

function openAll(){
    const all = document.getElementById("expand");
    if(all.textContent === "EXPAND ALL"){
        all.textContent = "CLOSE ALL";
    } else {
        all.textContent = "EXPAND ALL";
    }

    drop1();
    drop2();
    drop3();
    drop4();
    drop5();
    drop6();
}