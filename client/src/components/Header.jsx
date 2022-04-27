import Logo from "../assets/logo.png";


export default function Header() {
  //const { isLogedIn, setIsLogedIn} = useContext(LogInContext);

  //header content depends on if user is logged in or not
  /*  function HeaderContent(){
  if (isLogedIn = false) {
    return (
      <div style={{ display: "flex", marginRight: "2rem" }}>
        <p>Log In</p>
        <p style={{ paddingRight: "1rem", paddingLeft: "1rem" }}> | </p>
        <p>Sign Up</p>
      </div>
    );
} else {
  return (
    <div style={{ display: "flex", marginRight: "2rem", flexDirection: "column"}}>
        <p>Logged in as xxx</p>
        <div>
        <div>
        <Link to={'/createpost'} style={{ textDecoration: 'none', color: "black" }}>
          <MdPostAdd size={30} color="#87204D" />
          <p>Create new post</p>
        </Link>
        </div>
        <div>
          <Link
            to={"/myposts"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <FaGlasses size={30} color="#87204D" />
            <p>My posts</p>
          </Link>
        </div>
        </div>
      </div>
  )
}
} */

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
