


const quizdata = [
  {
    question: "What is the scientific name of a butterfly?",
    a: "Apis",
    b: "Coleoptera",
    c: "Formicidae",
    d: "Rhopalocera",
    correct: "c",
  },
  {
    question: "How hot is the surface of the sun?",
    a: "1,233 K",
    b: "5,778 K",
    c: "12,130 K",
    d: "101,300 K",
    correct: "a",
  },
  {
    question: "Who are the actors in The Internship?",
    a: "Ben Stiller, Jonah Hill",
    b: "Courteney Cox, Matt LeBlanc",
    c: "Kaley Cuoco, Jim Parsons",
    d: "Vince Vaughn, Owen Wilson",
    correct: "c",
  },
  {
    question: "What is the capital of Spain?",
    a: "Berlin",
    b: "Buenos Aires",
    c: "Madrid",
    d: "San Juan",
    correct: "b",
  },
  {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    a: "18.8889",
    b: "20",
    c: "21.1111",
    d: "158",
    correct: "b",
  },
  {
    question: "How far is the moon from Earth?",
    a: "7,918 miles (12,742 km)",
    b: "86,881 miles (139,822 km)",
    c: "238,400 miles (384,400 km)",
    d: "35,980,000 miles (57,910,000 km)",
    correct: "b",
  },
  {
    question: "How tall is Mount Everest?",
    a:"6,683 ft (2,037 m)",
    b: "7,918 ft (2,413 m)",
    c: "19,341 ft (5,895 m)",
    d: "29,029 ft (8,847 m)",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const ansEls = document.querySelectorAll(".answer");


const questionEl1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");


let currentquiz = 0;
let score = 0;


loadquiz();

function loadquiz() {
   deselectanswers() 
    const currentquizdata = quizdata[currentquiz]
    questionEl1.innerHTML = currentquizdata.question;
    a_text.innerHTML = currentquizdata.a;
    b_text.innerHTML = currentquizdata.b;
    c_text.innerHTML = currentquizdata.c;
     d_text.innerHTML = currentquizdata.d;
}

function deselectanswers() {
   
    ansEls.forEach(ansEls => { ansEls.checked = false }
        
    )
};


function getselected() {
    let answer

    ansEls.forEach(ansEl => {
        if (ansEl.checked) {
            answer=ansEl.id
        }

      
    }
    )
  return answer;
    
}




let timer = setInterval(function () {
    
  const answer = getselected();
  if (answer) {
    if (answer === quizdata[currentquiz].correct) {
      score++;
    }
    currentquiz++;

    if (currentquiz < quizdata.length) {
      loadquiz();
    } else {
      quiz.innerHTML = `
            <h1 style="text-align:center">you answered ${score}/${quizdata.length} questions correctly</h1>
            
            <button onclick="location.reload()">Reload</button>`;
      let s = ` ${score}`;
      let o = `${quizdata.length} `;
      let f = o - s;

      var xValues = ["score", "not scored"];
      var yValues = [s, f];
      var barColors = ["#00ff00", "#ff0000"];

      new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [
            {
              backgroundColor: barColors,
              data: yValues,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "quiz performence",
          },
        },
      });
    }
  }
},1000);
    




submitbtn.addEventListener("click", function () {
    const answer = getselected()
    if (answer) {
        if (answer === quizdata[currentquiz].correct) {
            score++
        }
        currentquiz++

        if (currentquiz < quizdata.length) {
           
          loadquiz()

        }
        else {
            quiz.innerHTML = `
            <h1 style="text-align:center">you answered ${score}/${quizdata.length} questions correctly</h1>
            
            <button onclick="location.reload()">Reload</button>`

            let s = ` ${score}`;
            let o = `${quizdata.length} `;
            let f = (o - s);

            var xValues = ["score", "not scored"];
            var yValues = [s, f];
            var barColors = ["#00ff00", "#ff0000",];

            new Chart("myChart", {
              type: "pie",
              data: {
                labels: xValues,
                datasets: [
                  {
                    backgroundColor: barColors,
                    data: yValues,
                  },
                ],
              },
              options: {
                title: {
                  display: true,
                  text: "quiz performence",
                },
              },
            });

        }
    }

})

