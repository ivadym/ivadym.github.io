function showProjectOverview(id) {
  var element = document.getElementById(id);
  element.classList.remove("roject-overview-hidden");
  element.classList.add("project-overview-visible");
}

function hideProjectOverview(id) {
  var element = document.getElementById(id);
  element.classList.remove("project-overview-visible");
  element.classList.add("roject-overview-hidden");
}
