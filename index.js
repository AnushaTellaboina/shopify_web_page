document.addEventListener("DOMContentLoaded", function () {
  var shopifySection = document.getElementById("shopifySection");
  var advancedSection = document.getElementById("advancedSection");
  shopifySection.style.display = "none";
  advancedSection.style.display = "none";

  var anchors = document.querySelectorAll(".anchor");
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      var target = anchor.getAttribute("href");

      var basicSection = document.getElementById("basicSection");
      basicSection.style.display = "none";
      shopifySection.style.display = "none";
      advancedSection.style.display = "none";

      document.querySelector(target).style.display = "block";
    });
  });
});
