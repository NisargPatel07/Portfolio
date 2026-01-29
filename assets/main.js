const LINKS = {
    resume: "https://drive.google.com/file/d/1n4Jp6K33p_qrFjnvlUPMXTKnHRtMFSNC/view?usp=sharing",
    github: "https://github.com/NisargPatel07",
    linkedin: "https://www.linkedin.com/in/nisargpatel07131511/",
    email: "nisargpatelnp.112003@gmail.com",
    phone: "(224)-266-8703"
  };
  
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  
  const resumeBtn = document.getElementById("resumeBtn");
  const githubBtn = document.getElementById("githubBtn");
  const linkedinBtn = document.getElementById("linkedinBtn");
  const githubLink = document.getElementById("githubLink");
  const linkedinLink = document.getElementById("linkedinLink");
  const emailText = document.getElementById("emailText");
  
  if (resumeBtn) resumeBtn.href = LINKS.resume;
  if (githubBtn) githubBtn.href = LINKS.github;
  if (linkedinBtn) linkedinBtn.href = LINKS.linkedin;
  if (githubLink) githubLink.href = LINKS.github;
  if (linkedinLink) linkedinLink.href = LINKS.linkedin;
  if (emailText) emailText.textContent = LINKS.email;
  
  const phoneEls = document.querySelectorAll("#phoneText");
  phoneEls.forEach(el => el.textContent = LINKS.phone);
  
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(LINKS.email);
        copyEmailBtn.textContent = "Copied";
        setTimeout(() => (copyEmailBtn.textContent = "Copy"), 900);
      } catch {
        copyEmailBtn.textContent = "Failed";
        setTimeout(() => (copyEmailBtn.textContent = "Copy"), 900);
      }
    });
  }
  
  function setTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }
  
  const themeBtn = document.getElementById("themeBtn");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) setTheme(savedTheme);
  
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      setTheme(cur === "light" ? "dark" : "light");
    });
  }
  
  const pills = Array.from(document.querySelectorAll(".pill"));
  const cards = Array.from(document.querySelectorAll(".card[data-tags]"));
  
  function applyFilter(tag) {
    pills.forEach(p => p.classList.toggle("active", p.dataset.filter === tag));
    cards.forEach(c => {
      const tags = (c.dataset.tags || "").split(" ");
      c.style.display = tag === "all" || tags.includes(tag) ? "flex" : "none";
    });
  }
  
  pills.forEach(p => {
    p.addEventListener("click", () => applyFilter(p.dataset.filter));
  });
  
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");
  
  const QUICK = {
    soclite: {
      title: "SOCLite — SOC Detection & Response",
      body:
        "SOCLite simulates SOC detection workflows by analyzing authentication logs. " +
        "It detects brute force, password spray, and impossible travel patterns, creates prioritized alerts, " +
        "and supports triage via a dashboard."
    },
    incident: {
      title: "Incident Forecaster — Incident Risk Prediction",
      body:
        "Incident Forecaster trains a model on system metrics to predict incident risk. " +
        "It includes feature engineering, model evaluation, and a dashboard that ranks hosts by risk."
    },
    health: {
      title: "System Health Monitor — Monitoring + Ticketing",
      body:
        "System Health Monitor continuously checks disk and CPU health and automatically creates tickets " +
        "when thresholds are crossed, persisting incidents in a database for review."
    }
  };
  
  function openModal(key) {
    if (!modal || !modalTitle || !modalBody) return;
    const item = QUICK[key];
    if (!item) return;
    modalTitle.textContent = item.title;
    modalBody.textContent = item.body;
    modal.classList.add("show");
  }
  
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
  }
  
  document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.modal));
  });
  
  if (modalClose) modalClose.addEventListener("click", closeModal);
  
  if (modal) {
    modal.addEventListener("click", e => {
  