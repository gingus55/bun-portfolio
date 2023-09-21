import("../styles/nav.css");
import myJpeg from "/PixelChris.jpg";

const Nav = () => {
  return (
    <header>
      <img
        src={myJpeg}
        id="myJpeg"
        alt="a stylish ginger man with glasses and a coffee mug"
      />
      <h3>Chris Bradshaw</h3>
    </header>
  );
};

export default Nav;
