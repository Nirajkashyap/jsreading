// Code goes here

$( document ).ready(function() {
    console.log( "ready!" );


    /*
    $( "#staticbtn" ).click(function() {
      alert( "Handler for .click() called." );
      var html = "<button class='alert'>daynimic btn</button>";
      $("body").append(html);

    });
    */

    $( "#dybtn" ).on( "click", function() {

      alert("dybtn clicked")

    });

    $( "body" ).on( "click", "#dybtn", function() {

      alert("dybtn fn called by event delgation ")
    });

     $( "#staticbtn" ).on( "click", function() {
       alert( "Handler for .on( 'click'  called." );
       var html = "<button id='dybtn' class='alert'>daynaimic button</button>";
       $("body").append(html);

       $( "#dybtn" ).on( "click", function() {

        alert("dybtn clicked , fn called  which is binded later on")

       });

     });

    $( "#dybtn" ).on( "click", function() {

      alert("dybtn clicked")

    });





});
