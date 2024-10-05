import {
  forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import { Select } from '../Input/Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Form, ButtonContainer } from './styles';
import { useContactFormController } from './useContactFormController';

export const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    name,
    email,
    phone,
    categoryId,
    categories,
    isLoadingCategories,
    isSubmitting,
    isFormValid,
    getErrorMessageByFieldName,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleCategoryIdChange,
    handleSubmit,
  } = useContactFormController(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup
        error={getErrorMessageByFieldName('name')}
      >
        <Input
          value={name}
          placeholder="Nome *"
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup
        error={getErrorMessageByFieldName('email')}
      >
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={handleCategoryIdChange}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem Categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
