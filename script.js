const quizDB = [
    {
        question: "Q1 : What is the full form of HTML?",
        a: "Hello to my land",
        b: "Hey Text Markup Language",
        c:"HyperText Markup Language",
        d: "hypertext Markup Language ",
        ansr: ans4
    },
    {
        question: "Q2 : What is the full form of css?",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheep",
        c:"Cascading Style Sheets",
        d: "Cascade Supper sheets  ",
        ansr: ans1
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Transfer Protocol",
        c:"Hey Transfer Protocol",
        d: "hyper Text Transfer Product",
        ansr: ans2
    },
    {
        question: "Q4: What is the full form of js?",
        a: "JavaScript",
        b: "javaSupper",
        c:"JustScript",
        d: "JustSupper",
        ansr: ans1
    }
];
// variable declearation..............
const question = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore")


let questionCount = 0;
let count = 0;
const questionLoad = () =>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
questionLoad();

const getCheackAnswer = () =>{
    let answer;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
    });
    return answer;
}

submit.addEventListener ('click', () =>{
    const cheackAnswer = getCheackAnswer();
    console.log(cheackAnswer);
    if(cheackAnswer === quizDB[questionCount].ansr){
        count++;
    }
    questionCount ++;

    if (questionCount < quizDB.length){
        questionLoad();
    }
    
    else{
        showScore.innerHTML = `<h3> your score ${count} / ${quizDB.length} ✌ </h3>
        <button class= "btn" onclick = "location.reload()">play agin</button> 
        `
        showScore.classList.remove('scoreArea')
    }
})