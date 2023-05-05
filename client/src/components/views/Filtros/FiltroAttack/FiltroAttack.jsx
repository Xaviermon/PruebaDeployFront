import './FiltroAttack.css'
import { useDispatch } from "react-redux";
import { filterPerAttack } from "../../../../redux/actions/actions";

const FiltroAttack = ({ setCurrentPag, setOrderRating, orderRating }) => {
  const dispatch = useDispatch();

  const handlerFilterAttack = (event) => {
    setOrderRating(event.target.id);
    dispatch(filterPerAttack(event.target.id))
    setCurrentPag(1)
  };

  return (
    <div className='container-attack'>
      <label className='label-attack1' htmlFor="up">
        <input
          type="radio"
          id="up"
          name="orderRating"
          checked={orderRating === "up"}
          onChange={(event) => handlerFilterAttack(event)}
        />
        Ascending Attacks
      </label>
      <label className='label-attack2' htmlFor="down">
        <input
          className='input-radio'
          type="radio"
          id="down"
          name="orderRating"
          checked={orderRating === "down"}
          onChange={(event) => handlerFilterAttack(event)}
        />
        Descending Attacks
      </label>
    </div>
  );
};

export default FiltroAttack;
