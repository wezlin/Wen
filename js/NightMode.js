let LineAll = document.querySelectorAll(".LineColor");

function NightMode() {
  ButtonLightOn = document.getElementById("NightViewButtonTop").innerHTML;
  if (ButtonLightOn == "LightOn") {
    document.getElementById("Body").style.background = "#FFFFFF";
    document.getElementById("RectangleBackground").style.background = "#f7f9fc";
    document.getElementById("RectangleBackground2").style.background ="#f7f9fc";
    document.getElementById("LineSection").color = "#e9eaf3";
    document.getElementById("NightViewButtonTop").innerHTML = "NightView";
  } else {
    document.getElementById("Body").style.background = "#171717";
    document.getElementById("RectangleBackground").style.background = "#202124";
    document.getElementById("RectangleBackground2").style.background ="#202124";
    document.getElementById("LineSection").color = "#171717";
    document.getElementById("NightViewButtonTop").innerHTML = "LightOn";
  }
}
