import { world } from './index.js';

const form = document.getElementById('inputForm') as HTMLFormElement;
const userInput = document.getElementById('userInput') as HTMLInputElement;
const outputArea = document.getElementById('outputArea');

let { state, output } = world({ state: {}, input: "Jerry" });

if(outputArea) {
  outputArea.textContent = output;
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInputValue = userInput?.value?.trim();
  const { state: newState, output: newOutput } = world({ state, input: userInputValue });
  state = newState;
  output = newOutput;
  if(outputArea && userInput) {
    outputArea.textContent = output;
    userInput.value = '';
  }
});
