import './FiltroName.css'
import { useDispatch } from "react-redux";
import { filterPerName } from "../../../../redux/actions/actions";

const FiltroName = ({ setCurrentPag, setOrderName }) => {
  const dispatch = useDispatch()

  const handlerFilterName = (event) =>{
    event.preventDefault();
    dispatch(filterPerName(event.target.value))
    setCurrentPag(1)
    setOrderName(event.target.value)
  }

  return (
    <div className="select-name">
      <label>
        <select name="format" onChange={(event)=> handlerFilterName(event) }>
          <option value="-">Name</option>
          <option value="up">A-Z</option>
          <option value="down">Z-A</option>
        </select>
      </label>
      <div className='select_arrow'></div>
    </div>
  );
};

export default FiltroName;
