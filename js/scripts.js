$(document).ready(function() {
  $("#stress-test").submit(function(event) {
      event.preventDefault();
      var negativeStressCounter = 0;
      var helpingMethodsCounter = 0;
      var copingMethodsCounter = 0;
    $("input:checkbox[name=negativeStress]:checked").each(function() {
      var helpNegativeStress = $(this).val();
      if(helpNegativeStress === "sleep") {
        negativeStressCounter +=1;
      } else if(helpNegativeStress === "overwhelmed") {
        negativeStressCounter +=1;
      } else if(helpNegativeStress === "baby") {
        negativeStressCounter +=1;
      }
    });
    $("input:checkbox[name=healthSymptoms]:checked").each(function() {
      console.log("test")
      var helpHealthSymptoms = $(this).val();
      console.log("test1")
      if(helpHealthSymptoms === "highBloodPressure") {
        helpingMethodsCounter +=1;
      } else if(helpHealthSymptoms === "paranoia") {
        helpingMethodsCounter +=1;
      } else if(helpHealthSymptoms === "anxiety") {
        helpingMethodsCounter +=1;
      } else if(helpHealthSymptoms === "sleepApnea") {
        helpingMethodsCounter +=1;
      }
      console.log("test2")
    });
    $("input:checkbox[name=copingMethods]:checked").each(function() {
      var helpCopingMethods = $(this).val();
      if(helpCopingMethods === "meditate") {
        copingMethodsCounter +=1;
      } else if(helpCopingMethods === "timeManagement") {
        copingMethodsCounter +=1;
      } else if(helpCopingMethods === "petDog") {
        copingMethodsCounter +=1;
      } else if(helpCopingMethods === "stressBall") {
        copingMethodsCounter +=1;
      }
    });

    if(copingMethodsCounter > (negativeStressCounter + helpingMethodsCounter)) {
      $("#help-response").append("You're doing a great job managing your stress!");
    } else if (copingMethodsCounter === (negativeStressCounter + helpingMethodsCounter)) {
      $("#help-response").append("Find a dog and start petting!");
    } else {
      $("#help-response").append("You suck at managing your stress!");
    }
  });
});
