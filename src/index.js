function displayPoem(event) {
  

  new Typewriter("#joke", {
    strings: ["Generating a poem for you...please wait", `${joke}`],
    autoStart: true,
    cursor: "",
    delay: 1,
  });




  
}
function generatePoem() {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2c00a5b0tfa996f784d39a0b16ee6fo7";
  let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow user instructions.";
  let prompt =
    `User instructions: Generate a Hindi poem about ${instructionsInput.value}. Do not repeat a poem.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem)
