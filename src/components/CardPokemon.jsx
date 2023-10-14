import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const CardPokemon = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;
  const navigate = useNavigate();

  const ClickPokemonts = () => {
    navigate(`/Pokemones`);
  };

  return (
    <>
     
        <section className="pokemonCard text-center my-3 d-flex justify-content-center " >
          <Card className="card">
            <article>
              <Card.Img className="pokemonCardImg" src={src} alt={name} />
            </article>
            <article className="pokemonDetails">
              <Card.Body>
                <Card.Title className="text-capitalize"><strong>{name}</strong></Card.Title>
                <Card.Text>
                  {stats?.map((stat, i) => (
                    <div key={i}>
                      <strong className="text-capitalize">{stat.name}</strong>:
                      {stat.base}
                    </div>
                  ))}
                </Card.Text>
                <Card.Text>{types}</Card.Text>
              </Card.Body>
            </article>
          </Card>
        </section>
        <Button onClick={ClickPokemonts}>Back to selection</Button>
     
    </>
  );
};

export default CardPokemon;
