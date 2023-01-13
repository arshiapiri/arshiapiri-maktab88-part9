$(() => {
    let container = $(
      "<div>This content will appear and disappear when the div is faded in and out.</div>"
    ).css({
      "background-color": "#c4c4c4",
      padding: "2rem 1rem",
    });
    let fadeIn = $("<button>Fade In</button>").on("click", function () {
      container.fadeIn(300);
    });
    let fadeOut = $("<button>Fade Out</button>").on("click", function () {
      container.fadeOut(300);
    });
    let text = $(
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio unde doloribus in voluptas dolorum? Quia, minima molestiae? Necessitatibus recusandae adipisci omnis minus? At excepturi vitae nemo incidunt, eaque non necessitatibus?</p>"
    );
    $("body").append(container).append(text).append(fadeIn).append(fadeOut);
  });