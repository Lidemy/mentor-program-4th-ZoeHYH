import { ToggleButtonGroup, ToggleButton, Badge } from "react-bootstrap";
import { useContext } from "react";
import { FilterContext } from "../TodoList/TodoList";

export default function Filter() {
  const [count, select, handleSelect, FILTER_CONTENT] = useContext(
    FilterContext
  );
  const handleFilterOnchange = (value) => handleSelect(value);
  return (
    <ToggleButtonGroup
      type="radio"
      name="filter"
      value={select}
      onChange={handleFilterOnchange}
    >
      <ToggleButton value={FILTER_CONTENT[0].value} variant="outline-secondary">
        {FILTER_CONTENT[0].name}
        <Badge className="ml-1" variant="light">
          {count[0]}
        </Badge>
      </ToggleButton>
      <ToggleButton value={FILTER_CONTENT[1].value} variant="outline-secondary">
        {FILTER_CONTENT[1].name}
        <Badge className="ml-1" variant="light">
          {count[1]}
        </Badge>
      </ToggleButton>
      <ToggleButton value={FILTER_CONTENT[2].value} variant="outline-secondary">
        {FILTER_CONTENT[2].name}
        <Badge className="ml-1" variant="light">
          {count[2]}
        </Badge>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
