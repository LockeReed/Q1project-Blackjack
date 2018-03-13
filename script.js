fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(function(apiData) {
    return apiData.json();
  })
  .then(function(cardDeck) {
    console.log(cardDeck)
  });