//this is a game about a boat ride

//3 outcomes
//keep score

// var  = confirm("want to do this");
// console.log("want to do this?", wantToDo);
var score = 10;
// for (int count = 0; count < 5; count++);

var likeToGo= confirm("Its a beautiful day to be on a boat!  Would you like to go with me?");
console.log("Its a beautiful day to be on a boat!  Would you like to go with me?", likeToGo);

// for (var count = 0; count < 3; count++){

if(likeToGo) {
  var activity=prompt("Awesome.  Choose where would you like to go:\n - Fishing \n - Beach \n - Reds Icehouse");
} else if(likeToGo === false){
  score = score -10;
  alert("That's too bad.  Enjoy your day watching cat videos!.\n\nYour Score is: "+score);
}

if(activity === "fishing"){
  var fishType=prompt("Fishing it is!  Who do you want to pick a fight with today:\n - Redfish \n - Wahoo");
  score = score +1;
} else if(activity === "beach"){
    var sand=confirm("I love the beach!  Did you bring your bathing suit?");
    score = score +5;
} else if(activity == "Reds"){
    var redsDrink=confirm("Shem Creek is a blast!  Are you sure you are up for a day of drinking?");
    score = score +1;
} else if(activity == false){
    alert("That's too bad.  Enjoy your day watching cat videos!.\n\nYour Score is: "+score);
}

if(fishType === "redfish"){
    score = score +1;
    alert("Great choice.  We will stay inshore and fish the oyster beds around Clouter Creek.\nYour Score is: "+score);
} else if(fishType === "wahoo"){
    var offShore=confirm("We have to go offshore and the waves are 3-4'.  Are you up for this?");
} else if (fishType === false){
    alert("That's too bad.  Enjoy your day watching cat videos!.\n\nYour Score is: "+score);
}

if(sand){
    alert("Sweet! Lets head to Capers Island for a relaxing day.\n\nYou get extra points for choosing the preferred trip.\n\nYour Score is: "+score);
} else if(sand === false){
    alert("Im sorry my friend - bathing suits are mandatory - go back to your cave.\n\nYour Score is: "+score);
}

if (redsDrink){
    score = score + 3;
    alert("Giddy-up! Put your drinking hat on!\n\nYou earned extra points for wanting to party!\nYour Score is:"+score);
} else if(redsDrink === false){
    alert("Oh that's right your wife called.  She wants her underwear back.\n\nYour Score is: "+score);
}

if (offShore){
    score = score -5;
    alert("Ok - put your lifejacket on - its going to be a bumpy ride!\n\nYou lost points because this trip is dangerous\nYour Score is:"+score);
  // score + 1;
} else if(offShore === false){
    alert("I agree.  Lets just cruise the harbor and enjoy the scenery today.\n\nYour Score is: "+score);
}

// if (score > 3){
//   alert("You are a rockstar!  Your score is: " + score);
// }else if (score < 3){
//   alert("Your score is: " + score);
// }


// var activity = prompt("Would you like to go *fishing, to the *beach, or *Reds Icehouse?");
// console.log('Would you like to go *fishing, to the *beach, or eat at *Reds Icehouse?', activity);
