const translations = {
  tr: {
    title: "Merhaba, Ben Ahmet",
    about: "Bu site benim biyografi ve üniversite projelerimi içerir.",
    nav_home: "Ana Sayfa",
    nav_projects: "Projeler",
    nav_about: "Hakkımda",
    nav_contact: "İletişim",
    chatbot_title: "Yapay Zeka Asistanı",
    chatbot_placeholder: "Bir şey sor..."
  },
  en: {
    title: "Hello, I'm Ahmet",
    about: "This website contains my biography and university projects.",
    nav_home: "Home",
    nav_projects: "Projects",
    nav_about: "About Me",
    nav_contact: "Contact",
    chatbot_title: "AI Assistant",
    chatbot_placeholder: "Ask something..."
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  const input = document.getElementById("chatInput");
  if (input) input.placeholder = translations[lang].chatbot_placeholder || input.placeholder;

  const btnTr = document.getElementById("btnTr");
  const btnEn = document.getElementById("btnEn");
  if (btnTr && btnEn) {
    if (lang === "tr") {
      btnTr.className = "btn btn-primary btn-sm";
      btnEn.className = "btn btn-outline-primary btn-sm";
    } else {
      btnTr.className = "btn btn-outline-primary btn-sm";
      btnEn.className = "btn btn-primary btn-sm";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "tr";
  setLanguage(lang);
});
