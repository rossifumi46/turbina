import React from 'react';
import { Formik } from 'formik';

const  validator = require('validator');
const style = {
    fontStyle: 'normal',
}
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
                        errors.name = 'Обязательное поле';
                    }
                    if (!values.email) {
                        errors.email = 'Обязательное поле';
                    } else if (!validator.isEmail(values.email)) {
                        console.log(values.email)
                        errors.email = 'Неверный email';
                    }
                    if (!values.phone) {
                        errors.phone = 'Обязательное поле';
                    } else if (!validator.isMobilePhone(values.phone)) {
                        errors.phone = 'Неверный номер телефона';
                    }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setStatus('ok');
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isValid,
                    dirty,
                    isSubmitting,
                    status
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form__inputs">
                            <input
                                id="name"
                                name="name"
                                className={`form__input ${touched.name && errors.name ? 'form__input_error' : null}`}
                                type="text"
                                placeholder="Имя и фамилия автора"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.name && errors.name ? <p className="form__error">{errors.name}</p> : null}
                            <input
                                id="email"
                                name="email"
                                className={`form__input ${touched.email && errors.email ? 'form__input_error' : null}`}
                                type="email" placeholder="Почта"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email ? <p className="form__error">{errors.email}</p> : null}
                            <input
                                id="phone"
                                name="phone"
                                className={`form__input ${touched.phone && errors.phone ? 'form__input_error' : null}`}
                                type="tel"
                                placeholder="Телефон"
                                value={values.phone}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.phone && errors.phone ? <p className="form__error">{errors.phone}</p> : null}
                            <textarea className="form__input form__input_textarea" placeholder="Стихи"></textarea>
                        </div>
                        <div className="form__checkbox">
                            <label>
                                <input id="1" className="form__invisible-checkbox" type="checkbox"/>
                                <span className="form__visible-checkbox"></span>
                                <span className="form__label-text">Согласен с <a className="form__label-text_link"href="#">офертой</a></span>
                            </label>
                        </div>
                        <button style={status === 'ok' ? style : null} className="form__submit" type="submit" disabled={!(isValid && dirty ) || isSubmitting}>{status === 'ok' ? 'Ура, форма отправлена!' : 'Отправить форму'}</button>
                        {status === 'bad' ? <p className="form__error">Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!</p> : null}
                    </form>
                )}
            </Formik>

        </div>
    )
}

export default Form;