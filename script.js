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

//When slides are initialized, add prev + next slide attribute to each slide, check prev + next slide attribute, then when next button is clicked check the desired attribute for where to send slider
//Add which slide is currently active based on visibility

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
//if questions are clicked give them attr clicked == true
$("#j3-7").on("click", function () {
  $("#j3-7").attr("clicked", "true");
  console.log("Attributes added to j3 answers");
});
$("#j3-8").on("click", function () {
  $("#j3-8").attr("clicked", "true");
  console.log("Attributes added to j3 answers");
});
$("#j5-1").on("click", function () {
  $("#j5-1").attr("clicked", "true");
  console.log("Attributes added to j5 answers");
});

window.onload = function () {
  page1.attr("next-q", "p2");
  page2.attr({ "prev-q": "p1", "next-q": "p3" });
  page3.attr({ "prev-q": "p2", "next-q": "p4" });
  page4.attr({ "prev-q": "p3", "next-q": "p5" });
  page5.attr({ "prev-q": "p4", "next-q": "p6" });
  page6.attr({ "prev-q": "p5", "next-q": "p7" });
  page7.attr({ "prev-q": "p6", "next-q": "p8" });
  page8.attr("prev-q", "p7");
  //   console.log("Page Num Attrs Added!");

  //   $(".next-button-quiz").on("click", function () {
  //     //tell slider its destination
  //     // $(".w-slide").val(function () {
  //     //   console.log("Next Question:", $(this).attr("next-q"));
  //     // });
  //     // $(".w-slide").val(function () {
  //     //   console.log("Prev Question:", $(this).attr("prev-q"));
  //     // });
  //     isItVisible();
  //   });
  //   $(".back-button-quiz").on("click", function () {
  //     isItVisible();
  //   });
};

function test() {
  $(".next-button-quiz").on("click", function () {
    if (slide0.style.visibility == "") {
      if ($("#j3-7").is(":checked")) {
        console.log("Skip Test s0 -> s2");
        $(".w-slider-dot")[1].click();
      }
    }
  });
  if (slide0.style.visibility == "") {
    $(".next-button-quiz").on("click", function () {
      if ($("#j3-7").is(":checked")) {
        // console.log("Test = True");
        // $(".w-slider-dot")[1].click();
      }
    });
  }
}

function zerototwo() {
  $(".next-button-quiz").on("click", function () {
    if (slide0.style.visibility == "") {
      if ($("#j3-7").is(":checked")) {
        console.log("skip s0 => s2");
        $(".w-slider-dot")[1].click();
      }
    }
  });
  $(".back-button-quiz").on("click", function () {
    if (slide2.style.visibility == "") {
      console.log("Skip s2 => s0");
      $(".w-slider-dot")[1].click();
    }
  });
}

function onetothree() {
  $(".next-button-quiz").on("click", function () {
    if (slide1.style.visibility == "") {
      console.log("Skip s2 => s4");
      $(".w-slider-dot")[2].click();
    }
  });

  $(".back-button-quiz").on("click", function () {
    if (slide3.style.visibility == "") {
      console.log("Skip s4 => s2");
      $(".w-slider-dot")[2].click();
    }
  });
}

$(".w-slide").ready(function () {
  test();
  //   zerototwo();
  //   onetothree();
  //   isItVisible();
});

function isItVisible() {
  $(document).ready(function () {
    //Skip Page - 3, send slider to p4 / slide3
    if (slide1.style.visibility == "") {
      console.log("page-2 is visible");
      //j3-6
      if ($("[hide-page-3='true']").attr("clicked") == "true") {
        console.log("answer is clicked");
        $(".next-button-quiz").on("click", function () {
          $(".w-slider-dot")[3].click();
        });
        $(".back-button-quiz").on("click", function () {
          $(".w-slider-dot")[2].click();
          console.log("Returning to Page-1");
        });
      }
    }

    //Skip page-2, send slider to [2]

    if (slide2.style.visibility == "") {
      console.log("Slide 2 visible");
      $(".next-button-quiz").on("click", function () {
        console.log("Attempting to advance to slide 3");
        $(".w-slider-dot")[2].click();
      });
    } else if (slide0.style.visibility == "") {
      console.log("page-1 visible");
      if (
        $("[hide-page-2='true']").on("click", function () {
          $(".next-button-quiz").on("click", function () {
            console.log("skip p2");
            $(".w-slider-dot")[1].click();
          });
        })
      )
        $(".back-button-quiz").on("click", function () {
          $(".w-slider-dot")[1].click();
        });
    } else {
      console.log("ERROR SKIPPING");
      $(".next-button-quiz").on("click", function () {});
    }
  });
}

//BRACHING LOGIC //

//Char. between 0-24 for Input Type qs
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

//'Get my archetype' stop submit for testing
$("#wf-form-Quiz").submit(function () {
  console.log("THE SUBMIT BUTTON IS LOCKED FOR TESTING!");
  return false;
});
