const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const steps = [
  ">> Step 1: Code pushed to main branch...",
  ">> Step 2: GitHub Actions triggered...",
  "[OK] Step 3: Checking index.html — FOUND",
  "[OK] Step 4: Checking style.css — FOUND",
  "[OK] Step 5: Checking script.js — FOUND",
  ">> Step 6: Uploading site files...",
  ">> Step 7: Deploying to GitHub Pages...",
  "[DONE] Pipeline complete! Site is LIVE"
];
btn.addEventListener("click", () => {
  msg.classList.remove("hidden");
  msg.textContent = "";
  btn.disabled = true;
  btn.textContent = "Running...";
  let i = 0;
  const interval = setInterval(() => {
    msg.textContent += steps[i] + "\n";
    i++;
    if (i >= steps.length) {
      clearInterval(interval);
      btn.disabled = false;
      btn.textContent = "Trigger Pipeline";
    }
  }, 500);
});
