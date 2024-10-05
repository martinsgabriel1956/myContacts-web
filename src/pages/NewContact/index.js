import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';
import { useNewContactController } from './useNewContactController';

export function NewContact() {
  const {
    handleSubmit,
    contactFormRef,
  } = useNewContactController();

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
        ref={contactFormRef}
      />
    </>
  );
}
