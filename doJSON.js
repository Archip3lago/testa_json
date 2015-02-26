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


});

