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
      <ToggleButton value={FILTER_KEY.all} variant="outline-secondary">
        {FILTER_CONTENT.all}
        <Badge className="ml-1" variant="light">
          {count.all}
        </Badge>
      </ToggleButton>
      <ToggleButton value={FILTER_KEY.done} variant="outline-secondary">
        {FILTER_CONTENT.done}
        <Badge className="ml-1" variant="light">
          {count.done}
        </Badge>
      </ToggleButton>
      <ToggleButton value={FILTER_KEY.undone} variant="outline-secondary">
        {FILTER_CONTENT.undone}
        <Badge className="ml-1" variant="light">
          {count.undone}
        </Badge>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
