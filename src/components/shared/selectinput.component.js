import React from 'react';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{defaultOption}</option>
        {
          options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
        }
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);

SelectInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  defaultOption: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default SelectInput;
