$(ready);

function ready() {
  const frame = $(".app-frame");
  const templates = $("#templates").children();

  const fadeOut = (selector, speed) => new Promise((resolve) => $(selector).fadeOut(speed, resolve));
  const fadeIn = (selector, speed) => new Promise((resolve) => $(selector).fadeIn(speed, resolve));

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

  frame.bind("wheel", (wheelEvent) => {
    console.log(wheelEvent)
    const { deltaY } = wheelEvent.originalEvent;
    const update = () => fadeOut(".app-content", "fast")
      .then(() => {
        setView(templates[currentTemplateIndex])
        fadeIn(".app-content", "fast")
      });

    if (deltaY >= 0 && currentTemplateIndex < templates.length - 1) {
      currentTemplateIndex++;
      update()
    } else if (deltaY < 0 && currentTemplateIndex > 0) {
      currentTemplateIndex--;
      update()
    }
  })
}

function preloadImages() {
  
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