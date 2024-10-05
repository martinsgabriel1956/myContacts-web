import { ContactForm } from '../../components/ContactForm';
import { Loader } from '../../components/Loader';
import { PageHeader } from '../../components/PageHeader';
import { useEditContactController } from './useEditContactController';

export function EditContact() {
  const {
    contactFormRef,
    contactName,
    handleSubmit,
    isLoading,
  } = useEditContactController();

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
