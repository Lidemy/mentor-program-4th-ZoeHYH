import { ToggleButtonGroup, ToggleButton, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_CONTENT } from "../constants/text";
import { FILTER_KEY } from "../constants/variables";
import { filterSet } from "../redux/actionCreators";
import { selectCount, selectTodos } from "../redux/selectors";

export default function Filter() {
  const filter = useSelector(selectTodos);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const handleFilterOnchange = (value) => dispatch(filterSet(value));
  return (
    <ToggleButtonGroup
      type="radio"
      name="filter"
      value={filter}
      onChange={handleFilterOnchange}
    >
      <ToggleButton value={FILTER_KEY.ALL} variant="outline-secondary">
        {FILTER_CONTENT.ALL}
        <Badge className="ml-1" variant="light">
          {count.ALL}
        </Badge>
      </ToggleButton>
      <ToggleButton value={FILTER_KEY.DONE} variant="outline-secondary">
        {FILTER_CONTENT.DONE}
        <Badge className="ml-1" variant="light">
          {count.DONE}
        </Badge>
      </ToggleButton>
      <ToggleButton value={FILTER_KEY.UNDONE} variant="outline-secondary">
        {FILTER_CONTENT.UNDONE}
        <Badge className="ml-1" variant="light">
          {count.UNDONE}
        </Badge>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
