function scuberGreetingForFeet(ride) {
  // Write your code here!

  if (ride <= 400) {
    return scuberGreetingForFeet = "This one is on me!";
  } else if (ride > 2500) {
    return scuberGreetingForFeet = "No can do.";
  } else if (2000 < ride) {
    return scuberGreetingForFeet = "I will gladly take your thirty bucks.";
  } 



}

function ternaryCheckCity(city) {
  // Write your code here!
  let result;
  result = (city=='NYC') ? ("Ok, sounds good.") : ("No go.") ;
 return result;

}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  var charm;

  
  switch(tip) {
    case "generous":
      charm = "Thank you so much.";
      break;
    case "not as generous":
      charm = "Thank you.";
      break;
    case "thanks for everything":
      charm = "Bye.";
      break;
      
    default:
      charm = "I have never heard of that fruit...";
  }
return charm;
}

