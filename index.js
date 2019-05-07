// const appContainer = $(".app-container");
const bgDimmer = $(".app-bg-dimmer");

$(".nav-toggler")
  .hover(() => bgDimmer.css("border-width", "75px 50px"))
  .mouseleave(() => bgDimmer.css("border-width", "10px"))
  .click(function() {

  });

$(".app-container").scroll(function(scrollEvent) {

});
