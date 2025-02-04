document.addEventListener("DOMContentLoaded", function () {
  // Animatie la scroll pentru sectiuni
  const sections = document.querySelectorAll("section");

  function revealSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.85) {
        section.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();

  // Efect hover pe imagini
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
      img.style.transition = "transform 0.3s ease-in-out";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });

  // Mod întunecat
  const darkModeButton = document.createElement("button");
  darkModeButton.textContent = "🌙 Mod Întunecat";
  darkModeButton.style.position = "fixed";
  darkModeButton.style.top = "10px";
  darkModeButton.style.right = "10px";
  darkModeButton.style.padding = "10px 15px";
  darkModeButton.style.background = "#333";
  darkModeButton.style.color = "#fff";
  darkModeButton.style.border = "none";
  darkModeButton.style.cursor = "pointer";
  document.body.appendChild(darkModeButton);

  darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeButton.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Mod Luminos"
      : "🌙 Mod Întunecat";
  });

  // Animație de scriere pentru titlul principal
  const title = document.querySelector("header h1");
  if (title) {
    let text = title.textContent;
    title.textContent = "";
    let i = 0;
    function typeEffect() {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
      }
    }
    typeEffect();
  }
});
