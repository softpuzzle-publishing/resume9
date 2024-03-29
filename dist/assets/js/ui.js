"use strict";

$(document).ready(function () {
  // 헤더에 my눌렀을때

  $(".mypage-con").click(function () {
    $(".my-info").show();
  });
  // 메인 로그인 버튼 눌렀을 때
  $(".login-group__con > button").click(function () {
    $(".sign-wrap__login").show();
  });
  $(".close").click(function () {
    $(".sign-wrap__login").hide();
  });
  //    //

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
  });

  // datepicker
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
  $(".more-dot").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("html").click(function (e) {
    if ($(e.target).parents(".more-dot").length < 1) {
      $(".more-dot").removeClass("active");
    }
  });

  // 치환태그
  $("#replacement-btn").click(function () {
    $(".replacement-tag-notice").addClass("active");
  });
  $(".replacement-tag-notice .close").click(function () {
    $(".replacement-tag-notice").removeClass("active");
  });
});

// 채팅창 모바일
$(".message-list .list li").click(function () {
  $(".message-content").addClass("active");
});
$(".opponent .back").click(function () {
  $(".message-content").removeClass("active");
});

// 관심헤드헌터
$(".open-btn").click(function () {
  $(this).closest(".headhunter-profile-list").toggleClass("active");
});
$(".top-btn").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 400);
  return false;
});

// 모바일 메뉴버튼

$(".mobile-menu").click(function () {
  // $(".mobile-menu__wrap").show();
  $(".mobile-menu__wrap").addClass("active");
});
$(".close-btn").click(function () {
  $(".mobile-menu__wrap").removeClass("active");
});