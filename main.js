$(ready);

function ready() {
  const appContent = $(".app-content");
  const frame = $(".app-frame");
  const templates = $("#templates").children();

  let currentTemplateIndex = 0;

  setView(templates[currentTemplateIndex]); // Initial view

  $(".nav-toggler")
    .hover(() => {
      if (screen.width >= 768) frame.css("border-width", "75px 50px")
    })
    .mouseleave(() => {
      if (screen.width >= 768) frame.css("border-width", "10px")
    })
    .click(() => $(".nav-wrapper").toggleClass("nav-opened"));

  frame.bind("wheel", ({ originalEvent }) => {
    if (appContent.hasClass("animating")) return;

    const { deltaY } = originalEvent;

    if (deltaY >= 0 && currentTemplateIndex < templates.length - 1) {
      appContent.css("transform", "translateY(-100vh)").addClass("animating");
      currentTemplateIndex++;
      setTimeout(() => {
        setView(templates[currentTemplateIndex])
        appContent.css("transform", "translateY(0)").removeClass("animating");
      }, 500)
    } else if (deltaY < 0 && currentTemplateIndex > 0) {
      appContent.css("transform", "translateY(100vh)").addClass("animating");
      currentTemplateIndex--;
      setTimeout(() => {
        setView(templates[currentTemplateIndex])
        appContent.css("transform", "translateY(0)").removeClass("animating");
      }, 500)
    }
  });
}

function setView(template) {
  const [h1, p, img] = $(template).children();

  if (h1) $(".app-content .content-info h1").html(h1.innerText);
  if (p) $(".app-content .content-info p").html(p.innerText);

  if (img) {
    const src = $(img).attr("src");
    if (!src || (src && src.length < 1)) return;

    $(".app-bg-img").css("background-image", `url(${src})`);
    $(".app-content .content-media img").attr("src", src);
  }
}