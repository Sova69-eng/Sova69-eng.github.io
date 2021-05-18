$(document).ready(function(){


  console.log("Девушка, вы так прекрасны, улыбнитесь)");
  $('.sliding-button').click( function() {
  let pro = prompt('Как у тебя настроение?');

  if (pro != "хорошо") {
    setTimeout(function(){
      alert("Подтвердите переход на другую страницу")
  window.location.href = 'file:///C:/Users/User/Desktop/docs/his2/his2.html';
}, 5 * 1000);
swal("Все девушки — ангелы","Твои глаза и улыбка просто обворожительны.");

  }
  else {
    setTimeout(function(){
      alert("Подтвердите переход на другую страницу")
  window.location.href = 'file:///C:/Users/User/Desktop/docs/his2/his2.html';
}, 5 * 1000);
    swal("Все девушки — ангелы","Твои глаза и улыбка просто обворожительны.");

};return swal();

});

});
