"use strict";

$(document).ready(function () {
  // 헤더에 my눌렀을때
  $(".mypage-con").click(function () {
    $(".my-info").show();
  }); // 메인 로그인 버튼 눌렀을 때

  $(".login-group__con > button").click(function () {
    $(".sign-wrap__login").show();
  });
  $(".close").click(function () {
    $(".sign-wrap__login").hide();
  }); //    //

  $(".search-box input").on("change keydown paste input", function () {
    $(this).closest(".search-box").next(".search-result-list").show();

    if ($(".search-box input").val() == "") {
      $(this).closest(".search-box").next(".search-result-list").hide();
    }
  });
  $(".select-design").select2({
    minimumResultsForSearch: -1
  });
  $(".add-info-box a").on("click", function () {
    var getThis = $(this).children().find("i");
    var getClass = getThis.attr("class");

    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).children().find("i").addClass(getClass + "-active");
    }
  });
  $(".accordion-agree .item").click(function () {
    $(this).toggleClass("active").siblings().removeClass("active");
  }); // datepicker

  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    nextText: "다음 달",
    prevText: "이전 달",
    currentText: "오늘 날짜",
    closeText: "닫기",
    dateFormat: "yy-mm-dd",
    showMonthAfterYear: true,
    dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
  });
  $("#datepicker .highlight a").tooltip("disable");
  $(".more-dot").click(function () {
    $(this).addClass("active");
  });
  $("html").click(function (e) {
    if ($(e.target).parents(".more-dot").length < 1) {
      $(".more-dot").removeClass("active");
    }
  });
}); // 채팅창 모바일

$(".message-list .list li").click(function () {
  $(".message-content").addClass("active");
});
$(".opponent .back").click(function () {
  $(".message-content").removeClass("active");
});