import React from 'react';


const Form = () => {
    return (
        <div className="form">
            <h2 className="form__title">Форма</h2>
            <p className="form__ps">Заполняя эту форму, вы становитесь частью проекта.</p>
            <form action="submit">
                <div className="form__inputs">
                    <input className="form__input" type="text" placeholder="Имя и фамилия автора" required/>
                    <input className="form__input" type="email" placeholder="Почта" required/>
                    <input className="form__input" type="tel" placeholder="Телефон"/>
                    <textarea className="form__input form__input_textarea" type="textarea"
                              placeholder="Стихи"></textarea>
                </div>
                <div className="checkbox">
                    <label>
                        <input id="1" className="invisible-checkbox" type="checkbox"/>
                        <span className="visible-checkbox"></span>
                        <span className="form__label-text">Согласен с <a className="form__label-text_link"
                                                                         href="#">офертой</a></span>
                    </label>
                </div>
                <button className="form__submit" type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Form;