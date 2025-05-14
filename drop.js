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


// tab task script

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");
const tab5 = document.getElementById("tab5");
const tab6 = document.getElementById("tab6");
const head = document.getElementById("head");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const spn1 = document.getElementById("spn1");


tab1.addEventListener("click", () => {
    tab1.style.color = "white";
    tab1.style.backgroundColor = "#2280be";
    spn1.style.color = "white";
    head.innerHTML = "Drupal Experts";
    para1.innerText = "Drupal Developers Studio is a trustworthy and reliable Drupal agency that shapes your brand's digital experience through customized services. We hire the most enthusiastic and well-trained Drupal experts. We are a verified Drupal company and have vast experience in building sites on the Drupal. Moreover, we create great eCommerce and CRM websites using their industry knowledge and creativity. Our Drupal developers have experience building custom websites for startups, small businesses, and leading brands across different industries.";
    para2.innerHTML = "Our Drupal developers can create high-quality, full-scale Drupal websites that adhere to established industry standards. Furthermore, we use the latest Drupal technologies to create fully optimized, SEO-friendly, and responsive websites regardless of the complexity.";
    re1();
});

tab2.addEventListener("click", () => {
    tab2.style.color = "white";
    tab2.style.backgroundColor = "#2280be";
    spn2.style.color = "white";
    head.innerHTML = "End-to-End Solutions";
    para1.innerText = "At Drupal Developers Studio, we offer a range of Drupal development services that can help businesses meet the changing needs of their clients. We are an award-winning Drupal Development agency that works for excellence in everything we do, and we're confident that we can help you achieve success.";
    para2.innerHTML = "Our team of expert Drupal developers is dedicated to enhancing our clients' digital presence. Drupal is a platform used to create feature-rich, visually appealing websites and provide a cutting-edge user experience. This ensures that the website is highly visible and that customers can respond effectively.";
    re2();
});

tab3.addEventListener("click", () => {
    tab3.style.color = "white";
    tab3.style.backgroundColor = "#2280be";
    spn3.style.color = "white";
    head.innerHTML = "Flexible Hiring Models";
    para1.innerHTML = "<h4>Project-Based Hiring Model</h4>";
    para2.innerHTML = "Our Drupal developers can create high-quality, full-scale Drupal websites that adhere to established industry standards. Furthermore, we use the latest Drupal technologies to create fully optimized, SEO-friendly, and responsive websites regardless of the complexity.";
    re3();
});

tab4.addEventListener("click", () => {
    tab4.style.color = "white";
    tab4.style.backgroundColor = "#2280be";
    spn4.style.color = "white";
    head.innerHTML = "Competitive Pricing";
    para1.innerText = "Low cost allows businesses to improve their online market presence. Drupal CMS development is very cost-effective because many modules and well-designed themes are accessible for free.";
    para2.innerHTML = "We are well-known for delivering excellent Drupal solutions at a competitive cost than any other Drupal agency. We can help you get an enterprise or a basic Drupal web design at a reasonable price. We focus on the best pricing for our customers, which drives us to be more competitive, innovative, and efficient. Our Drupal development services are quite affordable, and we can create unique Drupal solutions to meet your specific needs and budget.";
    re4();
});

tab5.addEventListener("click", () => {
    tab5.style.color = "white";
    tab5.style.backgroundColor = "#2280be";
    spn5.style.color = "white";
    head.innerHTML = "On-Going Support";
    para1.innerText = "We can help you with your Drupal website, regardless of your version. We have experience with design, development, security, and updates, and can help you achieve your business goals without worrying about Drupal support services.";
    para2.innerHTML = "Our flexible Ongoing Support Services are customized to your requirements. Our Drupal developers will always be ready to help you with problems and offer the most satisfactory answers. Contact one of our specialists to learn more about what we can do for you.";
    re5();
});

tab6.addEventListener("click", () => {
    tab6.style.color = "white";
    tab6.style.backgroundColor = "#2280be";
    spn6.style.color = "white";
    head.innerHTML = "Drupal Contributors";
    para1.innerText = "Drupal Developers Studio has been a part of the Drupal community for over a decade. We have been supporting the Drupal projects in multiple ways from the beginning.";
    para2.innerHTML = "We've created over 60 Drupal themes and modules, as well as helping other developers troubleshoot any bugs and keep their websites running smoothly. Our team has extensive experience with Drupal and is well-equipped to build complex, scalable websites using its open-source potential.";
    re6();
});

let re1 = () => {
    tab2.style.color = "black";
    tab2.style.backgroundColor = "white";
    spn2.style.color = "#2280be";

    tab3.style.color = "black";
    tab3.style.backgroundColor = "white";
    spn3.style.color = "#2280be";

    tab4.style.color = "black";
    tab4.style.backgroundColor = "white";
    spn4.style.color = "#2280be";

    tab5.style.color = "black";
    tab5.style.backgroundColor = "white";
    spn5.style.color = "#2280be";

    tab6.style.color = "black";
    tab6.style.backgroundColor = "white";
    spn6.style.color = "#2280be";
}

let re2 = () => {
    tab1.style.color = "black";
    tab1.style.backgroundColor = "white";
    spn1.style.color = "#2280be";

    tab3.style.color = "black";
    tab3.style.backgroundColor = "white";
    spn3.style.color = "#2280be";

    tab4.style.color = "black";
    tab4.style.backgroundColor = "white";
    spn4.style.color = "#2280be";

    tab5.style.color = "black";
    tab5.style.backgroundColor = "white";
    spn5.style.color = "#2280be";

    tab6.style.color = "black";
    tab6.style.backgroundColor = "white";
    spn6.style.color = "#2280be";
}

let re3 = () => {
    tab1.style.color = "black";
    tab1.style.backgroundColor = "white";
    spn1.style.color = "#2280be";

    tab2.style.color = "black";
    tab2.style.backgroundColor = "white";
    spn2.style.color = "#2280be";

    tab4.style.color = "black";
    tab4.style.backgroundColor = "white";
    spn4.style.color = "#2280be";

    tab5.style.color = "black";
    tab5.style.backgroundColor = "white";
    spn5.style.color = "#2280be";

    tab6.style.color = "black";
    tab6.style.backgroundColor = "white";
    spn6.style.color = "#2280be";
}

let re4 = () => {
    tab1.style.color = "black";
    tab1.style.backgroundColor = "white";
    spn1.style.color = "#2280be";

    tab2.style.color = "black";
    tab2.style.backgroundColor = "white";
    spn2.style.color = "#2280be";

    tab3.style.color = "black";
    tab3.style.backgroundColor = "white";
    spn3.style.color = "#2280be";

    tab5.style.color = "black";
    tab5.style.backgroundColor = "white";
    spn5.style.color = "#2280be";

    tab6.style.color = "black";
    tab6.style.backgroundColor = "white";
    spn6.style.color = "#2280be";
}

let re5 = () => {
    tab1.style.color = "black";
    tab1.style.backgroundColor = "white";
    spn1.style.color = "#2280be";

    tab2.style.color = "black";
    tab2.style.backgroundColor = "white";
    spn2.style.color = "#2280be";

    tab3.style.color = "black";
    tab3.style.backgroundColor = "white";
    spn3.style.color = "#2280be";

    tab4.style.color = "black";
    tab4.style.backgroundColor = "white";
    spn4.style.color = "#2280be";

    tab6.style.color = "black";
    tab6.style.backgroundColor = "white";
    spn6.style.color = "#2280be";
}

let re6 = () => {
    tab1.style.color = "black";
    tab1.style.backgroundColor = "white";
    spn1.style.color = "#2280be";

    tab2.style.color = "black";
    tab2.style.backgroundColor = "white";
    spn2.style.color = "#2280be";

    tab3.style.color = "black";
    tab3.style.backgroundColor = "white";
    spn3.style.color = "#2280be";

    tab4.style.color = "black";
    tab4.style.backgroundColor = "white";
    spn4.style.color = "#2280be";

    tab5.style.color = "black";
    tab5.style.backgroundColor = "white";
    spn5.style.color = "#2280be";
}

    const tabs = document.querySelectorAll('.tab-container');
    const triangle = document.getElementById('tri');
    const result = document.querySelector('.result');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            
            tabs.forEach(t => t.classList.remove('bg-[#2280be]', 'text-white'));
            tabs.forEach(t => {
                const icon = t.querySelector('i');
                icon && icon.classList.remove('text-white');
                icon && icon.classList.add('text-blue-500');
            });

            this.classList.add('bg-[#2280be]', 'text-white');
            const icon = this.querySelector('i');
            icon && icon.classList.add('text-white');
            icon && icon.classList.remove('text-blue-500');

            const tabRect = this.getBoundingClientRect();
            const resultRect = result.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2;
            const offsetLeft = tabCenter - resultRect.left;

            triangle.style.position = 'absolute';
            triangle.style.left = `${offsetLeft - 10}px`; 
        });
    });
