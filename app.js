const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //   CHECK ANSWERS
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //   SHOW RESULT ON PAGE
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  //   TO SCROLL TO THE TOP
  scrollTo(0, 0);

  //   SCORING ANIMATION
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// WINDOW OBJECT (GLOBAL OBJECT)

// alert("hello");

// alert(document.querySelector("form"));

// TO ANIMATE SCORE
// setInterval(() => {
//   alert(hello);
// }, 1000);
