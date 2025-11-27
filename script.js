let tall = document.getElementById("tall"),
    weight = document.getElementById("weight"),
    btn = document.getElementById("btn"),
    massNum = document.getElementById("result_num"),
    massText = document.getElementById("result_text");

btn.addEventListener("click", () => {
    massNum.innerHTML = "";
    massText.innerHTML = "";
    let mass = Number((weight.value / Math.pow(tall.value, 2)).toFixed(1));
    let result = "";

    if (mass < 18) {
        result = "نحافة";
        massText.style.backgroundColor = "#4FA3F7";
    } else if (mass >= 18 && mass <= 24.9) {
        result = "وزن مثالي";
        massText.style.backgroundColor = "#4CAF50";
    } else if (mass >= 25 && mass <= 29.9) {
        result = "وزن زائد";
        massText.style.backgroundColor = "#FFC107";
    } else if (mass >= 30 && mass <= 34.9) {
        result = "سمنة درجة أولى";
        massText.style.backgroundColor = "#FF9800";
    } else if (mass >= 35 && mass <= 39.9) {
        result = "سمنة درجة ثانية";
        massText.style.backgroundColor = "#F44336";
    } else {
        result = "سمنة خطيرة";
        massText.style.backgroundColor = "#D32F2F";
    }

    massNum.style.display = "block";
    massText.style.display = "block";
    massNum.innerHTML = mass;
    massText.innerHTML = result;
});