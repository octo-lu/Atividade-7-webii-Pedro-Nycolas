// src/App.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { FormData } from './types/form';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Dados submetidos:', data);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <Step1 control={control} error={errors.name?.message} />}
        {step === 2 && <Step2 control={control} error={errors.email?.message} />}
        {step === 3 && <Step3 control={control} error={errors.age?.message} />}

        <div className="navigation">
          {step > 1 && (
            <button type="button" onClick={() => setStep(prev => prev - 1)}>
              Voltar
            </button>
          )}
          
          {step < 3 ? (
            <button type="button" onClick={() => setStep(prev => prev + 1)}>
              Próximo
            </button>
          ) : (
            <button type="submit">Enviar</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default App;