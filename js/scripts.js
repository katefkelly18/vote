$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#able-voter").show();
  } else if (age === 18) {
    alert("You're just old enough!");
    $("#able-voter").show();
  } else {
    $("#under-18").show();
  }
});
