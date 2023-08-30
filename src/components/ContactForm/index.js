import PropTypes from 'prop-types';
import { Input } from '../Input';
import { Select } from '../Input/Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Form, ButtonContainer } from './styles';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="insta">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
