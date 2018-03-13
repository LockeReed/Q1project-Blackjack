//var url = "https://deckofcardsapi.com/api/deck/";
//var deckID = " ";




/*fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(function(apiData) {
    return apiData.json();
  })
  .then(function(cardDeck) {
    //console.log(cardDeck)
  });*/

fetch("https://deckofcardsapi.com/api/deck/z2wsc5zwfwuo/draw/?count=2")
  .then(function(apiData) {
    return apiData.json();
  })
  .then(function(draw) {
    console.log(draw.cards[0].image);
  });