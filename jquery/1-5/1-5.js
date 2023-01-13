$(() => {
    let container = $(
      "<div>This content will appear and disappear when the div is slide in and out.</div>"
    ).css({
      "background-color": "gray",
      padding: "2rem",
    });
    let slideUp = $("<button>Slide up</button>").on("click", function () {
      container.slideUp(500);
    });
    let slideDown = $("<button>Slide down</button>").on("click", function () {
      container.slideDown(500);
    });
    let slideToggle = $("<button>Slide toggle</button>").on("click", function () {
      container.slideToggle(500);
    });
    let text = $(
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio unde doloribus in voluptas dolorum? Quia, minima molestiae? Necessitatibus recusandae adipisci omnis minus? At excepturi vitae nemo incidunt, eaque non necessitatibus?</p>"
    );
    $("body")
      .append(container)
      .append(text)
      .append(slideUp)
      .append(slideDown)
      .append(slideToggle)
  });