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

//Branching Logic ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//j6 is hidden if j5 answer is j5.1 or j5.8
//does j5 need a value of data-question for this logic to work?
$("[data-question]").on("click", function () {
  if ($(this).attr("data-question") === "q30") {
    if ($(this).attr("data-answer") === "j5-1" || "j5-8") {
      //make section j6 not visible
      document.getElementById("j6").style.visibility = "hidden";
    }
  }
});

//j7 is hidden if j3 is not j3.4 OR if j3 is j3.6 or j3.7
$("[data-question]").on("click", function () {
  if ($(this).attr("data-question") === "q12") {
    if ($(this).attr("data-answer") !== "j3-4") {
      //make section j7 not visible
      $("[label=3 of 8]").hide();
    }
    if ($(this).attr("data-answer") === "j3-6" || "j3-7") {
      //make section j7 not visible
      //hides full page as there is only one question
      $("[label=3 of 8]").hide();
    }
  }
});

//j8 is hidden if j3 is not 3.1, 3.2, 3.3 or 3.5
$("[data-question]").on("click", function () {
  if ($(this).attr("data-question") === "q12") {
    if ($(this).attr("data-answer") !== "j3-1" || "j3-2" || "j3-3" || "j3-5") {
      //make section j8 not visible
      document.getElementById("j8").style.visibility = "hidden";
    }
  }
});

//j9 is hidden if j3 is not 3.1, 3.2, 3.3, or 3.5
$("[data-question]").on("click", function () {
  if ($(this).attr("data-question") === "q12") {
    if ($(this).attr("data-answer") !== "j3-1" || "j3-2" || "j3-3" || "j3-5") {
      //make section j9 not visible
      document.getElementById("j9").style.visibility = "hidden";
    }
  }
});

//j10 is hidden if j3 is not j3.4
$("[data-question]").on("click", function () {
  if ($(this).attr("data-question") === "q12") {
    if ($(this).attr("data-answer") !== "j3-4") {
      //make section j10 not visible
      document.getElementById("j10").style.visibility = "hidden";
    }
  }
});

//Page 4 is hidden if j3 answer is j3.6 or j3.7
//Can't hide questions individually need to hide the full page
$(
  "[data-question]".on("click", function () {
    if ($(this).attr("data-question") === "q12") {
      if ($(this).attr("data-answer") === "j3.6" || "j3.7") {
        $("[label=4 of 8]").hide();
      }
    }
  })
);

//Input type questions have maxlimit of 24 characters
