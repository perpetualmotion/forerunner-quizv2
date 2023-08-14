localStorage.clear();
let arr = {};
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
$("[data-question]").on("click", function () {
  if ($(this).attr("data-type") == "checkbox") {
    if ($(this).find("input").prop("checked") == !0) {
      localStorage.setItem($(this).attr("data-question"), "1");
    } else {
      localStorage.setItem($(this).attr("data-question"), "0");
    }
  } else if ($(this).attr("data-type") == "input") {
  } else {
    localStorage.setItem(
      $(this).attr("data-question"),
      $(this).attr("data-answer")
    );
  }
});
$("[data-type='input']").on("input", function () {
  if ($(this).val()) {
    localStorage.setItem($(this).attr("data-question"), $(this).val());
  } else {
    localStorage.setItem($(this).attr("data-question"), "0");
  }
});
$("[data-clear]").on("click", function () {
  $("[data-clear-target=" + $(this).attr("data-clear") + "]").each(function () {
    if ($(this).find("input").prop("checked") == !0) {
      $(this).click();
    }
  });
});
$("[data-clear-target]").on("click", function () {
  $("[data-clear=" + $(this).attr("data-clear-target") + "]").each(function () {
    if ($(this).find("input").prop("checked") == !0) {
      $(this).click();
    }
  });
});
const slide0 = $(".w-slide")[0];
const slide1 = $(".w-slide")[1];
const slide2 = $(".w-slide")[2];
const slide3 = $(".w-slide")[3];
const slide4 = $(".w-slide")[4];
const slide5 = $(".w-slide")[5];
const slide6 = $(".w-slide")[6];
const slide7 = $(".w-slide")[7];
let j1 = [
  $("#j11"),
  $("#j12"),
  $("#j13"),
  $("#j14"),
  $("#j15"),
  $("#j16"),
  $("#j17"),
  $("#j18"),
];
let j2 = [
  $("#j2-1"),
  $("#j2-2"),
  $("#j2-3"),
  $("#j2-4"),
  $("#j2-5"),
  $("#j2-6"),
  $("#j2-7"),
  $("#j2-8"),
  $("#j2-9"),
];
let j3 = [
  $("#j3-1"),
  $("#j3-2"),
  $("#j3-3"),
  $("#j3-4"),
  $("#j3-5"),
  $("#j3-7"),
  $("#j3-8"),
];
let j4 = [
  $("#j4-1"),
  $("#j4-2"),
  $("#j4-3"),
  $("#j4-4"),
  $("#j4-5"),
  $("#j4-6"),
  $("#j4-7"),
];
let j5 = [
  $("#j5-1"),
  $("#j5-2"),
  $("#j5-3"),
  $("#j5-4"),
  $("#j5-5"),
  $("#j5-6"),
  $("#j5-7"),
  $("#j5-8"),
];
let j6 = [
  $("#j61"),
  $("#j62"),
  $("#j63"),
  $("#j64"),
  $("#j65"),
  $("#j66"),
  $("#j67"),
  $("#j68"),
  $("#j69"),
];
let j7 = [
  $("#j7-1"),
  $("#j7-2"),
  $("#j7-3"),
  $("#j7-4"),
  $("#j7-5"),
  $("#j7-6"),
  $("#j7-7"),
];
let j8 = [
  $("#j8-1"),
  $("#j8-2"),
  $("#j8-3"),
  $("#j8-4"),
  $("#j8-5"),
  $("#j8-6"),
  $("#j8-7"),
];
let j9 = [
  $("#j9-1"),
  $("#j9-2"),
  $("#j9-3"),
  $("#j9-4"),
  $("#j9-5"),
  $("#j9-6"),
  $("#j9-7"),
  $("#j9-8"),
  $("#j9-9"),
  $("#j9-10"),
];
let j10 = [
  $("#j10-1"),
  $("#j10-2"),
  $("#j10-3"),
  $("#j10-4"),
  $("#j10-5"),
  $("#j10-6"),
  $("#j10-7"),
];
let j11 = [
  $("#j111"),
  $("#j112"),
  $("#j113"),
  $("#j114"),
  $("#j115"),
  $("#j116"),
];
let j12 = [
  $("#j12-1"),
  $("#j12-2"),
  $("#j12-3"),
  $("#j12-4"),
  $("#j12-5"),
  $("#j12-6"),
  $("#j12-7"),
];
let j13 = [
  $("#j13-1"),
  $("#j13-2"),
  $("#j13-3"),
  $("#j13-4"),
  $("#j13-5"),
  $("#j13-6"),
  $("#j13-7"),
  $("#j13-8"),
  $("#j13-9"),
];
let j14 = [
  $("#j14-1"),
  $("#j14-2"),
  $("#j14-3"),
  $("#j14-4"),
  $("#j14-5"),
  $("#j14-6"),
  $("#j14-7"),
  $("#j14-8"),
];
let j15 = [
  $("#j15-1"),
  $("#j15-2"),
  $("#j15-3"),
  $("#j15-4"),
  $("#j15-5"),
  $("#j15-6"),
  $("#j15-7"),
  $("#j15-8"),
];
let j17 = [$("#j171"), $("#j172"), $("#j173"), $("#j174"), $("#j175")];
let j18 = [$("#j181"), $("#j182"), $("#j183"), $("#j184"), $("#j185")];
let j19 = [$("#j191"), $("#j192"), $("#j193"), $("#j194"), $("#j195")];
let j20 = [$("#j201"), $("#j202"), $("#j203"), $("#j204"), $("#j205")];
let j21 = [$("#j211"), $("#j212"), $("#j213"), $("#j214"), $("#j215")];
let j22 = [$("#j221"), $("#j222"), $("#j223"), $("#j224"), $("#j225")];
let j23 = [$("#j231"), $("#j232"), $("#j233"), $("#j234"), $("#j235")];
let j24 = [$("#j241"), $("#j242"), $("#j243"), $("#j244"), $("#j245")];
let j25 = [$("#j251"), $("#j252"), $("#j253"), $("#j254"), $("#j255")];
let j26 = [$("#j261"), $("#j262"), $("#j263"), $("#j264"), $("#j265")];
let j27 = [$("#j271"), $("#j272"), $("#j273"), $("#j274"), $("#j275")];
let j28 = [$("#j281"), $("#j282"), $("#j283"), $("#j284"), $("#j285")];
let j29 = [$("#j291"), $("#j292"), $("#j293"), $("#j294"), $("#j295")];
let threeA = [$("#j3-1"), $("#j3-2"), $("#j3-3"), $("#j3-5")];
let threeB = [$("#j3-4")];
let threeC = [$("#j3-7"), $("#j3-8")];
let fiveA = [$("#j5-1"), $("#j5-8")];
let fiveB = [
  $("#j5-2"),
  $("#j5-3"),
  $("#j5-4"),
  $("#j5-5"),
  $("#j5-6"),
  $("#j5-7"),
];
const nextButton = $(".next-button-quiz");
const backButton = $(".back-button-quiz");
const checked = (el) => el.is(":checked");
function scrollToTop() {
  $(window).scrollTop(0);
}
nextButton.show();
backButton.show();
function allCombi() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked)
      ) {
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
        return !1;
      }
    }
    if (slide2.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked)
      ) {
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
      }
    }
  });
  backButton.on("click", function () {
    if (slide2.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked)
      ) {
      }
    }
    if (slide3.style.visibility == "") {
      if (threeA.some(checked) && fiveA.some(checked) && fiveB.some(checked)) {
        $(".w-slider-dot")[2].click();
        $("#j10").hide();
      }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
    }
  });
}
function pairedCombi() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeB.some(checked)
      ) {
        $("#j10").hide();
        $(".w-slider-dot")[1].click();
        return !1;
      }
      if (
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked)
      ) {
        $(".w-slider-dot")[1].click();
        $("#j8").hide();
        $("#j9").hide();
        return !1;
      }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !fiveB.some(checked)
      ) {
        $("#j6").hide();
        $(".w-slider-dot")[2].click();
      }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveB.some(checked) &&
        !fiveA.some(checked)
      ) {
        $("#j7").show();
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
      }
    }
    if (slide1.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveB.some(checked) &&
        !fiveA.some(checked)
      ) {
        $("#j7").show();
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
      }
      if (
        threeA.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeB.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
        return !1;
      }
      if (
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        $("#j8").hide();
        $("#j9").hide();
        return !1;
      }
    }
    if (slide2.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        !fiveB.some(checked) &&
        fiveA.some(checked)
      ) {
        $("#j7").show();
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
      }
    }
  });
  backButton.on("click", function () {
    if (slide2.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[1].click();
      }
    }
    if (slide3.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeC.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
      if (
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeA.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
    }
  });
}
function doubleCombi() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        fiveA.some(checked) &&
        !threeC.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
      }
      if (
        threeA.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !threeB.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
        $("#j8").show();
        $("#j9").show();
        $("#j10").hide();
      }
      if (
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !threeA.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        $("#j8").hide();
        $("#j9").hide();
        $("#j10").show();
      }
      if (
        threeB.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeC.some(checked)
      ) {
        $("#j8").hide();
        $("#j9").hide();
        $(".w-slider-dot")[1].click();
      }
      if (threeA.some(checked) && threeB.some(checked) && fiveB.some(checked)) {
        return !0;
      }
    }
    if (slide1.style.visibility == "") {
      if (
        threeA.some(checked) &&
        threeC.some(checked) &&
        fiveB.some(checked) &&
        !fiveA.some(checked) &&
        !threeB.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
        $("#j6").show();
        $("#j10").hide();
      }
      if (
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveB.some(checked) &&
        !threeA.some(checked)
      ) {
        $("#j8").hide();
        $("#j9").hide();
        return !0;
      }
      if (
        threeB.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeA.some(checked) &&
        !threeC.some(checked)
      ) {
        $("#j8").hide();
        $("#j9").hide();
        return !0;
      }
      if (
        threeA.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeC.some(checked) &&
        !threeB.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
        $("#j10").hide();
      }
      if (
        slide1.style.visibility == "" &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeA.some(checked) &&
        !threeB.some(checked)
      ) {
        $(".w-slider-dot")[4].click();
      }
    }
  });
  backButton.on("click", function () {
    if (slide2.style.visibility == "") {
      if (
        threeB.some(checked) &&
        fiveA.some(checked) &&
        fiveB.some(checked) &&
        !threeA.some(checked) &&
        !threeC.some(checked)
      )
        if (
          threeB.some(checked) &&
          threeC.some(checked) &&
          fiveA.some(checked) &&
          !threeA.some(checked) &&
          !fiveB.some(checked)
        ) {
          $(".w-slider-dot")[0].click();
          return !1;
        }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        fiveA.some(checked) &&
        !threeC.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[1].click();
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
      }
    }
    if (slide3.style.visibility == "") {
      if (
        threeB.some(checked) &&
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !threeA.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        fiveA.some(checked) &&
        !threeC.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
        return !1;
      }
      if (
        threeA.some(checked) &&
        threeB.some(checked) &&
        fiveB.some(checked) &&
        !threeC.some(checked) &&
        !fiveA.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
    }
  });
}
function singleCombi() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if (
        threeA.some(checked) &&
        fiveA.some(checked) &&
        !threeB.some(checked) &&
        !threeC.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
        $("#j8").show();
        $("#j9").show();
        $("#j10").hide();
      }
      if (
        threeC.some(checked) &&
        fiveA.some(checked) &&
        !threeA.some(checked) &&
        !threeB.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[4].click();
      }
    }
    if (slide1.style.visibility == "") {
      if (
        threeA.some(checked) &&
        fiveB.some(checked) &&
        !threeB.some(checked) &&
        !threeC.some(checked) &&
        !fiveA.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
      }
    }
  });
  backButton.on("click", function () {
    if (slide2.style.visibility == "") {
      if (
        threeB.some(checked) &&
        fiveA.some(checked) &&
        !threeA.some(checked) &&
        !threeC.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[1].click();
      }
    }
  });
}
$("[hide-question-710='1']").on("click", function () {
  $("#j10").hide();
});
$("[hide-question-89='1']").on("click", function () {
  $("#j8").hide();
  $("#j9").hide();
});
function branching() {
  nextButton.on("click", function () {
    if (slide1.style.visibility == "") {
      if (
        $("#j3-1").is(":checked") &&
        ($("#j5-2").is(":checked") ||
          $("#j5-3").is(":checked") ||
          $("#j5-4").is(":checked") ||
          $("#j5-5").is(":checked") ||
          $("#j5-6").is(":checked") ||
          $("#j5-7").is(":checked")) &&
        j6.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
      }
      if (
        ($("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked")) &&
        ($("#j5-2").is(":checked") ||
          $("#j5-3").is(":checked") ||
          $("#j5-4").is(":checked") ||
          $("#j5-5").is(":checked") ||
          $("#j5-6").is(":checked") ||
          $("#j5-7").is(":checked")) &&
        j6.some(checked)
      ) {
        $(".w-slider-dot")[3].click();
        return !1;
      }
      if (
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        ($("#j5-2").is(":checked") ||
          $("#j5-3").is(":checked") ||
          $("#j5-4").is(":checked") ||
          $("#j5-5").is(":checked") ||
          $("#j5-6").is(":checked") ||
          $("#j5-7").is(":checked")) &&
        j6.some(checked) &&
        !threeB.some(checked)
      ) {
        $(".w-slider-dot")[4].click();
        return !1;
      }
    }
    if (slide0.style.visibility == "") {
      if ($("#j3-1").is(":checked") && $("#j5-8").is(":checked")) {
        $(".w-slider-dot")[3].click();
        return !1;
      }
      if ($("#j3-1").is(":checked") && $("#j5-1").is(":checked")) {
      }
      if (
        $("#j3-4").is(":checked") &&
        $("#j5-1").is(":checked") &&
        ($("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked"))
      ) {
        $(".w-slider-dot")[4].click();
        return !1;
      }
      if (
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        $("#j5-1").is(":checked") &&
        !fiveB.some(checked) &&
        !fiveA.some(checked)
      ) {
        $(".w-slider-dot")[4].click();
        return !1;
      }
      if (
        ($("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked")) &&
        $("#j5-8").is(":checked")
      ) {
        $(".w-slider-dot")[3].click();
        return !1;
      }
      if (
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        $("#j5-8").is(":checked")
      ) {
        $(".w-slider-dot")[4].click();
      }
      if (
        $("#j3-4").is(":checked") &&
        ($("#j5-1").is(":checked") || $("#j5-8").is(":checked")) &&
        !threeC.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
        return !1;
      }
    }
  });
  backButton.on("click", function () {
    scrollToTop();
    if (slide3.style.visibility == "") {
      if ($("#j3-1").is(":checked") && $("#j5-8").is(":checked")) {
        $(".w-slider-dot")[1].click();
      }
      if (
        $("#j3-1").is(":checked") &&
        $("#j5-1").is(":checked") &&
        !threeC.some(checked) &&
        !fiveB.some(checked)
      ) {
        $(".w-slider-dot")[1].click();
      }
      if (
        ($("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked")) &&
        $("#j5-2").is(":checked")
      ) {
        $(".w-slider-dot")[2].click();
      }
      if (
        ($("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked") ||
          $("#j3-7").is(":checked") ||
          $("#j3-8").is(":checked")) &&
        ($("#j5-1").is(":checked") || $("#j5-8").is(":checked"))
      ) {
        $(".w-slider-dot")[1].click();
      }
    }
    if (slide4.style.visibility == "") {
      if ($("#j3-1").is(":checked") && $("#j5-1").is(":checked")) {
        return !0;
      }
      if (
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        $("#j5-1").is(":checked")
      ) {
        $(".w-slider-dot")[1].click();
      }
      if (
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        $("#j5-2").is(":checked") &&
        j6.some(checked)
      ) {
        $(".w-slider-dot")[2].click();
      }
      if (
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        $("#j5-8").is(":checked")
      ) {
        $(".w-slider-dot")[1].click();
      }
      if (
        $("#j3-4").is(":checked") &&
        $("#j5-1").is(":checked") &&
        ($("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked"))
      ) {
        $(".w-slider-dot")[1].click();
      }
    }
  });
}
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
          $("#j5-7").is(":checked") ||
          $("#j5-8").is(":checked"))
      ) {
        return !0;
      }
    }
  });
  backButton.on("click", function () {
    if (slide2.style.visibility == "") {
      if ($("#j5-1").is(":checked") || $("#j5-8").is(":checked")) {
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
        return !0;
      }
      if (
        $("#j3-4").is(":checked") &&
        ($("#j3-1").is(":checked") ||
          $("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked") ||
          $("#j3-6").is(":checked")) &&
        !threeC.some(checked)
      ) {
        $("#j7").show();
        $("#j8").show();
        $("#j9").show();
        $("#j10").show();
        return !0;
      }
      if (
        $("#j3-4").is(":checked") &&
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        !threeA.some(checked)
      ) {
        $("#j8").hide();
        $("#j9").hide();
        $("#j10").show();
        return !0;
      }
      if (
        ($("#j3-1").is(":checked") ||
          $("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked")) &&
        ($("#j3-7").is(":checked") || $("#j3-8").is(":checked")) &&
        !threeB.some(checked) &&
        !fiveA.some(checked) &&
        !fiveB.some(checked)
      ) {
        $("#j8").show();
        $("#j9").show();
        $(".w-slider-dot")[3].click();
      }
    }
  });
  backButton.on("click", function () {
    scrollToTop();
    if (slide2.style.visibility == "") {
      if ($("#j3-4").is(":checked") && $("#j5-8").is(":checked")) {
        $(".w-slider-dot")[1].click();
      }
      if ($("#j3-4").is(":checked") && $("#j5-1").is(":checked")) {
      }
    }
    if (slide4.style.visibility == "") {
      if ($("#j3-1").is(":checked") && $("#j5-2").is(":checked")) {
        return !0;
      }
      if (
        ($("#j5-1").is(":checked") || $("#j5-8").is(":checked")) &&
        ($("#j3-1").is(":checked") ||
          $("#j3-2").is(":checked") ||
          $("#j3-3").is(":checked") ||
          $("#j3-5").is(":checked") ||
          $("#j3-6").is(":checked") ||
          $("#j3-7").is(":checked") ||
          $("#j3-8").is(":checked"))
      ) {
      }
    }
    if (slide3.style.visibility == "") {
      if ($("#j3-1").is(":checked") && $("#j5-2").is(":checked")) {
        $(".w-slider-dot")[2].click();
      }
      if ($("#j3-4").is(":checked") && $("#j5-1").is(":checked")) {
      }
    }
  });
}
function checkSlide0() {
  nextButton.on("click", function () {
    if (slide0.style.visibility == "") {
      if (
        j1.some(checked) &&
        j2.some(checked) &&
        j3.some(checked) &&
        j4.some(checked) &&
        j5.some(checked)
      ) {
        scrollToTop();
        return !0;
      } else {
        return !1;
      }
    }
  });
}
function checkSlide1() {
  nextButton.on("click", function () {
    if (slide1.style.visibility == "") {
      if (j6.some(checked)) {
        scrollToTop();
        return !0;
      } else {
        return !1;
      }
    }
  });
}
function checkSlide2() {
  nextButton.on("click", function () {
    if (slide2.style.visibility == "" && slide1.style.visibility !== "") {
      if (j7.some(checked)) {
        scrollToTop();
        return !0;
      } else {
        return !1;
      }
    }
  });
}
function checkSlide3() {
  nextButton.on("click", function () {
    if (slide3.style.visibility == "") {
      if (j8.some(checked) || j9.some(checked) || j10.some(checked)) {
        scrollToTop();
        return !0;
      } else {
        return !1;
      }
    }
  });
}
function j13select5() {
  $("[j13select5]").on("click", function () {
    if (document.querySelectorAll("[j13select5]:checked").length >= 5) {
      $("[j13select5]:not(:checked)").prop("disabled", !0);
    } else if (document.querySelectorAll("[j13select5]:checked").length < 5) {
      $("[j13select5]:not(:checked)").prop("disabled", !1);
    }
  });
}
function j14select5() {
  $("[j14select5]").on("click", function () {
    if (document.querySelectorAll("[j14select5]:checked").length >= 5) {
      $("[j14select5]:not(:checked)").prop("disabled", !0);
    } else if (document.querySelectorAll("[j14select5]:checked").length < 5) {
      $("[j14select5]:not(:checked)").prop("disabled", !1);
    }
  });
}
function checkSlide4() {
  nextButton.on("click", function () {
    if (slide4.style.visibility == "") {
      if (
        j11.some(checked) &&
        j12.some(checked) &&
        j13.some(checked) &&
        j14.some(checked) &&
        j15.some(checked)
      ) {
        scrollToTop();
        return !0;
      } else {
        return !1;
      }
    }
  });
}
function checkSlide5() {
  nextButton.on("click", function () {
    if (slide5.style.visibility == "") {
      if (
        j17.some(checked) &&
        j18.some(checked) &&
        j19.some(checked) &&
        j20.some(checked) &&
        j21.some(checked) &&
        j22.some(checked) &&
        j23.some(checked) &&
        j24.some(checked) &&
        j25.some(checked) &&
        j26.some(checked) &&
        j27.some(checked) &&
        j28.some(checked) &&
        j29.some(checked)
      ) {
        scrollToTop();
        return !0;
      } else {
        return !1;
      }
    }
  });
}
const field1 = document.getElementById("j30");
const field2 = document.getElementById("j31");
const pattern = field1.getAttribute("pattern");
var re = new RegExp(pattern);
function checkSlide6() {
  nextButton.on("click", function () {
    if (slide6.style.visibility == "") {
      if (re.test(field1.value) && re.test(field2.value)) {
      } else {
        $(".quiz-error-message").show();
        return !1;
      }
    }
  });
}
const field3 = document.getElementById("j32");
const submitButton = document.getElementsByClassName("submit-button-2");
function checkSlide7() {
  $("#wf-form-Quiz").submit(function () {
    if (slide7.style.visibility == "") {
      if (field3.value) {
      } else {
        $(".quiz-error-message-email").show();
        return !1;
      }
    }
  });
}
$(".w-slide").ready(function () {
  branching();
  zeroToTwo();
  oneToFour();
  allCombi();
  pairedCombi();
  doubleCombi();
  singleCombi();
  j13select5();
  j14select5();
  checkSlide0();
  checkSlide1();
  checkSlide2();
  checkSlide3();
  checkSlide4();
  checkSlide5();
  checkSlide6();
  errorMess();
});
let email = document.getElementById("j32");
function errorMess() {
  $("#j30").focusout(function () {
    if ($(this).val().match($(this).attr("pattern"))) {
      $("#q30 .quiz-error-message").hide();
      nextButton.on("click", function () {
        return !0;
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
      return !1;
    });
  } else if ($("#q31 .quiz-error-message").css("display") == "block") {
    nextButton.on("click", function () {
      return !1;
    });
  }
}
$("#wf-form-Quiz").submit(function () {
  if (slide7.style.visibility == "") {
    if (field3.value.length !== 0) {
      $("#loading").fadeIn(function () {
        $("#loading").css("display", "block");
      });
      $(".image-section-title").css("display", "none");
      $(".progress-bar-wrapper").css("display", "none");
      mailChimp(email.value);
      submitResponse(email.value);
      return !1;
    } else {
      $(".quiz-error-message-email").show();
      return !1;
    }
  }
});
$(".link-skip-text").on("click", function () {
  if (slide7.style.visibility == "") {
    $("#loading").fadeIn(function () {
      $("#loading").css("display", "block");
    });
    $(".image-section-title").css("display", "none");
    $(".progress-bar-wrapper").css("display", "none");
    submitResponse();
    return !1;
  } else {
    return !1;
  }
});
//Submit 
function submitResponse(userEmail) {
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
  values.push(userEmail);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([values]),
  };
  fetch(
    "https://v1.nocodeapi.com/fvdinnerparty/google_sheets/fwNICEvGHQNbFHGA?tabId=Form Responses",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var data = JSON.parse(result);
      pushToTT(data.row_id);
    })
    .catch((error) => console.log("error", error));
}
function pushToTT(result) {
  for (let i = 0; i < localStorageVariables.length; i++) {
    arr[localStorageVariables[i]] = localStorage.getItem(
      localStorageVariables[i]
    );
  }
  arr.row_id = result;
  var myNewHeaders = new Headers();
  myNewHeaders.append("Content-Type", "application/json");
  var newRequestOptions = {
    method: "put",
    headers: myNewHeaders,
    redirect: "follow",
    body: JSON.stringify(arr),
  };
  fetch(
    "https://v1.nocodeapi.com/fvdinnerparty/google_sheets/fwNICEvGHQNbFHGA?tabId=Typing Tool",
    newRequestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var data = JSON.parse(result);
      getArchtype(arr.row_id);
    })
    .catch((error) => console.log("error", error));
}
function getArchtype(data) {
  var getHeaders = new Headers();
  getHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: getHeaders,
    redirect: "follow",
  };
  fetch(
    "https://v1.nocodeapi.com/fvdinnerparty/google_sheets/fwNICEvGHQNbFHGA?tabId=Archetype outputs&row_id=" +
      `${data}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var newData = JSON.parse(result);
      social(newData);
      $("#loading").fadeOut(function () {
        $("#loading").css("display", "none");
      });
      $(".slider").css("display", "none");
      $("#archetype-image").attr("src", newData["Image w/o Title URL"]);
      $("#archetype").text(newData.Archetype);
      $("#name-responsive").text(newData.Archetype);
      $("#tagline").text(newData.Tagline);
      $("#tagline-responsive").text(newData.Tagline);
      $("#desc-right p:first-child").text(newData["Long Description"]);
      $("#archetype-wrapper").css("display", "block");
      $("#first-desc").text(newData["First Description"]);
      $("#second-desc").text(newData["Second Description"]);
      $("#third-desc").text(newData["Third Description"]);
      $("#social-image").attr("src", newData["Image w/ Title URL"]);
    })
    .catch((error) => console.log("error", error));
}
//Submit to Mailchimp
function mailChimp(userEmail) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch(
    "https://v1.nocodeapi.com/fvdinnerparty/mailchimp/nTKroieeGuSVDtCH/members?list_id=8660bae57b&email_address=" +
      `${userEmail}` +
      "&status=subscribed",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
$("#Share").on("click", function () {
  $("#modal").fadeIn(function () {
    $("#modal").css("display", "block");
  });
  $("#social-image").css("display", "block");
});
$(".icon-close").on("click", function () {
  $("#modal").css("display", "none");
});
$("#overlay").on("click", function () {
  $("#modal").css("display", "none");
});
$(document).on("load", function () {});
function social(newData) {
  let url = "https://www.forerunnerventures.com/thedinnerparty";
  let arche = newData.Archetype.toLowerCase();
  let capArche = newData.Archetype;
  $("[data-share-twitter").attr(
    "href",
    "https://twitter.com/share?text=I am the " +
      `${capArche}!` +
      " " +
      "Take The Dinner Party quiz to find out which modern consumer archetype you are, based on new research by @forerunnervc %23JoinTheParty &url=" +
      url +
      "/archetypes/" +
      arche
  );
  $("[data-share-twitter").attr("target", "_blank");
  $("[data-share-linkedin").attr(
    "href",
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
      url +
      "/archetypes/" +
      arche
  );
  $("[data-share-linkedin").attr("target", "_blank");
  $("[data-share-facebook").attr(
    "href",
    "https://www.facebook.com/sharer/sharer.php?display=popup&u=" +
      url +
      "/archetypes/" +
      arche
  );
  $("[data-share-facebook").attr("target", "_blank");
}
