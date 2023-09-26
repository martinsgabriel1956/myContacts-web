import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input } from '../Input';
import { Select } from '../Input/Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Form, ButtonContainer } from './styles';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');

  return (
    <Form>
      <FormGroup>
        <Input
          name={name}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup
        error="O formato do e-mail é invalido"
      >
        <Input placeholder="E-mail" error />
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
