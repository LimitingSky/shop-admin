import { useSelect } from "./useSelect";

export interface SelectProps<T = SelectOption[]> {
  placeholder: string;
  options: T;
  onChange: Function;
  select?: string | number;
  className?: string
}

export type SelectOption = {
  value: string | number;
  label: string;
};

export const Select: React.FC<SelectProps> = (props) => {
  const { onchange, value, options } = useSelect(props);

  return (
    <select
      className={`form-select rounded-lg pr-10 py-3 ${props.className}`}
      onChange={onchange}
      value={value}
    >
      {options.map((option, index) => {
        if(option.value==='placeholder'){
        <option key={option.value} value={option.value} disabled hidden>
            {option.label}
          </option>
        }
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

Select.defaultProps = {
  options: [
    {
      label: "text 1",
      value: "1",
    },
    {
      label: "text 2",
      value: "2",
    },
  ],
  className: ''
};
