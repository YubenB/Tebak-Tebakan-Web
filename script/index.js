const generateQuestion = () => {
  let jokes = [
    {
      question: "Kenapa ikan selalu berada di air?",
      answer: "Karena kalau di darat namanya jalan-jalan.",
    },
    {
      question: "Kera apa yang bisa masuk angin?",
      answer: "Keramik pecah",
    },
    {
      question: "Kenapa bebek tidak bisa main komputer?",
      answer: "Karena takut di-click",
    },
    {
      question: "Kenapa kalender selalu terlihat muda?",
      answer: "Karena sering ganti tahun",
    },
    {
      question: "Kenapa roda sepeda tidak pernah sendirian?",
      answer: "Karena selalu berpasangan",
    },
    {
      question: "Siapa cewe paling cakep di bekasi",
      answer: "cika",
    },
  ];

  const randomNumber = Math.floor(Math.random() * jokes.length);

  return jokes[randomNumber];
};

let qna = generateQuestion();
const question = document.getElementById("question");
question.textContent = qna.question;

const regenerateQuestion = (event) => {
  event.preventDefault();
  let newQna = generateQuestion();
  do {
    newQna = generateQuestion();
  } while (newQna.question === qna.question);
  qna = newQna;
  question.textContent = qna.question;
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "";
  document.getElementById("yeay").style.display = "none";
};

const checkAnswer = (event) => {
  event.preventDefault();

  const userInput = document.getElementById("answear").value;
  if (userInput.toLowerCase() === qna.answer.toLowerCase()) {
    document.getElementById("feedback").textContent = "Jawaban Benar";
    document.getElementById("feedback").className = "correct-feedback";
    document.getElementById("yeay").style.display = "inline";
  } else {
    document.getElementById("feedback").textContent = "Jawaban Salah";
    document.getElementById("feedback").className = "incorrect-feedback";
  }
};

const handleForm = (event) => {
  event.preventDefault();
  checkAnswer(event);
};
