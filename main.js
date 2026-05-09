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
// document.getElementById("desserts-list").innerHTML = desserts.map(item => renderMenuItem(item)).join('')
document.getElementById("specials-list").innerHTML = specials.map(item => renderMenuItem(item)).join('')

const generateRandomItem = (list, filters) => {
    let result = Math.floor(Math.random() * list.length)
    return renderMenuItem(list[result])
    // console.info(result)
    // console.info(list[result].name)
    // if (list[result].suggestions) return list[result].name + `\nSuggestions:\n` + list[result].suggestions
    // return list[result].name
}

const popUp = document.getElementById("pop-up")
const popUpBG = document.getElementById("pop-up-bg")
const popUpText = document.getElementById("pop-up-text")
const popUpClose = document.getElementById("pop-up-close")

const appsButton = document.querySelector("#appetizers-button")
const entreesButton = document.querySelector("#entrees-button")
const sidesButton = document.querySelector("#sides-button")
// const dessertsButton = document.querySelector("#desserts-button")
const specialsButton = document.querySelector("#specials-button")

appsButton.addEventListener("click", () => {
    popUpText.innerHTML = generateRandomItem(appetizers)
    popUp.classList.remove('hidden')
})

entreesButton.addEventListener("click", () => {
    popUpText.innerHTML = generateRandomItem(entrees)
    popUp.classList.remove('hidden')
})

sidesButton.addEventListener("click", () => {
    popUpText.innerHTML = generateRandomItem(sides)
    popUp.classList.remove('hidden')
})

// dessertsButton.addEventListener("click", () => {
//     console.info("Generating dessert...")
//     alert(generateRandomItem(desserts))
// })

specialsButton.addEventListener("click", () => {
    popUpText.innerHTML = generateRandomItem(specials)
    popUp.classList.remove('hidden')
})

popUpBG.addEventListener("click", () => {
    popUp.classList.add('hidden')
})

popUpClose.addEventListener("click", () => {
    popUp.classList.add('hidden')
})