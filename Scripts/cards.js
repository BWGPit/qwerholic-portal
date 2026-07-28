import cardlist from '../Data/cardlist.json' with {type: "json"}
let cd = document.getElementById("carddiv")

let innerhtml = ""
for (let c of cardlist) {
    innerhtml += `<div class="card-display"><img src="Data/CardImages/${c.card_id}.png" class="cardimg"><pre class="card-text"><p class="cardname">${c.name}</p>${c.effect}</pre></div>`
}
cd.innerHTML = innerhtml
