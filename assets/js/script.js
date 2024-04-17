function showProjectOverview(id) {
  var overview = document.getElementById(id);
  overview.classList.add("project-overview-visible");
}

function hideProjectOverview(id) {
  var overview = document.getElementById(id);
  overview.classList.remove("project-overview-visible");
}

document.addEventListener("DOMContentLoaded", function () {
  var overviewButtons = document.querySelectorAll(".overview-button");
  var projectOverviews = document.querySelectorAll(".project-overview");

  overviewButtons.forEach(function (overviewButton) {
    overviewButton.addEventListener("mouseenter", function () {
      var targetId = overviewButton.getAttribute("data-target");
      showProjectOverview(targetId);
    });

    overviewButton.addEventListener("mouseleave", function () {
      var targetId = overviewButton.getAttribute("data-target");
      hideProjectOverview(targetId);
    });
  });

  projectOverviews.forEach(function (projectOverview) {
    projectOverview.addEventListener("mouseenter", function () {
      showProjectOverview(projectOverview.id);
    });

    projectOverview.addEventListener("mouseleave", function () {
      hideProjectOverview(projectOverview.id);
    });
  });
});
