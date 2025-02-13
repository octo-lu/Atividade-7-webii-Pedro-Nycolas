// src/components/Step3.tsx
import { useController, Control } from 'react-hook-form';
import { FormData } from '../types/form';

type Props = {
  control: Control<FormData>;
  error?: string;
};

const Step3 = ({ control, error }: Props) => {
  const { field } = useController({
    name: 'age',
    control,
    rules: {
      required: 'Idade obrigatória',
      min: { value: 18, message: 'Você deve ter pelo menos 18 anos' }
    }
  });

  return (
    <div className="step">
      <label>Idade:</label>
      <input {...field} type="number" placeholder="Digite sua idade" />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Step3;