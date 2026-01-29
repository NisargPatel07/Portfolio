(function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (!copyEmailBtn) return;
  
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
  })();

  