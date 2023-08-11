// components/Select.tsx
import React, { useState, ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  isMulti?: boolean;
  placeholder?: string;
  onChange?: (selectedValue: string | string[]) => void;
}

const Select: React.FC<SelectProps> = ({ options, isMulti = false, placeholder = 'Select...', onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);

    setSelectedOptions(selectedValues);

    if (onChange) {
      onChange(isMulti ? selectedValues : selectedValues[0]);
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select multiple={isMulti} value={selectedOptions} onChange={handleSelectChange}>
        {placeholder && !isMulti && <option value="">{placeholder}</option>}
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
