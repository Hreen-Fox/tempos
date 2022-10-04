let projectName = "© ООО «Учебно-производственный центр 68»";

function render(url, block, pageName, component = false) {
  if (!component) {
    $.each($("#navItems a"), function (k, v) {
      if (v.pathname == "/" + url) $(v).addClass("active");
    });
    url = "views/" + url;
    document.title = projectName + " - " + pageName;
  }
  $.ajax({
    url: `./components/${url}.html`,
    method: "get",
    success: function (data) {
      $(`#${block}`).html(data);
    },
  });
}

if(document.location.pathname == '/') render("banner", "banner", "", true);
render("sidebar", "sidebar", "", true);
render("loginform", "loginform", "", true);
render("registerform", "registerform", "", true);

switch (window.location.pathname) {
  case "/":
    render("main", "content", "Главна");
    $($("#navItems a")[0]).addClass("active");
    break;

  case "/kursi":
    render("kursi", "content", "Курсы");
    break;

  case "/informations":
    render("informations", "content", "О нас");
    break;

  case "/contacts":
    render("contacts", "content", "Контакты");
    break;

  default:
    render("main", "content", "Главная");
    $($("#navItems a")[0]).addClass("active");
    break;
}

$(document).ready(function () {
  let temp = $("*#projectName");
  for (i = 0; i < temp.length; i++) {
    $(temp[i]).html(projectName);
  }
});