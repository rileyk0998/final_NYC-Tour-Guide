const appContainer = $(".app-container");
const appNav = $(".app-nav");
const bgDimmer = $(".app-bg-dimmer");

$(".nav-toggler")
  .hover(() => bgDimmer.css("border-width", "75px 50px"))
  .mouseleave(() => bgDimmer.css("border-width", "10px"))
  .click(function () {
    const toggler = $(this);

    if (!toggler.hasClass("nav-opened")) {
      toggler.addClass("nav-opened");
      appContainer.css("transform", "translateY(40%)");
    } else {
      toggler.removeClass("nav-opened");
      appContainer.css("transform", "initial");
    }
  });

$(".app-container").scroll(function (scrollEvent) {

});
