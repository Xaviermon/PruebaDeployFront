import { useDispatch } from "react-redux";
import { filterPerCreated } from "../../../../redux/actions/actions";

const FilterCreated = ({ setCurrentPag }) => {
  const dispatch = useDispatch();
  
  const handlerFilterCreated = (event) =>{
    dispatch(filterPerCreated(event.target.value))
    setCurrentPag(1)
  }

  return (
    <div className="select-name">
      <label>
        <select onChange={(event)=> handlerFilterCreated(event)}>
          <option value="All">All Pokemons</option>
          <option value="true">Created</option>
          <option value="false">API</option>
        </select>
      </label>
      <div className='select_arrow'></div>
    </div>
  );
};

export default FilterCreated