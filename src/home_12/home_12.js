import "./home_12.scss";

function toggleButtonColor(el) {
  el.style.backgroundColor =
    el.style.backgroundColor == "yellow" ? "" : "yellow";
}

document.getElementById("button").onclick = function() {
  toggleButtonColor(document.querySelector(".lamp"));
};
