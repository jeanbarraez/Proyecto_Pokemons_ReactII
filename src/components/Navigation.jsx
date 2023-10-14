import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import pokemon from "../assets/image/pokemon.jpeg"
export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar
      className="d-flex justify-content-between px-5 barra"
      variant="light"
      style={{ background: "#58585a" }}
    >
      <Container>
        <Navbar.Brand>
        <img width="50" src={pokemon} alt="pokemon" className="pokemon" />
        </Navbar.Brand>
        <div>
          <Navbar.Brand>
            <NavLink style={{textDecoration: 'none'}} to="/" className={setActiveClass} >
              Home
            </NavLink>
            <NavLink style={{textDecoration: 'none'}} to="/pokemones" className={setActiveClass}>
              Pokemones
            </NavLink>
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}
