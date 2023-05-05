import './Error.css'
import imgError from '../../img/Error.png'

const Modal = ({getAllPokemons, dispatch}) => {
  return(
    <div className='container-error'>
      <div className='con-img-error'>
        <img className='img-error' src={imgError} alt="error" />
      </div>
      <div className='con-button-error'>
        <h1>We have not found</h1>
        <h1>pokemons in this area</h1>
        <button className='con-button-error-button' onClick={()=> dispatch(getAllPokemons())} >Esta historia contuniara...!! </button>
      </div>
    </div>
  )
};


export default Modal;