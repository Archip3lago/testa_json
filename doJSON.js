$(document).ready(function() {

    $.getJSON("dator.php", function(data) {
        console.log("Workerino");
        console.log(data.saker);

        for (i = 0; i <= data.saker.length; i++) {
            $.each(data.saker[i], function(index, val) {
                $("body").append(index + " : ");
                $("body").append(val);
                $("body").append("<br>");
            });
        }
    });
    
    $('.knapp').click(function(){
       var stuff = $('.stuff').val();
       $.getJSON("dator.php",{namn: stuff}, function(data){
          $('ul').append("<li"+data.saker[0].namn+"</li>"); 
       });
    });
    
    $('form').submit(function(event){
       event.preventDefault();
       console.log('haha');
    });
    
});

