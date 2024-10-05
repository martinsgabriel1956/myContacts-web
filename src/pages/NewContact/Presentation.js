import PropTypes from 'prop-types';
import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

export function Presentation({
  onSubmit,
  contactFormRef,
}) {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={onSubmit}
        ref={contactFormRef}
      />
    </>
  );
}

Presentation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactFormRef: PropTypes.shape({}).isRequired,
};
