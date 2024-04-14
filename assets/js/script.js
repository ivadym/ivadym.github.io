function showProjectOverview(id) {
  var overview = document.getElementById(id);
  overview.classList.add("project-overview-visible");
}

function hideProjectOverview(id) {
  var overview = document.getElementById(id);
  overview.classList.remove("project-overview-visible");
}

document.addEventListener("DOMContentLoaded", function () {
  var projectOverviews = document.querySelectorAll(".project-overview");

  projectOverviews.forEach(function (projectOverview) {
    projectOverview.addEventListener("mouseenter", function () {
      showProjectOverview(projectOverview.id);
    });

    projectOverview.addEventListener("mouseleave", function () {
      hideProjectOverview(projectOverview.id);
    });
  });
});
