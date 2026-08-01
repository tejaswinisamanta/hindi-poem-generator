function showAnswer(response) {
  let joke = response.data.answer;
  new Typewriter("#joke", {
    strings: ["Generating a joke for you...please wait", `${joke}`],
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function showJoke() {
  let apiKey = "2c00a5b0tfa996f784d39a0b16ee6fo7";
  let context = "be polite and give short answers";
  let prompt =
    "Write a joke about science, mathematics or engineering fields without any other fluff. Do not repeat a joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Processing");
  axios.get(apiUrl).then(showAnswer);
}

let button = document.querySelector("button");
button.addEventListener("click", showJoke);
