import { useController, Control } from 'react-hook-form';
import { FormData } from '../types/form';

type Props = {
  control: Control<FormData>;
  error?: string;
};

const Step1 = ({ control, error }: Props) => {
  const { field } = useController({
    name: 'name',
    control,
    rules: { required: 'Nome obrigatório' }
  });

  return (
    <div className="step">
      <label>Nome Completo:</label>
      <input {...field} placeholder="Digite seu nome" />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Step1;