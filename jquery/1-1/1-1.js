$(() => {
    let div = $("<div>Click me and watch the text changes!</div>")
      .css({
        "background-color": "green",
        color: "white",
        border: "1px solid black",
        width: "300px",
        height: "100px",
        overflow: "hidden",
      })
      .on("click", function () {
        this.append("Click added some text!");
      });
  
    $("body").append(div);
  });
