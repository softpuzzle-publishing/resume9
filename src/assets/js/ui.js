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
});
