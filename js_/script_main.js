$(function () {
  $(".serchs").focus(function () {
    console.log("focus");
    $(".serch > div").css("display", "none")
    $(".serch > input::placeholder").css("padding", "10px")
  });
  $(".serchs").blur(function () {
    $(".serch > div").css("display", "block")
  });
});
