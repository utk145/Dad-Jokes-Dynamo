const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");


// https://api-ninjas.com/api/dadjokes
const api__Key = "YOUR-API-KEY";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": api__Key,
  },
};


async function getJoke() {
  try {
    jokeElement.innerText = "Updating...";
    btnElement.disabled = true;
    btnElement.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    // console.log(data);
    btnElement.disabled = false;
    btnElement.innerText = "Tell me a joke Dad";

    jokeElement.innerText = data[0].joke;


  } catch (error) {
      jokeElement.innerText = "An error occured, try again later";
      btnElement.disabled = false;
      btnElement.innerText = "Tell me a joke Dad";
      console.log(error);
  }
}



btnElement.addEventListener("click", getJoke);