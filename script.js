// Clear existing local storage
localStorage.clear();
let arr = {};

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
function zeroToTwo() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if (
        $("#j5-1").is(":checked") &&
        ($("#j5-2").is(":checked") ||
          $("#j5-3").is(":checked") ||
          $("#j5-4").is(":checked") ||
          $("#j5-5").is(":checked") ||
          $("#j5-6").is(":checked") ||
          $("#j5-7").is(":checked"))
      ) {
        return true;
      } else if ($("#j5-1").is(":checked") || $("#j5-8").is(":checked")) {
        console.log("Skip Test s0 -> s2");
        $(".w-slider-dot")[1].click();
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
function oneToFour() {
  nextButton.on("click", function () {
    if (slide1.style.visibility == "") {
      if (
        $("#j3-1").is(":checked") &&
        $("#j3-2").is(":checked") &&
        $("#j3-3").is(":checked") &&
        $("#j3-4").is(":checked") &&
        $("#j3-5").is(":checked") &&
        $("#j3-7").is(":checked") &&
        $("#j3-8").is(":checked")
      ) {
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
        return true;
      } else if ($("#j3-1").is(":checked")) {
        $(".w-slider-dot")[2].click();
      }
      if (
        $("#j3-4").is(":checked") &&
        ($("#j3-1").is(":checked") ||
          $("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked") ||
          $("#j3-6").is(":checked"))
      ) {
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
        return true;
      }
      if (
        $("#j3-4").is(":checked") &&
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked"))
      ) {
        $("#j8").hide();
        $("#j9").hide();
        $("#j10").show();
        return true;
      }
      if (
        ($("#j3-1").is(":checked") ||
          $("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked")) &&
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked"))
      ) {
        $("#j8").show();
        $("#j9").show();
        $(".w-slider-dot")[2].click();
      } else if (
        $("#j3-2").is(":checked") ||
        $("#j3-3").is(":checked") ||
        $("#j3-5").is(":checked") ||
        $("#j3-6").is(":checked")
      ) {
        console.log("Skip s1 -> s3");
        $(".w-slider-dot")[3].click();
      } else if ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) {
        $(".w-slider-dot")[3].click();
      }
    }
  });
  backButton.on("click", function () {
    if (slide4.style.visibility == "") {
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
        $(".w-slider-dot")[3].click();
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

//DISABLE NEXT BUTTON//

function checkChecked() {
  nextButton.on("click", function () {
    //add in visible page and copy for function for each page
    for (let i = 0; i < $(".form-question-wrapper").length; i++) {
      console.log("looking through qs");
      console.log($(".form-question-wrapper").length);
      if ($(".checkbox-wrapper").find($(":input:checked")).length >= 1) {
        console.log("TRUE");
        return true;
      } else {
        console.log("FALSE");
        return false;
      }
    }
  });
}

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
          nextButton.on("click", function () {
            return true;
          });
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

//Slide0 Lock
function checkSlide0() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if (
        ($("#j11").is(":checked") ||
          $("#j12").is(":checked") ||
          $("#j13").is(":checked") ||
          $("#j14").is(":checked") ||
          $("#j15").is(":checked") ||
          $("#j16").is(":checked") ||
          $("#j17").is(":checked") ||
          $("#j18").is(":checked")) &&
        ($("#j2-1").is(":checked") ||
          $("#j2-2").is(":checked") ||
          $("#j2-3").is(":checked") ||
          $("#j2-4").is(":checked") ||
          $("#j2-5").is(":checked") ||
          $("#j2-6").is(":checked") ||
          $("#j2-7").is(":checked") ||
          $("#j2-8").is(":checked") ||
          $("#j2-9").is(":checked")) &&
        ($("#j3-1").is(":checked") ||
          $("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-4").is(":checked") ||
          $("#j3-5").is(":checked") ||
          // $("#j3-6") ||
          $("#j3-7").is(":checked") ||
          $("#j3-8").is(":checked")) &&
        ($("#j4-1").is(":checked") ||
          $("#j4-2").is(":checked") ||
          $("#j4-3").is(":checked") ||
          $("#j4-4").is(":checked") ||
          $("#j4-5").is(":checked") ||
          $("#j4-6").is(":checked") ||
          $("#j4-7").is(":checked")) &&
        ($("#j5-1").is(":checked") ||
          $("#j5-2").is(":checked") ||
          $("#j5-3").is(":checked") ||
          $("#j5-4").is(":checked") ||
          $("#j5-6").is(":checked") ||
          $("#j5-7").is(":checked") ||
          $("#j5-8").is(":checked"))
      ) {
        return true;
      } else {
        console.log("S0 Next button locked, no answers clicked!");

        return false;
      }
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
        (
          $("#j8-1") ||
          $("#j8-2") ||
          $("#j8-3") ||
          $("#j8-4") ||
          $("#j8-5") ||
          $("#j8-6") ||
          $("#j8-7")
        ).is(":checked") ||
        (
          $("#j9-1") ||
          $("#j9-2") ||
          $("#j9-3") ||
          $("#j9-4") ||
          $("#j9-5") ||
          $("#j9-6") ||
          $("#j9-7") ||
          $("#j9-8") ||
          $("#j9-9") ||
          $("#j9-10")
        ).is(":checked") ||
        (
          $("#j10-1") ||
          $("#j10-2") ||
          $("#j10-3") ||
          $("#j10-4") ||
          $("#j10-5") ||
          $("#j10-6") ||
          $("#j10-7")
        ).is(":checked")
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
        ($("#j111").is(":checked") ||
          $("#j112").is(":checked") ||
          $("#j113").is(":checked") ||
          $("#j114").is(":checked") ||
          $("#j115").is(":checked") ||
          $("#j116").is(":checked")) &&
        ($("#j12-1").is(":checked") ||
          $("#j12-2").is(":checked") ||
          $("#j12-3").is(":checked") ||
          $("#j12-4").is(":checked") ||
          $("#j12-5").is(":checked") ||
          $("#j12-6").is(":checked") ||
          $("#j12-7").is(":checked")) &&
        ($("#j13-1").is(":checked") ||
          $("#j13-2").is(":checked") ||
          $("#j13-3").is(":checked") ||
          $("#j13-4").is(":checked") ||
          $("#j13-5").is(":checked") ||
          $("#j13-6").is(":checked") ||
          $("#j13-7").is(":checked") ||
          $("#j13-8").is(":checked") ||
          $("#j13-9").is(":checked")) &&
        ($("#j14-1").is(":checked") ||
          $("#j14-2").is(":checked") ||
          $("#j14-3").is(":checked") ||
          $("#j14-4").is(":checked") ||
          $("#j14-5").is(":checked") ||
          $("#j14-6").is(":checked") ||
          $("#j14-7").is(":checked") ||
          $("#j14-8").is(":checked")) &&
        ($("#j15-1").is(":checked") ||
          $("#j15-2").is(":checked") ||
          $("#j15-3").is(":checked") ||
          $("#j15-4").is(":checked") ||
          $("#j15-5").is(":checked") ||
          $("#j15-6").is(":checked") ||
          $("#j15-7").is(":checked") ||
          $("#j15-8").is(":checked"))
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
function checkSlide5() {
  nextButton.on("click", function () {
    if (slide5.style.visibility == "") {
      if (
        ($("#j171").is(":checked") ||
          $("#j172").is(":checked") ||
          $("#j173").is(":checked") ||
          $("#j174").is(":checked") ||
          $("#j175").is(":checked")) &&
        ($("#j181").is(":checked") ||
          $("#j182").is(":checked") ||
          $("#j183").is(":checked") ||
          $("#j184").is(":checked") ||
          $("#j185").is(":checked")) &&
        ($("#j191").is(":checked") ||
          $("#j192").is(":checked") ||
          $("#j193").is(":checked") ||
          $("#j194").is(":checked") ||
          $("#j195").is(":checked")) &&
        ($("#j201").is(":checked") ||
          $("#j202").is(":checked") ||
          $("#j203").is(":checked") ||
          $("#j204").is(":checked") ||
          $("#j205").is(":checked")) &&
        ($("#j211").is(":checked") ||
          $("#j212").is(":checked") ||
          $("#j213").is(":checked") ||
          $("#j214").is(":checked") ||
          $("#j215").is(":checked")) &&
        ($("#j221").is(":checked") ||
          $("#j222").is(":checked") ||
          $("#j223").is(":checked") ||
          $("#j224").is(":checked") ||
          $("#j225").is(":checked")) &&
        ($("#j231").is(":checked") ||
          $("#j232").is(":checked") ||
          $("#j233").is(":checked") ||
          $("#j234").is(":checked") ||
          $("#j235").is(":checked")) &&
        ($("#j241").is(":checked") ||
          $("#j242").is(":checked") ||
          $("#j243").is(":checked") ||
          $("#j244").is(":checked") ||
          $("#j245").is(":checked")) &&
        ($("#j251").is(":checked") ||
          $("#j252").is(":checked") ||
          $("#j253").is(":checked") ||
          $("#j254").is(":checked") ||
          $("#j255").is(":checked")) &&
        ($("#j261").is(":checked") ||
          $("#j262").is(":checked") ||
          $("#j263").is(":checked") ||
          $("#j264").is(":checked") ||
          $("#j265").is(":checked")) &&
        ($("#j271").is(":checked") ||
          $("#j272").is(":checked") ||
          $("#j273").is(":checked") ||
          $("#j274").is(":checked") ||
          $("#j275").is(":checked")) &&
        ($("#j281").is(":checked") ||
          $("#j282").is(":checked") ||
          $("#j283").is(":checked") ||
          $("#j284").is(":checked") ||
          $("#j285").is(":checked")) &&
        ($("#j291").is(":checked") ||
          $("#j292").is(":checked") ||
          $("#j293").is(":checked") ||
          $("#j294").is(":checked") ||
          $("#j295").is(":checked"))
      ) {
        return true;
      } else {
        console.log("S5 Next button locked, no answers clicked!");
        return false;
      }
    }
  });
}
//Slide 6
const field1 = document.getElementById("j30");
const field2 = document.getElementById("j31");
const pattern = field1.getAttribute("pattern");
var re = new RegExp(pattern);

function checkSlide6() {
  nextButton.on("click", function () {
    if (slide6.style.visibility == "") {
      if (re.test(field1.value) && re.test(field2.value)) {
        // Pattern matches!
        console.log("Pattern matches");
      } else {
        console.log("S6 Next button locked, no answers clicked!");
        $(".quiz-error-message").show();
        return false;
      }
    }
  });
}
//Slide 7
const field3 = document.getElementById("j32");
const submitButton = document.getElementsByClassName("submit-button-2");

function checkSlide7() {
  $("#wf-form-Quiz").submit(function () {
    if (slide7.style.visibility == "") {
      if (field3.value) {
        console.log("Email is present");
        // return true;
      } else {
        console.log("S7 Next button locked, no answers clicked!");
        $(".quiz-error-message-email").show();
        return false;
      }
    }
  });
}

$(".w-slide").ready(function () {
  // checkChecked();
  //Page Lock Functions
  // checkSlide6();
  // checkSlide5();
  // checkSlide4();
  // checkSlide3();
  // checkSlide2();
  // checkSlide1();
  // checkSlide0();
  // isChecked();
  // disIfUnchecked();
  //Skip Page Functions
  // zeroToTwo();
  // oneToFour();
  //Input field Error Message +
  errorMess();
});

let email = document.getElementById("j32");

//VALUE CANNOT EXCEED 24//
function errorMess() {
  $("#j30").focusout(function () {
    if ($(this).val().match($(this).attr("pattern"))) {
      $("#q30 .quiz-error-message").hide();
      nextButton.on("click", function () {
        return true;
      });
    } else {
      $("#q30 .quiz-error-message").show();
    }
  });
  $("#j31").focusout(function () {
    if ($(this).val().match($(this).attr("pattern"))) {
      $("#q31 .quiz-error-message").hide();
    } else {
      $("#q31 .quiz-error-message").show();
    }
  });
  if ($("#q30 .quiz-error-message").css("display") == "block") {
    nextButton.on("click", function () {
      return false;
    });
  } else if ($("#q31 .quiz-error-message").css("display") == "block") {
    nextButton.on("click", function () {
      return false;
    });
  }
}

console.log("LOCALHOST LIVE SERVER IS RUNNING!");
//'Get my archetype' stop submit for testing
$("#wf-form-Quiz").submit(function () {
  if (slide7.style.visibility == "") {
    if (field3.value.length !== 0) {
      console.log("Email is present");

      $("#loading").fadeIn(function () {
        $("#loading").css("display", "block");
      });
      $(".image-section-title quiz").css("display", "none");
      $(".progress-bar-wrapper").css("display", "none");

      console.log(email.value);
      mailChimp(email.value);
      submitResponse();
      return false;
    } else {
      console.log("S7 Next button locked, no answers clicked!");
      $(".quiz-error-message-email").show();
      return false;
    }
  }
});

//Trigger Submit of Quiz
//API
function submitResponse() {
  let date = new Date().toJSON();

  let data = $("form")
    .serializeArray()
    .reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

  let fields = [
    "j1",
    "j2-1",
    "j2-2",
    "j2-3",
    "j2-4",
    "j2-5",
    "j2-6",
    "j2-7",
    "j2-8",
    "j2-9",
    "j3-1",
    "j3-2",
    "j3-3",
    "j3-4",
    "j3-5",
    "j3-6",
    "j3-7",
    "j4-1",
    "j4-2",
    "j4-3",
    "j4-4",
    "j4-5",
    "j4-6",
    "j4-7",
    "j4-8",
    "j5-1",
    "j5-2",
    "j5-3",
    "j5-4",
    "j5-5",
    "j5-6",
    "j5-7",
    "j5-8",
    "j6",
    "j7-1",
    "j7-2",
    "j7-3",
    "j7-4",
    "j7-5",
    "j7-6",
    "j7-7",
    "j8-1",
    "j8-2",
    "j8-3",
    "j8-4",
    "j8-5",
    "j8-6",
    "j8-7",
    "j9-1",
    "j9-2",
    "j9-3",
    "j9-4",
    "j9-5",
    "j9-6",
    "j9-7",
    "j9-8",
    "j9-9",
    "j9-10",
    "j10-1",
    "j10-2",
    "j10-3",
    "j10-4",
    "j10-5",
    "j10-6",
    "j10-7",
    "j11",
    "j12-1",
    "j12-2",
    "j12-3",
    "j12-4",
    "j12-5",
    "j12-6",
    "j12-7",
    "j13-1",
    "j13-2",
    "j13-3",
    "j13-4",
    "j13-5",
    "j13-6",
    "j13-7",
    "j13-8",
    "j13-9",
    "j14-1",
    "j14-2",
    "j14-3",
    "j14-4",
    "j14-5",
    "j14-6",
    "j14-7",
    "j14-8",
    "j15-1",
    "j15-2",
    "j15-3",
    "j15-4",
    "j15-5",
    "j15-6",
    "j16",
    "j17",
    "j18",
    "j19",
    "j20",
    "j21",
    "j22",
    "j23",
    "j24",
    "j25",
    "j26",
    "j27",
    "j28",
  ];

  let values = [date];

  for (let i = 0; i < fields.length; i++) {
    if (data[fields[i]] == null) values.push("0");
    else if (data[fields[i]] == "on") values.push("1");
    else values.push(data[fields[i]]);
  }

  values.push(localStorage.getItem("q63.0.0"));
  values.push(localStorage.getItem("q63.0.1"));

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([values]),
  };

  //on submit of form trigger fetch
  fetch(
    "https://v1.nocodeapi.com/perpetualdev/google_sheets/febhqDGsnbjuhzsT?tabId=Form Responses",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var data = JSON.parse(result);
      console.log(data);
      console.log(data["row_id"]);
      pushToTT(data["row_id"]);
    })
    .catch((error) => console.log("error", error));
}

//Push form data to Typing Tool
function pushToTT(result) {
  console.log(result);
  for (let i = 0; i < localStorageVariables.length; i++) {
    arr[localStorageVariables[i]] = localStorage.getItem(
      localStorageVariables[i]
    );
  }

  arr["row_id"] = result;
  console.log(arr);

  var myNewHeaders = new Headers();
  myNewHeaders.append("Content-Type", "application/json");
  var newRequestOptions = {
    method: "put",
    headers: myNewHeaders,
    redirect: "follow",
    body: JSON.stringify(arr),
  };
  //Post to Typing Tool
  fetch(
    "https://v1.nocodeapi.com/perpetualdev/google_sheets/febhqDGsnbjuhzsT?tabId=Typing Tool",
    newRequestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var data = JSON.parse(result);
      console.log(data);
      console.log(result["row_id"]);
      console.log(arr["row_id"]);
      getArchtype(arr["row_id"]);
    })
    .catch((error) => console.log("error", error));
}

//Get request specific row in Archetype outputs
function getArchtype(data) {
  console.log(data);

  var getHeaders = new Headers();
  getHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: getHeaders,
    redirect: "follow",
  };

  fetch(
    "https://v1.nocodeapi.com/perpetualdev/google_sheets/febhqDGsnbjuhzsT?tabId=Archetype outputs&row_id=" +
      `${data}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var newData = JSON.parse(result);
      console.log(newData["Archetype"]);
      console.log(newData["Image URL"]);
      console.log(newData["Tagline"]);
      console.log(newData["Long Description"]);

      $("#loading").fadeOut(function () {
        $("#loading").css("display", "none");
      });

      //Hide Quiz Slides
      $(".slider").css("display", "none");

      //Image src
      $("#archetype-image").attr("src", newData["Image URL"]);

      //Archetype name
      $("#archetype").text(newData["Archetype"]);
      console.log($(".archetype"));

      //Tagline
      $("#tagline").text(newData["Tagline"]);

      //Desc
      $("#desc-right p:first-child").text(newData["Long Description"]);

      //Set Archetype Wrapper to display
      $("#archetype-wrapper").css("display", "block");
    })
    .catch((error) => console.log("error", error));
}

//Add new member to Mail Chimp
function mailChimp(userEmail) {
  console.log(userEmail);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://v1.nocodeapi.com/perpetualdev/mailchimp/wKKBmPzxtAoAAduI/members?list_id=1159bd27b0&email_address=" +
      `${userEmail}` +
      "&status=subscribed",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
