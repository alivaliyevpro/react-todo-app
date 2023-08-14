import DarkModeIcon from "../../images/icon-moon.svg";
import LightModeIcon from "../../images/icon-sun.svg";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <h1>TODO</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        <img
          src={darkMode ? LightModeIcon : DarkModeIcon}
          alt="DarkMode toggle"
        />
      </button>
    </header>
  );
};

export default Header;
