function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}.">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}.">
  </li>
  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
  <ul>
  ${games}
  </ul>
  </div>
  `;
}

document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo.svg" alt="Logo da NLW Copa.">
</header>

<main id="cards">
  ${createCard('21/11', 'Segunda', 
  createGame('brazil', '8:00', 'cameroon') + 
  createGame('hungary', '13:00', 'argentina') + 
  createGame('colombia', '20:00', 'japan')  
)}
 ${createCard('24/11', 'Quinta', 
  createGame('switzerland', '7:00', 'cameroon') +
  createGame('portugal', '13:00', 'ghana') +
  createGame('brazil', '16:00', 'serbia') 
)}
  ${createCard('28/11', 'Segunda', 
  createGame('south-korea', '10:00', 'ghana') +
  createGame('brazil', '13:00', 'switzerland') +
  createGame('portugal', '16:00', 'uruguay')  
)}
</main>
`;
