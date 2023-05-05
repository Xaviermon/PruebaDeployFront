import './Paginado.css'

const Paginado = ({ pokemons, pokemonsPerPage, paginado,setCurrentPag, currentPag }) => {
  const pagNumber = [];
  
  for (let i = 1; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
    pagNumber.push(i);
  }
  function handlePrev() {
    setCurrentPag(currentPag => currentPag > 1 ? currentPag - 1 : currentPag);
  }
  function handleNext() {
    setCurrentPag(currentPag => currentPag < pagNumber.length ? currentPag + 1 : currentPag);
  }
  return (
    <nav className="nav-paginado">
      <ul>
        <button className="button_pag" onClick={handlePrev}>Prev</button>
        {pagNumber &&
          pagNumber.map((number) =>(
              <button key={number} className="button_pag" onClick={()=> paginado(number)}>{number}</button>
          ))}
      <button className="button_pag" onClick={handleNext}>Next</button>
      </ul>
    </nav>
  );
};

export default Paginado;