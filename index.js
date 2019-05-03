$(ready.bind(this))

function ready() {
  console.log("DOM Ready!")

  const app = $("#app");
  const appContainer = $(".app-container");
  const views = [...document.querySelectorAll(".view")];

  let currentView = 0;

  app.bind("wheel", (wheelEvent) => {
    const { deltaY } = wheelEvent.originalEvent;

    if (
      (deltaY > 0 && currentView >= views.length) ||
      (deltaY < 0 && currentView < 0)
    ) return;

    deltaY >= 0 ? currentView++ : currentView--;

    const thisView = views[currentView];

    if (!thisView) return;

    appContainer.html($(thisView).html());
  })
}