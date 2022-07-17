import PropTypes from 'prop-types';
import { Form } from './Form.styled';
import { Button } from 'components/Button/Button';

export function FormElement({
  initValues = {},
  btnContent = '',
  onSubmit = function (e, formHandler, successHandler) {
    e.preventDefault();
    formHandler({});
    successHandler(e);
  },
  children,
}) {
  return (
    <Form onSubmit={onSubmit}>
      {children}
      <Button type="submit" content={btnContent} className="btn" />
    </Form>
  );
}

FormElement.propTypes = {
  initValues: PropTypes.object,
  btnContent: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.element,
};
