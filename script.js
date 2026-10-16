// Arham Shah · Passport portfolio
// Small, dependency-free interactions: light/dark toggle, open the cover,
// XP bar, active page tab, stamp collecting and copy email.

(() => {
  const book = document.querySelector(".book");
  const cover = document.querySelector(".book__cover");
  /* ---------- Light / dark toggle ---------- */
  const root = document.documentElement;
  const themeBtn = document.querySelector(".theme");
  function labelTheme() {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    themeBtn.setAttribute("aria-label", `Switch to ${next} mode`);
  }
  themeBtn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: theme still switches */ }
    labelTheme();
  });
  // Follow the device setting live, unless the visitor has picked a theme themselves
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", e => {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (err) {}
    if (!saved) { root.dataset.theme = e.matches ? "dark" : "light"; labelTheme(); }
  });
  labelTheme();

  /* ---------- Open the passport ---------- */
  let opened = false;
  function openBook() {
    if (opened) return;
    opened = true;
    book.dataset.open = "true";
  }
  cover.addEventListener("click", openBook);
  // If someone scrolls straight past the cover, open it for them.
  window.addEventListener("scroll", () => { if (window.scrollY > 120) openBook(); }, { passive: true });

  /* ---------- XP bar = scroll progress ---------- */
  const xpFill = document.querySelector(".xp__fill");
  function updateXP() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    xpFill.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateXP, { passive: true });
  updateXP();

  /* ---------- Highlight current page in the top bar ---------- */
  const tabs = [...document.querySelectorAll(".topbar__tabs a")];
  const sections = tabs.map(a => document.querySelector(a.getAttribute("href")));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        tabs.forEach(t => t.classList.toggle("is-here", t.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => s && io.observe(s));
  }

  /* ---------- Stamp collecting ---------- */
  const stamps = [...document.querySelectorAll(".stamp")];
  const counter = document.querySelector(".stamp-count");
  function stampIt(el) {
    el.classList.remove("is-thud");
    void el.offsetWidth;            // restart the animation
    el.classList.add("is-stamped", "is-thud");
    el.setAttribute("aria-pressed", "true");
    const n = stamps.filter(s => s.classList.contains("is-stamped")).length;
    counter.textContent = `${n} of ${stamps.length} stamped`;
  }
  stamps.forEach(s => {
    s.setAttribute("aria-pressed", "false");
    s.addEventListener("click", () => stampIt(s));
  });

  /* ---------- Copy email ---------- */
  document.querySelectorAll(".copy").forEach(btn => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = "Copied";
      } catch {
        btn.textContent = "Select it above";
      }
      setTimeout(() => (btn.textContent = "Copy"), 2000);
    });
  });

})();
