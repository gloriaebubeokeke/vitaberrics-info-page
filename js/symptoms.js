const recommendations = {
  stress: "Ashwagandha",
  fatigue: "Magnesium",
  immunity: "Vitamin C",
  skin: "Biotin",
  sleep: "Magnesium",
  muscles: "Magnesium"
};

document.getElementById("checkBtn").addEventListener("click", () => {
  const checked = [...document.querySelectorAll("input[type='checkbox']:checked")]
    .map(cb => cb.value);

  const resultBox = document.getElementById("result");

  if (checked.length === 0) {
    resultBox.innerHTML = "<p>Please select at least one symptom.</p>";
    resultBox.classList.remove("hidden");
    return;
  }

  const suggested = new Set();
  checked.forEach(symptom => {
    if (recommendations[symptom]) {
      suggested.add(recommendations[symptom]);
    }
  });

  resultBox.innerHTML = `
    <h3>Recommended Supplement</h3>
    <p>${[...suggested].join(", ")}</p>
    <a href="./supplements.html">View Supplement Details</a>
  `;

  resultBox.classList.remove("hidden");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
  document.getElementById("result").classList.add("hidden");
});
