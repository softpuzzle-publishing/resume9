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
});