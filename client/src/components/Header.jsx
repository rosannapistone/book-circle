import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "7rem",
      }}
    >
      <img
        src={Logo}
        alt=""
        style={{ display: "flex", height: "5rem", margin: "1rem" }}
      />
      <div style={{ display: "flex", marginRight: "2rem" }}>
        <p>Log In</p>
        <p style={{ paddingRight: "1rem", paddingLeft: "1rem" }}> | </p>
        <p>Sign Up</p>
      </div>
    </header>
  );
}
