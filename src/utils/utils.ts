export const sysThemeSelector = (): void => {
  // On page load or when changing themes
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html")?.setAttribute("data-theme", "dark");
  } else {
    document.querySelector("html")?.setAttribute("data-theme", "base");
  }
};

export const userThemeSelector = (theme: string): void => {
  document.querySelector("html")?.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const themeRemover = (): void => {
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
};
