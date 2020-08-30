import {useState} from 'react';

/** this hook is used with Yup - form validation library */
const useForm = (validationSchema) => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (submitFunction) => {
    if (validationSchema && validationSchema.validate) {
      validationSchema
        .validate(formValues, {abortEarly: false})
        .then(() => {
          setFormErrors({});
          submitFunction(formValues);
        })
        .catch((yupErrors) => {
          const errors = {};
          yupErrors.inner.forEach((error) => {
            if (!errors[error.path]) {
              errors[error.path] = error.message;
            }
          });
          setFormErrors(errors);
        });
    }
  };

  const handleFormValueChange = (inputValue, inputName) => {
    setFormValues({...formValues, [inputName]: inputValue});
    setFormErrors({...formErrors, [inputName]: null});
  };

  const mergeFormValues = (values) => {
    setFormValues({
      ...formValues,
      ...values,
    });
  };

  const mergeFormErrors = (errors) => {
    setFormErrors({
      ...formErrors,
      ...errors,
    });
  };

  return {
    formValues,
    formErrors,
    setFormValues: mergeFormValues,
    setFormErrors: mergeFormErrors,
    handleFormValueChange,
    handleSubmit,
  };
};

export default useForm;
