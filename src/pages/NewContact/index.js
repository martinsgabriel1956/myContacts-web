import { Button } from '../../component/Button';
import { Select } from '../../components/Input/Select';
import { Input } from '../../components/Input/index';
import { PageHeader } from '../../components/PageHeader';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" />
      <Select as="select">
        <option value="1">Instagram</option>
        <option value="2">Instagram</option>
        <option value="3">Instagram</option>
      </Select>
      <Button type="button">Salvar alterações</Button>
      <Button type="button" disabled>Salvar alterações</Button>
    </>
  );
}
