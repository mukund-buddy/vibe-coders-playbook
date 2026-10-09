/* Vibe Coder's Playbook — copy buttons + scroll-spy contents rail */
(function () {
  "use strict";

  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(message);
    } catch (e) {
      showToast("Clipboard blocked — select and copy manually.");
    }
  }

  /* Copy the 10 rules as plain text */
  const copyAll = document.getElementById("copyAll");
  if (copyAll) {
    copyAll.addEventListener("click", () => {
      const lines = ["The Vibe Coder's Playbook — the 10 rules", ""];
      document.querySelectorAll("#rulesList li").forEach((li) => {
        const h = li.querySelector("h3");
        const p = li.querySelector("p");
        const num = lines.filter((l) => /^\d+\./.test(l)).length + 1;
        lines.push(num + ". " + (h ? h.textContent.trim() : ""));
        if (p) lines.push("   " + p.textContent.trim());
        lines.push("");
      });
      copyText(lines.join("\n"), "All 10 rules copied.");
    });
  }

  /* Copy the prompt template */
  const copyTemplate = document.getElementById("copyTemplate");
  if (copyTemplate) {
    copyTemplate.addEventListener("click", () => {
      const text = document.getElementById("templateText").textContent;
      copyText(text, "Prompt template copied.");
      const old = copyTemplate.textContent;
      copyTemplate.textContent = "Copied ✓";
      setTimeout(() => (copyTemplate.textContent = old), 1400);
    });
  }

  /* Scroll-spy: highlight the current section in the rail */
  const links = Array.from(document.querySelectorAll(".rail a"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.intersectionRatio));
        let bestId = null;
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        links.forEach((a) =>
          a.classList.toggle("active", bestId !== null && a.getAttribute("href") === "#" + bestId)
        );
      },
      { rootMargin: "-84px 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
  }
})();
