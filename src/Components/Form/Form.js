import React from 'react';

import "./__input/form__input.css";
import "./form.css";


const Form = () => {
  return (
    <div className="form">
      <h2 className="form__title">Форма</h2>
      <form action="submit">
						<div className="form__inputs">
              <input className="form__input" type="text" placeholder="Имя и фамилия автора" minlength="2" maxlength="30" required/>
              <input className="form__input" type="email" placeholder="Почта" minlength="5" required/>
              <input className="form__input" type="tel" placeholder="Телефон" required maxlength="11"/>
              <textarea className="form__input form__input_textarea" type="textarea" placeholder="Стихи"></textarea>
						</div>
						<div class="checkbox">
							<label>
								<input id="1" className="invisible-checkbox" type="checkbox"/>
								<span className="visible-checkbox"></span>
								<span className="form__label-text">Согласен с офертой</span>
							</label>
						</div>
					<button className="form__submit" type="submit">Отправить</button>
				</form>
    </div>
  )
}

export default Form;