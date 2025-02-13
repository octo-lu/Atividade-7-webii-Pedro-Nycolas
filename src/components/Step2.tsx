import { useController, Control } from 'react-hook-form';
import { FormData } from '../types/form';
import { useEffect, useState } from 'react';

type Props = {
  control: Control<FormData>;
  error?: string;
};

const Step2 = ({ control, error }: Props) => {
  const { field } = useController({
    name: 'email',
    control,
    rules: {
      required: 'Email obrigatório',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Email inválido'
      }
    }
  });

  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  useEffect(() => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(field.value));
  }, [field.value]);

  return (
    <div className="step">
      <label>Email:</label>
      <input {...field} placeholder="exemplo@email.com" />
      {error && <p className="error">{error}</p>}
      {isValidEmail === false && <p className="error">Email inválido</p>}
      {isValidEmail === true && <p className="success">Email válido!</p>}
    </div>
  );
};

export default Step2;
