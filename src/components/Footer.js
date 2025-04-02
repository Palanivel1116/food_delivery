import User from "./User";
import UserClass from "./UserClass";
const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <p>
          Copyright &copy; {currYear}, Made with 💗 by <strong>Palani</strong>
        </p>
      </footer>
    );
  };
  
  export default Footer;