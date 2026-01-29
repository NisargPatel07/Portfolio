(function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", async () => {
        const email = copyEmailBtn.getAttribute("data-email") || "";
        if (!email) return;
  
        try {
          await navigator.clipboard.writeText(email);
          copyEmailBtn.textContent = "Copied";
          setTimeout(() => (copyEmailBtn.textContent = "Copy"), 900);
        } catch {
          copyEmailBtn.textContent = "Failed";
          setTimeout(() => (copyEmailBtn.textContent = "Copy"), 900);
        }
      });
    }
  
    const pills = Array.from(document.querySelectorAll(".pill"));
    const cards = Array.from(document.querySelectorAll(".card[data-tags]"));
  
    function applyFilter(tag) {
      pills.forEach((p) => p.classList.toggle("active", p.dataset.filter === tag));
      cards.forEach((c) => {
        const tags = (c.dataset.tags || "").split(" ");
        c.style.display = tag === "all" || tags.includes(tag) ? "flex" : "none";
      });
    }
  
    pills.forEach((p) => {
      p.addEventListener("click", () => applyFilter(p.dataset.filter));
    });
  })();
  