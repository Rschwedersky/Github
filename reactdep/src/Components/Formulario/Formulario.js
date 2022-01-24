import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';

export const Formulario = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório').max(15, 'Máximo 15 caracteres'),
    dataNascimento: Yup.string().required('Campo obrigatório').max(15, 'Máximo 15 caracteres'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    celular: Yup.string().required('Campo obrigatório').min(8, 'Mínimo 8 caracteres'),
    endereco: Yup.object().shape({
      rua: Yup.string().required('Campo obrigatório').max(10, 'Máximo 10 caracteres'),
      numero: Yup.string().nullable(),
      complemento: Yup.string().nullable(),
      bairro: Yup.string().required('Campo obrigatório').max(10, 'Máximo 10 caracteres'),
      cidade: Yup.string().required('Campo obrigatório').max(10, 'Máximo 10 caracteres'),
      estado: Yup.string().required('Campo obrigatório').max(10, 'Máximo 10 caracteres'),
    }),
  });

  const initialValues = {
    nome: '',
    dataNascimento: '',
    email: '',
    celular:'',
    endereco: {
      rua: '',
      numero: '',
      complemento:'',
      bairro: '',
      cidade:'',
      estado:'',
    },
  };

  return (
    <>
      <h1>Formulário</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            {console.log('isValid', isValid)}

            <Field name="nome" placeholder="Nome" />
            <ErrorMessage name="nome" style={{ color: 'red' }} component="span" />
            
            <Field name="dataNascimento" placeholder="Data Nascimento" />
            <ErrorMessage name="dataNascimento" style={{ color: 'red' }} component="span" />

            <Field name="email" placeholder="E-mail" />
            <ErrorMessage name="email" style={{ color: 'red' }} component="span" />  

            <Field name="celular" placeholder="Celular" />
            <ErrorMessage name="celular" style={{ color: 'red' }} component="span" />

            <Field name="endereco.rua" placeholder="Rua" />
            <ErrorMessage name="endereco.rua" style={{ color: 'red' }} component="span" />

            <Field name="endereco.numero" placeholder="Numero" />
            <ErrorMessage name="endereco.numero" style={{ color: 'red' }} component="span" />
            
            <Field name="endereco.complemento" placeholder="Complemento" />
            <ErrorMessage name="endereco.complemento" style={{ color: 'red' }} component="span" />
           
            <Field name="endereco.bairro" placeholder="Bairro" />
            <ErrorMessage name="endereco.bairro" style={{ color: 'red' }} component="span" />
            
            <Field name="endereco.cidade" placeholder="Cidade" />
            <ErrorMessage name="endereco.cidade" style={{ color: 'red' }} component="span" />
            
            <Field name="endereco.estado" placeholder="Estado" />
            <ErrorMessage name="endereco.estado" style={{ color: 'red' }} component="span" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Enviar
            </button>

            <button type="button" disabled={isSubmitting} onClick={resetForm}>
              Limpar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};