import logo from "../logo.svg";

export default function Header() {
  return (
    <header id="main-header" class="header">
      <img src={logo} alt="solid js logo" class="logo" />
      <h1>My Solid JS</h1>
    </header>
  );
}
