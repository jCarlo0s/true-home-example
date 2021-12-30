import propTypes from 'prop-types';

const Select = ({ defaultOption, options, elementClass, onChange, disabled = false }) => {
    const renderOptions = options.map(option => <option key={option.pk} value={option.pk}>{option.name}</option>)
    return (
        <select disabled={disabled} className={elementClass} onChange={(e) => { onChange(e.target.value) }}>
            <option value=''>{defaultOption}</option>
            {renderOptions}
        </select>
    )
}

Select.propTypes = {
    defaultOption: propTypes.string,
    options: propTypes.array.isRequired,
    elementClass: propTypes.string,
}

export default Select