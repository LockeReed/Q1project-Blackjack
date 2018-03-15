var url = "https://deckofcardsapi.com/api/deck/";
var deckID = "";

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
   .then(function(apiData) {
      return apiData.json();
   })
   .then(function(cardDeck) {
      console.log(cardDeck)
      var responce = cardDeck
      if (responce.success === true) {
         deckID = responce.deck_id;
      }
      console.log(deckID)
   });



fetch("https://deckofcardsapi.com/api/deck/3fvydrrj3wh9/draw/?count= 2")
   .then(function(apiData) {
      return apiData.json();
   })
   .then(function(draw) {
      console.log(draw);
   })
