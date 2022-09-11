const Header = () => {
  return (
    <header>
      <h1 className="mt-4 p5 bg-dark text-white rounded">All Current Services</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
    </header>
  )
}
 
export default Header;