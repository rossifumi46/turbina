import React from 'react';
import { Formik } from 'formik';

const Form = () => {

    return (
        <div className="form">
            <h2 className="form__title">Форма</h2>
            <p className="form__ps">Заполняя эту форму, вы становитесь частью проекта.</p>
            <Formik
                initialValues={
                    {
                        name: '',
                        email: '',
                        phone: '',
                    }
                }
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.name)) {
                        errors.name = 'Invalid name';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.phone)) {
                        errors.phone = 'Invalid phone';
                    }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form__inputs">
                            <input
                                id="name"
                                name="name"
                                className="form__input"
                                type="text"
                                placeholder="Имя и фамилия автора"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.name && errors.name ? <div>{errors.name}</div> : null}
                            <input
                                id="email"
                                name="email"
                                className="form__input"
                                type="email" placeholder="Почта"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email ? <div>{errors.email}</div> : null}
                            <input
                                id="phone"
                                name="phone"
                                className="form__input"
                                type="tel"
                                placeholder="Телефон"
                                value={values.phone}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.name && errors.phone ? <div>{errors.phone}</div> : null}
                            <textarea className="form__input form__input_textarea" placeholder="Стихи"></textarea>
                        </div>
                        <div className="form__checkbox">
                            <label>
                                <input id="1" className="form__invisible-checkbox" type="checkbox"/>
                                <span className="form__visible-checkbox"></span>
                                <span className="form__label-text">Согласен с <a className="form__label-text_link"
                                                                                    href="#">офертой</a></span>
                            </label>
                        </div>
                        <button className="form__submit" type="submit">Отправить</button>
                    </form>
                )}
            </Formik>

        </div>
    )
}

export default Form;