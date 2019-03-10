  function dwarfRollCall(dwarves) {
    const hutOne = [];

    for (let i = 0; i < dwarves.length; i++) {
    hutOne.push(`${i + 1}. ${dwarves[i]}`);
	}

    return `${hutOne.join(' ')} `
}

  function summonCaptainPlanet(planeteerCalls){
  const united = [];

  for (let i = 0; i < planeteerCalls.length; i++) {
    united.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return united
}

  function longPlaneteerCalls(words) {

  for (let i = 0; i < words.length; i++) {
  if (words[i].length <= 4) {
  return false
  } else if (words[i].length > 4) {
  return true
      }
    }
  }


  function findTheCheese (foods) {
    var cheeses = ["cheddar", "gouda", "camembert"];

    for (let i = 0; i < foods.length; i++) {
    if (foods[i] === cheeses[i]) {
      return foods[i];
    } else {
      return 'no cheese!'
    }
  }
}
