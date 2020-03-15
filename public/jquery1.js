  $(document).ready(function(){
    $("p").click(function(){
      $("#pfirst").hide();
    });
  });

  $(document).ready(function(){
    $("h3").click(function(){
      $("#pfirst").show();
    });
  });
  
  $(document).ready(function(){
    $("#btnJq").click(function(){
     $("h3").css("color", "red");
    });
  });
  
  $(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
});

$(document).ready(() => {
  $("#btn2").click(function(){
    $("h4").append("#input1")
  });
});
