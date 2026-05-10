import { appetizers, entrees, sides, desserts, specials } from "./data.js"

function renderMenuItem(item) {
    const tagsHtml = item.tags
    .map(tag => `<p class="${tag.type}">${tag.value}</p>`)
    .join('');
    
    const suggestionsHtml = item.suggestions?.length
    ? `<details>
    <summary>Suggestions</summary>
    <ul>
    ${item.suggestions.map(s => `<li>${s}</li>`).join('')}
    </ul>
    </details>`
    : '';
    
  return `
    <li class="menu-item">
      <h3>${item.name}</h3>
      <div class="menu-tags">${tagsHtml}</div>
      ${suggestionsHtml}
      </li>
      `;
}

document.getElementById("appetizers-list").innerHTML = appetizers.map(item => renderMenuItem(item)).join('')
document.getElementById("entrees-list").innerHTML = entrees.map(item => renderMenuItem(item)).join('')
document.getElementById("sides-list").innerHTML = sides.map(item => renderMenuItem(item)).join('')
document.getElementById("desserts-list").innerHTML = desserts.map(item => renderMenuItem(item)).join('')
document.getElementById("specials-list").innerHTML = specials.map(item => renderMenuItem(item)).join('')

const generateRandomItem = (list, filters) => {
    let result = Math.floor(Math.random() * list.length)
    return renderMenuItem(list[result])
}

const popUp = document.getElementById("pop-up")
const popUpBG = document.getElementById("pop-up-bg")
const popUpHeader = document.getElementById("pop-up-header")
const popUpText = document.getElementById("pop-up-text")
const popUpClose = document.getElementById("pop-up-close")

const sidesDiv = document.getElementById("pop-up-sides")
const sidesHeader = document.getElementById("pop-up-sides-header")
const sidesText = document.getElementById("pop-up-sides-text")

const appsButton = document.getElementById("appetizers-button")
const entreesButton = document.getElementById("entrees-button")
const sidesButton = document.getElementById("sides-button")
const dessertsButton = document.getElementById("desserts-button")
const specialsButton = document.getElementById("specials-button")
const rerollButton = document.getElementById("reroll-button")

let recentCategory = ""

appsButton.addEventListener("click", () => {
    popUpHeader.innerHTML = `<h2>Appetizer:</h2>`
    popUpText.innerHTML = generateRandomItem(appetizers)
    popUp.classList.remove('hidden')
    recentCategory = appetizers
})

entreesButton.addEventListener("click", () => {
    popUpHeader.innerHTML = `<h2>Entree:</h2>`
    popUpText.innerHTML = generateRandomItem(entrees)
    popUp.classList.remove('hidden')
    recentCategory = entrees
})

dessertsButton.addEventListener("click", () => {
    popUpHeader.innerHTML = `<h2>Dessert:</h2>`
    popUpText.innerHTML = generateRandomItem(desserts)
    popUp.classList.remove('hidden')
    recentCategory = desserts
})

specialsButton.addEventListener("click", () => {
    popUpHeader.innerHTML = `<h2>Special:</h2>`
    popUpText.innerHTML = generateRandomItem(specials)
    popUp.classList.remove('hidden')
    recentCategory = specials
})

rerollButton.addEventListener("click", () => {
    popUpText.innerHTML = generateRandomItem(recentCategory)
})

sidesButton.addEventListener("click", () => {
    sidesHeader.innerHTML = `<h2>Side:</h2>` 
    sidesText.innerHTML = generateRandomItem(sides)
    sidesDiv.classList.remove('hidden')
    popUp.classList.remove('hidden')
})

function closePopUp() {
    sidesDiv.classList.add('hidden')
    popUp.classList.add('hidden')
}

document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") closePopUp()
})

popUpBG.addEventListener("click", () => {
    closePopUp()
})

popUpClose.addEventListener("click", () => {
    closePopUp()
})