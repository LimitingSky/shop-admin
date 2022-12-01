import { useEffect, useState } from "react";
import { SelectOption, SelectProps } from "./select";

export const useSelect = (props: SelectProps) => {
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [value, setValue] = useState(props.select ?? "placeholder");

  const onchange = (event) => {
    const newValue = event.target.value
    setValue(newValue);
    props.onChange(newValue)
  };

  useEffect(() => {
    const newOptions = [...props.options];
    const hasPlaceholder = newOptions.find(
      ({ value }) => value === "placeholder"
    );
    if (!hasPlaceholder) {
      newOptions.unshift({
        label: props.placeholder ?? "Select ...",
        value: "placeholder",
      });
    } else {
        newOptions[0].label = props.placeholder ?? "Select ..."
    }
    setOptions(newOptions);
  }, [props.options,props.placeholder]);

  return {
    value,
    onchange,
    options,
  };
};
