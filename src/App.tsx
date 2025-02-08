import { sysThemeSelector, userThemeSelector } from "./utils/utils";
import Routes from "./routes";

function App() {
  const theme = localStorage.getItem("theme");

  if (theme) {
    userThemeSelector(theme);
  } else {
    sysThemeSelector();
  }

  return (
    <div className="bg-primary flex justify-center items-center h-max max-w-screen">
      <Routes />
    </div>
  );
}

export default App;
