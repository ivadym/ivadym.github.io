function showProjectOverview(id) {
  var overview = document.getElementById(id);
  overview.classList.add("project-overview-visible");
}

function hideProjectOverview(id) {
  var overview = document.getElementById(id);
  overview.classList.remove("project-overview-visible");
}
