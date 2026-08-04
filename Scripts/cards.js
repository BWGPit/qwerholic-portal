import cardlist from '../Data/cardlist.json' with {type: "json"}
let cd = document.getElementById("carddiv")
let focusImg = document.getElementById("popup-img")
let focusText = document.getElementById("popup-text")

function focusCard(card) {
    let cID = card.srcElement.id.replace("cardimg-", "")
    document.getElementsByClassName("popup")[0].classList.remove("hidden")
    document.getElementsByClassName("dark-focus")[0].classList.remove("hidden")
    focusImg.src = `Data/CardImages/${cID}.png`
    let c = cardlist[cID]
    focusText.innerHTML = `<pre class="focus-card-text"><p class="focus-cardname">${c.name}</p>${c.effect}</pre>`
}

function unfocusCard() {
    document.getElementsByClassName("popup")[0].classList.add("hidden")
    document.getElementsByClassName("dark-focus")[0].classList.add("hidden")
}

let keys = Object.keys(cardlist).sort((a, b) => Number(a) - Number(b))

let innerhtml = ""
for (let card of keys) {
    let c = cardlist[card]
    innerhtml += `<div class="card-display"><img src="Data/CardImages/${c.card_id}.png" class="cardimg" id="cardimg-${c.card_id}" loading="lazy"><pre class="card-text"><p class="cardname">${c.name}</p>${c.effect}</pre></div>`
}
cd.innerHTML = innerhtml

let cardimg = document.getElementsByClassName("cardimg")
for (let c of cardimg) {
    c.addEventListener("click", focusCard)
}

document.getElementById("close-popup").addEventListener("click", unfocusCard)
document.getElementsByClassName("dark-focus")[0].addEventListener("click", unfocusCard)