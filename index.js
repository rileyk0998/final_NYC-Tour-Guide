const appContainer = $(".app-container");
const bgDimmer = $(".app-bg-dimmer");

$(".nav-toggler")
  .hover(() => bgDimmer.css("border-width", "75px 50px"))
  .mouseleave(() => bgDimmer.css("border-width", "5px"))
  .click(() => $(".nav-wrapper").toggleClass("nav-opened"));

$(".app-container").scroll(function (scrollEvent) {

});
