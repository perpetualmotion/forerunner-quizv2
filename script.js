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

//BRANCHING LOGIC //
//Page values to add attr
const page1 = $("#page-1");
const page2 = $("#page-2");
const page3 = $("#page-3");
const page4 = $("#page-4");
const page5 = $("#page-5");
const page6 = $("#page-6");
const page7 = $("#page-7");
const page8 = $("#page-8");
//Slide values
const slide0 = $(".w-slide")[0];
const slide1 = $(".w-slide")[1];
const slide2 = $(".w-slide")[2];
const slide3 = $(".w-slide")[3];
const slide4 = $(".w-slide")[4];
const slide5 = $(".w-slide")[5];
const slide6 = $(".w-slide")[6];
const slide7 = $(".w-slide")[7];

const nextButton = $(".next-button-quiz");
const backButton = $(".back-button-quiz");

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

// function test() {
//   $(".next-button-quiz").on("click", function () {
//     if (slide1.style.visibility == "") {
//       if ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) {
//         console.log("Skip Test s1 -> s3");
//         $(".w-slider-dot")[2].click();
//       }
//     }
//   });
//   $(".back-button-quiz").on("click", function () {
//     if (slide3.style.visibility == "") {
//       if ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) {
//         console.log("Skip s3 => s1");
//         $(".w-slider-dot")[2].click();
//       }
//     }
//   });
// }

function zeroToTwo() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if ($("#j5-1").is(":checked") || $("#j5-8").is(":checked")) {
        console.log("Skip Test s0 -> s2");
        $(".w-slider-dot")[1].click();
      } else {
        // return false;
      }
    }
  });
  backButton.on("click", function () {
    if (slide2.style.visibility == "") {
      if ($("#j5-1").is(":checked") || $("#j5-8").is(":checked")) {
        console.log("Skip s2 => s0");
        $(".w-slider-dot")[1].click();
      }
    }
  });
}

function oneToThree() {
  nextButton.on("click", function () {
    if (slide1.style.visibility == "") {
      if (
        $("#j3-1").is(":checked") ||
        $("#j3-2").is(":checked") ||
        $("#j3-3").is(":checked") ||
        $("#j3-5").is(":checked") ||
        $("#j3-6").is(":checked") ||
        $("#j3-7").is(":checked") ||
        $("#j3-8").is(":checked")
      ) {
        console.log("Skip s1 -> s3");
        $(".w-slider-dot")[2].click();
      } else {
        // Caused bug where slide 1 locks and will not skip
        // return false;
      }
    }
  });
  backButton.on("click", function () {
    if (slide3.style.visibility == "") {
      if (
        $("#j3-1").is(":checked") ||
        $("#j3-2").is(":checked") ||
        $("#j3-3").is(":checked") ||
        $("#j3-5").is(":checked") ||
        $("#j3-6").is(":checked") ||
        $("#j3-7").is(":checked") ||
        $("#j3-8").is(":checked")
      ) {
        console.log("Skip s3 => s1");
        $(".w-slider-dot")[2].click();
      }
      if (
        $("#j5-1").is(":checked") ||
        ($("#j5-8").is(":checked") && $("#j3-1").is(":checked")) ||
        $("#j3-2").is(":checked") ||
        $("#j3-3").is(":checked") ||
        $("#j3-5").is(":checked") ||
        $("#j3-6").is(":checked") ||
        $("#j3-7").is(":checked") ||
        $("#j3-8").is(":checked")
      ) {
        console.log("Returning to s1!");
        $(".w-slider-dot")[2].click();
      }
    }
  });
}
//BRACHING LOGIC //

//DISABLE NEXT BUTTON//
function isChecked() {
  //on page render
  if (!$(":input").prop("checked")) {
    console.log("No elements checked");

    if (
      $(":input").on("click", function () {
        // console.log("An answer has been clicked");
        if ($(this).is(":checked")) {
          console.log("Answer checked!");
          //Slider functions normally
        }
      })
    ) {
    }
  } else {
    //nothing being handled in following function
  }
}
function disIfUnchecked() {
  //on page render
  nextButton.on("click", function () {
    if (!$(":input").is(":checked")) {
      console.log("Next button locked, no answers clicked!");
      return false;
    }
  });
}

//Slide1 Lock
function checkSlide1() {
  nextButton.on("click", function () {
    if (slide1.style.visibility == "") {
      if (
        $("#j61").is(":checked") ||
        $("#j62").is(":checked") ||
        $("#j63").is(":checked") ||
        $("#j64").is(":checked") ||
        $("#j65").is(":checked") ||
        $("#j66").is(":checked") ||
        $("#j67").is(":checked") ||
        $("#j68").is(":checked") ||
        $("#j69").is(":checked")
      ) {
        console.log("s1 true");
        return true;
      } else {
        console.log("S1 Next button locked, no answers clicked!");
        return false;
      }
    }
  });
}

//Slide2 Lock
function checkSlide2() {
  nextButton.on("click", function () {
    if (slide2.style.visibility == "") {
      if (
        $("#j7-1").is(":checked") ||
        $("#j7-2").is(":checked") ||
        $("#j7-3").is(":checked") ||
        $("#j7-4").is(":checked") ||
        $("#j7-5").is(":checked") ||
        $("#j7-6").is(":checked") ||
        $("#j7-7").is(":checked")
      ) {
        console.log("s2 true");
        return true;
      } else {
        console.log("S2 Next button locked, no answers clicked!");
        return false;
      }
    }
  });
}
//Slide 3
function checkSlide3() {
  nextButton.on("click", function () {
    if (slide3.style.visibility == "") {
      if (
        $("#j8-1").is(":checked") ||
        $("#j8-2").is(":checked") ||
        $("#j8-3").is(":checked") ||
        $("#j8-4").is(":checked") ||
        $("#j8-5").is(":checked") ||
        $("#j8-6").is(":checked") ||
        $("#j8-7").is(":checked") ||
        $("#j9-1").is(":checked") ||
        $("#j9-2").is(":checked") ||
        $("#j9-3").is(":checked") ||
        $("#j9-4").is(":checked") ||
        $("#j9-5").is(":checked") ||
        $("#j9-6").is(":checked") ||
        $("#j9-7").is(":checked") ||
        $("#j9-8").is(":checked") ||
        $("#j9-9").is(":checked") ||
        $("#j9-10").is(":checked") ||
        $("#j10-1").is(":checked") ||
        $("#j10-2").is(":checked") ||
        $("#j10-3").is(":checked") ||
        $("#j10-4").is(":checked") ||
        $("#j10-5").is(":checked") ||
        $("#j10-6").is(":checked") ||
        $("#j10-7").is(":checked")
      ) {
        return true;
      } else {
        console.log("S3 Next button locked, no answers clicked!");
        return false;
      }
    }
  });
}
//Slide 4
function checkSlide4() {
  nextButton.on("click", function () {
    if (slide4.style.visibility == "") {
      if (
        $("#j111").is(":checked") ||
        $("#j112").is(":checked") ||
        $("#j113").is(":checked") ||
        $("#j114").is(":checked") ||
        $("#j115").is(":checked") ||
        $("#j116").is(":checked")
        //Have Matthew add ids to all answers in webflow
      ) {
        return true;
      } else {
        console.log("S4 Next button locked, no answers clicked!");
        return false;
      }
    }
  });
}
//Slide 5
// function checkSlide5() {
//   nextButton.on("click", function () {
//     if (slide5.style.visibility == "") {
//       if (
//         $("#j111").is(":checked") ||
//         $("#j112").is(":checked") ||
//         $("#j113").is(":checked") ||
//         $("#j114").is(":checked") ||
//         $("#j115").is(":checked") ||
//         $("#j116").is(":checked")
//       ) {
//         return true;
//       } else {
//         console.log("S5 Next button locked, no answers clicked!");
//         return false;
//       }
//     }
//   });
// }
//Slide 6
// function checkSlide6() {
//   nextButton.on("click", function () {
//     if (slide6.style.visibility == "") {
//       if (
//         $("#j111").is(":checked") ||
//         $("#j112").is(":checked") ||
//         $("#j113").is(":checked") ||
//         $("#j114").is(":checked") ||
//         $("#j115").is(":checked") ||
//         $("#j116").is(":checked")
//       ) {
//         return true;
//       } else {
//         console.log("S6 Next button locked, no answers clicked!");
//         return false;
//       }
//     }
//   });
// }
//Slide 7
// function checkSlide7() {
//   nextButton.on("click", function () {
//     if (slide7.style.visibility == "") {
//       if (
//         $("#j111").is(":checked") ||
//         $("#j112").is(":checked") ||
//         $("#j113").is(":checked") ||
//         $("#j114").is(":checked") ||
//         $("#j115").is(":checked") ||
//         $("#j116").is(":checked")
//       ) {
//         return true;
//       } else {
//         console.log("S7 Next button locked, no answers clicked!");
//         return false;
//       }
//     }
//   });
// }

$(".w-slide").ready(function () {
  //   test();
  //Page Lock Functions
  // checkSlide7();
  // checkSlide6();
  // checkSlide5();
  checkSlide4();
  checkSlide3();
  checkSlide2();
  checkSlide1();
  isChecked();
  disIfUnchecked();

  //Skip Page Functions
  zeroToTwo();
  oneToThree();
});
//DISABLE NEXT BUTTON//

//VALUE CANNOT EXCEED 24//
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
//VALUE CANNOT EXCEED 24//

console.log("LOCALHOST LIVE SERVER IS RUNNING!");

//'Get my archetype' stop submit for testing
$("#wf-form-Quiz").submit(function () {
  console.log("THE SUBMIT BUTTON IS LOCKED FOR TESTING!");
  return false;
});

//Ref Code

//function disableNext() {
//   $(document).ready(function () {
//     $(":input").on("click", function () {
//       if ($(this).is(":checked")) {
//         console.log("Answer clicked is checked!");
//         $(".next-button-quiz").on("click", function () {
//           console.log("Next button is locked!");
//           return false;
//         });
//       }
//     });
//   });
// }
