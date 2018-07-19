function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  return console.log(string.toUpperCase())
}

function logWhisper(string){
  return console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = "YES INDEED!";
  var lowercase = "I can't hear you!";
<<<<<<< HEAD
  var theyloveme = "I love you, Grandma.";
  var ilovethemtoo = "I love you, too.";
=======
  var theyloveme = "I love you, Grandma!";
  var ilovethemtoo = "I love you, too!";
>>>>>>> 333675876464f946489faf9c3d2feb7c70c72fb0

  if(string.toUpperCase() === string){
    return uppercase;
  }

  if(string.toLowerCase() === string){
    return lowercase;
  }

  if(string === theyloveme){
    return ilovethemtoo;
  }

}
