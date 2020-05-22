function getPagamenti(){
  $.ajax({
    url: "getPagamenti.php",
    success: function(data){
      console.log(data);
      i=1;
      for (var pagamento of data) {
        $("ul").append("<li>" + " pagamento n " + i + " " + pagamento + "</li>")
        i++
      }
    }
  })
}




function init(){
  getPagamenti();
}

$(document).ready(init);
