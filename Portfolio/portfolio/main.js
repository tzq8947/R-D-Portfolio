
function showContent(id) {
  $("div#home")
  .removeClass(id == "home" ? "hide" : "show")
  .addClass(id == "home" ? "show" : "hide");
    $("div#about")
      .removeClass(id == "about" ? "hide" : "show")
      .addClass(id == "about" ? "show" : "hide");
    $("div#research")
      .removeClass(id == "research" ? "hide" : "show")
      .addClass(id == "research" ? "show" : "hide");
    $("div#planning")
      .removeClass(id == "planning" ? "hide" : "show")
      .addClass(id == "planning" ? "show" : "hide");
    $("div#communication")
      .removeClass(id == "communication" ? "hide" : "show")
      .addClass(id == "communication" ? "show" : "hide");
    $("div#devandqa")
      .removeClass(id == "devandqa" ? "hide" : "show")
      .addClass(id == "devandqa" ? "show" : "hide");
      $("div#Presentation")
      .removeClass(id == "Presentation" ? "hide" : "show")
      .addClass(id == "Presentation" ? "show" : "hide");
      $("div#Team_Workbooks")
      .removeClass(id == "Team_Workbooks" ? "hide" : "show")
      .addClass(id == "Team_Workbooks" ? "show" : "hide");
      $("div#Reflection")
      .removeClass(id == "Reflection" ? "hide" : "show")
      .addClass(id == "Reflection" ? "show" : "hide");
  }

  