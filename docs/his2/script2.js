$(document).ready(function(){

  console.log("Девушка, вы так прекрасны, улыбнитесь)");
  $('.sliding-button').click( function() {
  let pro = prompt('Твой ответ:');


  if (pro == "Капля") {
    let pro0 = swal("Ты умница! Ты красавица!", "...");

  }
  if (pro == "капля") {
    let pro1 = swal("Ты умница! Ты красавица!", "...");
  }
  else {
  let pro2 = swal("Ничего страшного все получится");
  }
    return swal();
});

});
