$(() => {
    $(".dropdown").hover(
      function () {
        console.log("aha");
        $(this).children(".drop-content").slideDown("");
      },
      function () {
        console.log("aha");
        $(this).children(".drop-content").slideUp("");
      }
    );
  });