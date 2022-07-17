import PropTypes from 'prop-types';

export function Button({
  type = 'button',
  content = '',
  className = '',
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
