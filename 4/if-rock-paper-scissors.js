var Shoot = function (userOption) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var cpu = getRandomInt(1, 4);
  if (userOption === cpu) {
    console.log(`Quedaste en empate con el cpu :(`);
  }

  if (userOption != cpu) {
    if (userOption === 1 && cpu === 3) {
      userOption = "Piedra";
      console.log(`Felicidades!, le ganaste al cpu! con ${userOption}`);
    }
    if (userOption === 1 && cpu === 2) {
      userOption = "Piedra";
      console.log(`Perdiste con ${userOption}`);
    }
    if (userOption === 2 && cpu === 3) {
      userOption = "Papel";
      console.log(`Perdiste con ${userOption}`);
    }
    if (userOption === 2 && cpu === 1) {
      userOption = "Papel";
      console.log(`Felicidades!, le ganaste al cpu! con ${userOption}`);
    }
    if (userOption === 3 && cpu === 1) {
      userOption = "Tijeras";
      console.log(`Perdiste con ${userOption}`);
    }
    if (userOption === 3 && cpu === 2) {
      userOption = "Tijeras";
      console.log(`Felicidades!, le ganaste al cpu! con ${userOption}`);
    }
  }
};
