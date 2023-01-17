// Clear existing local storage
localStorage.clear();

//Initalize local storage variables
const localStorageVariables = [
  "q1",
  "q10.1",
  "q10.11",
  "q14.1",
  "q15.4",
  "q18.1",
  "q19.3",
  "q20",
  "q30.4",
  "q30.5",
  "q31",
  "q33",
  "q39.1",
  "q39.6",
  "q39.8",
  "q46.0",
  "q46.3",
  "q46.4",
  "q48.4",
  "q48.5",
  "q49.3",
  "q49.5",
  "q49.6",
  "q50.0",
  "q50.1",
  "q51_1",
  "q55_2",
  "q63.0.0",
  "q63.0.1",
  "q65.6",
  "q82.5",
  "q83.0",
  "q83.1",
  "q83.2",
  "q83.3",
  "q83.4",
  "q83.5",
  "q90.2",
];
localStorageVariables.forEach(function (item, index) {
  localStorage.setItem(item, "0");
});

//When option with data-question attribute is clicked
$("[data-question]").on("click", function () {
  if ($(this).attr("data-type") == "checkbox") {
    if ($(this).find("input").prop("checked") == true) {
      localStorage.setItem($(this).attr("data-question"), "1"); // If checked set the local storage variable to 1
    } else {
      localStorage.setItem($(this).attr("data-question"), "0"); // If unchecked set the local storage variable to 0
    }
  } else if ($(this).attr("data-type") == "input") {
    // Do nothing. This is being handled separately
  } else {
    localStorage.setItem(
      $(this).attr("data-question"),
      $(this).attr("data-answer")
    ); // Set local storage variable to the value of data-answer
  }
});

// When input fields with data-type=input changes value
$("[data-type='input']").on("input", function () {
  if ($(this).val()) {
    localStorage.setItem($(this).attr("data-question"), $(this).val()); // Set local storage variable to the value of the field
  } else {
    localStorage.setItem($(this).attr("data-question"), "0"); // Set local storage variable to zero when empty
  }
});

//If option with data-clear (none option) attribute is clicked clear all opther options in the question group
$("[data-clear]").on("click", function () {
  $("[data-clear-target=" + $(this).attr("data-clear") + "]").each(function () {
    if ($(this).find("input").prop("checked") == true) {
      $(this).click();
    }
  });
});

//If option with data-target (question with none option) attribute is clicked clear the none option in the question group
$("[data-clear-target]").on("click", function () {
  $("[data-clear=" + $(this).attr("data-clear-target") + "]").each(function () {
    if ($(this).find("input").prop("checked") == true) {
      $(this).click();
    }
  });
});

//Branching Logic //

//Hide j10
$("[hide-question-710='1']").on("click", function () {
  //need to skip page-3 instead of hiding j7
  $("#j10").hide();
  console.log("Hiding j10");
});

//Hide j8 + j9
$("[hide-question-89='1']").on("click", function () {
  $("#j8").hide();
  $("#j9").hide();
  console.log("Hiding j8 + j9");
});

$("[hide-page-3='true']").on("click", function () {
  console.log("CLICKING HIDE PAGE 3 ANSWER");
});

//Shreyansh slider logic
// When an answer is clicked, update target slider
$("[hide-page-3='true']").on("click", ".w-slide", function () {
  // Find target slider, if not found exit
  var target = $($(this).parents(".w-slider").attr("[hide-page-3='true']"));
  if (target.length == 0) return;

  // Update target slider by triggering a "tap" event on the targetNav corresponding slide button
  target.find(".w-slider-nav").children().eq($(this).index()).trigger("tap");
});

//Skip Page-2 / j6
$("[hide-page-2='true]").on("click", function () {});

//Skip Page-4 / j8-10
$("[hidepage-4='true']").on("click", function () {});

//Branching Logic //

//Input type questions have characters between 0-24
//regex ^(0?[0-9]|1[0-9]|2[0-4])$
$("[data-type='input']").on("onfocusout", function () {
  //validate if regex attr is true or not
  if ($(this).val().match($(this).attr("pattern"))) {
    $(".quiz-error-message").hide();
    console.log("Error for Input field set to hidden");
  } else {
    $(".quiz-error-message").show();
    console.log("Error for Input field set to display");
    //disable next button return false
    $(".next-button-quiz").prop("disabled", true);
  }
});

console.log("LOCALHOST LIVE SERVER IS RUNNING!");

//Get my archetype stop submit for testing
$("#wf-form-Quiz").submit(function () {
  console.log("THE SUBMIT BUTTON IS LOCKED FOR TESTING!");
  return false;
});

//Hide j6
$("[data-type='checkbox']").on("click", function () {
  if ($("#j5-3")) {
    if ($(this).find("input").prop("checked") == true) {
      $("#j6").hide();
      console.log("Question 6 has been hidden!");
    } else {
      console.log("Error hiding question 6!");
    }
  } else {
    console.log("Error checking j6 selector!");
  }
});

//Older code

//Hide Page 3 + 4 if answer to j3 == j3.6 or j3.7
// $("[data-type='checkbox']").on("click", function () {
//   if ($(this).find("input").prop("checked") == true) {
//     if ($(this).val() == "j3-6" || "j3-7") {
//       //   document.getElementById("page-3").hide();
//       //   document.getElementById("page-4").hide();
//     } else {
//       console.log("Error hiding Pages 3 & 4");
//     }
//   }
// });
