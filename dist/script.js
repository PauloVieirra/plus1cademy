$(function () {
 $(".sidebar-link").click(function () {
  $(".sidebar-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(window)
 .resize(function () {
  if ($(window).width() > 1090) {
   $(".sidebar").removeClass("collapse");
  } else {
   $(".sidebar").addClass("collapse");
  }
 })
 .resize();

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
 v.addEventListener("mouseover", () => {
  const video = v.querySelector("video");
  video.play();
 });
 v.addEventListener("mouseleave", () => {
  const video = v.querySelector("video");
  video.pause();
 });
});






$(function () {
 $(".logo, .logo-expand, .discover").on("click", function (e) {
    $(".main-container-full").removeClass("show");
    $(".main-container").removeClass("show");
    $(".container-export").removeClass("show");
    $(".main-container").removeClass("noshow");
    $(".container-export").removeClass("hint");
  $(".main-container").scrollTop(0);
  $(".streaming").addClass("is-active");
 });


 $(".trending, .video").on("click", function (e) {
  $(".main-container").addClass("show");
  $(".main-container").addClass("noshow");
  $(".container-export").removeClass("show");
  $(".container-export").removeClass("hint");
  $(".stream-area").addClass("show");
  $(".main-container").scrollTop(0);
  $(".trending").addClass("is-active");
 });



 $(" .streaming").on("click", function (e) {
    $(".main-container").removeClass("show");
    $(".main-container").addClass("noshow");
    $(".container-export").addClass("hint");
    $(".container-export").removeClass("show");
    $(".main-container").scrollTop(0);
    $(".streaming").addClass("is-active");
   });


   $(" .quartview").on("click", function (e) {
    $(".container-export").addClass("show");
    $(".container-export").addClass("hint");
    $(".main-container").removeClass("show");
    $(".main-container").addClass("noshow");
    $(".quertview").addClass("is-active");
   });
  


 $(".video").click(function () {
  var source = $(this).find("source").attr("src");
  var title = $(this).find(".video-name").text();
  var person = $(this).find(".video-by").text();
  var img = $(this).find(".author-img").attr("src");
  $(".video-stream video").stop();
  $(".video-stream source").attr("src", source);
  $(".video-stream video").load();
  $(".video-p-title").text(title);
  $(".video-p-name").text(person);
  $(".video-detail .author-img").attr("src", img);
 });


});