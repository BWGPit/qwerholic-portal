import cardlist from '../Data/cardlist.json' with {type: "json"}
let cd = document.getElementById("carddiv")

console.log("TEST")

let innerhtml = ""
for (let c of cardlist) {
    innerhtml += `<div class="card-display"><img src="../Data/CardImages/${c.card_id}.png" class="cardimg"><pre class="card-text">${c.name}\n${c.effect}</pre></div>`
}
cd.innerHTML = innerhtml
