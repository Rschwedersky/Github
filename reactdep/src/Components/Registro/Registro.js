import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAuth } from "../../contexts/auth";
import { Botao, Model } from './Registro.styles';


import * as Yup from 'yup';

export const Registro = () => {
    const {dados, dark, setDados, count, setCount, cadastroAberto, setCadastroAberto} = useAuth();

  const handleSubmit = (values, { setSubmitting }) => {
  
        values.id= count;
        setDados([...dados, values]);
        setCount(count+1);
        setSubmitting(false);
    
        
  
     /* setTimeout(() => {
        values.id= count;
        console.log(values);
        setCount(count+1);
        alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000); */
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório').max(15, 'Máximo 15 caracteres'),
    descricao: Yup.string().required('Campo obrigatório').max(15, 'Máximo 15 caracteres'),
    
  });

  const initialValues = {
    nome: '',
    descricao: '',
    seguindo: false,
  };

  return (
    <Model show={cadastroAberto}>
      <h1>Registro</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            {console.log('isValid', isValid)}

            <Field name="nome" placeholder="Nome" />
            <ErrorMessage name="nome" style={{ color: 'red' }} component="span" />
            
            <Field name="descricao" placeholder="Descricao" />
            <ErrorMessage name="descricao" style={{ color: 'red' }} component="span" />

            <Botao dark={dark} type="submit" disabled={isSubmitting || !isValid}>
              Enviar
            </Botao>

            <Botao dark={dark} type="button" disabled={isSubmitting} onClick={resetForm}>
              Limpar
            </Botao>
          </Form>
        )}
      </Formik>
      <Botao onClick={()=>setCadastroAberto(false)}>Fechar Cadastro</Botao>
    </Model>
  );
};
