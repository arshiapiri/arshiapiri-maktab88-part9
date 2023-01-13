function createGreenDiv(innerText, cb) {
    return $(`<div><p>${innerText}</p></div>`)
      .css({
        "background-color": "#00d900",
        padding: "1rem",
        border: "1px solid black",
        height: "80%",
      })
      .css(cb());
  }
  
  $(() => {
    let grandParent = createGreenDiv("Parent node's text.", () => {
      return { width: "600px", margin: "10px" };
    });
    let parent = createGreenDiv("The target node.", () => {
      return { width: "550px" };
    });
    let child = createGreenDiv("The main node's child text.", () => {
      return { width: "500px" };
    });
    grandParent.append(parent.append(child));
    let parentCopyBtn = $("<button>Copy parent text</button>").on("click", () => {     
      $(":first-child", parent)[0].innerText =
        $(":first-child", grandParent)[0].innerText +
        $(":first-child", parent)[0].innerText +
        $(":first-child", child)[0].innerText +
        $(":first-child", parent)[0].innerText;
    });
    let childCopyBtn = $("<button>Copy child text</button>").on("click", () => {
      $(":first-child", parent)[0].innerText =
        $(":first-child", child)[0].innerText +
        $(":first-child", parent)[0].innerText;
    });
    $("body").append(grandParent).append(parentCopyBtn).append(childCopyBtn);
  });