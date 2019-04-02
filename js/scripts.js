$(document).ready(function() {
  $("#transportation-survey").submit(function(event) {
    var userResponses = [];
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
       userResponses.push(workTransportationMode);
       console.log("test1");
    });
    userResponses.forEach(function(response) {
    $('#work-responses').append(response + "<br>");
    });
    console.log("test2");
    event.preventDefault();
  });
});
