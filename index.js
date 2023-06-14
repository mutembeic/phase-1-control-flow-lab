function scuberGreetingForFeet(_distance){
  if (_distance <= 400) {
    return 'This one is on me!';
  } else if (_distance > 2500) {
    return 'No can do.';
  } else {
    return 'I will gladly take your thirty bucks.';
  }
}
  // Write your code  here!


function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return "No go."
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
  // Write your code here!
}