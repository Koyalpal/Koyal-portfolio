function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");

  if (recommendation.value && recommendation.value.trim() !== "") {
    console.log("New recommendation added");
    showPopup(true);

    const element = document.createElement("div");
    element.className = "recommendation";
    element.innerHTML =
      "<span>&#8220;</span>" +
      recommendation.value +
      "<span>&#8221;</span>";

    document.getElementById("all_recommendations").appendChild(element);

    recommendation.value = "";
  }
}

function showPopup(bool) {
  const popup = document.getElementById("popup");
  popup.style.display = bool ? "flex" : "none";

  if (bool) {
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  }
}
