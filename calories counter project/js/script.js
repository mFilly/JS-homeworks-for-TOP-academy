
document.querySelectorAll("input").forEach((item) => item.oninput = () => {
    //необходимые параметры
    const PhysicalActivityRatio = {
        min: 1.2,
        low: 1.375,
        medium: 1.55,
        high: 1.725,
        max: 1.9,
    };

    let age = Number(document.querySelector(`#age`).value);
    let height = Number(document.querySelector(`#height`).value);
    let weight = Number(document.querySelector(`#weight`).value);
    let activity = document.querySelector('input[name=activity]:checked').value;
    let activityRatio = PhysicalActivityRatio[activity];
    let gender = document.querySelector('input[name=gender]:checked').value;
    let genderChecked = document.querySelector('input[name=gender]:checked')

    let hiddenBlock = document.querySelector(`.counter__result`);

    const buttonSubmit = document.querySelector(`.form__submit-button`);
    const buttonReset = document.querySelector(`.form__reset-button`);

    //включение кнопки САБМИТ
    let enableSubmit = () => {
        if (age > 0 && height > 0 && weight > 0) {
            buttonSubmit.removeAttribute("disabled")
        }
    }
    enableSubmit();

    // вывод результатов по клику
    buttonSubmit.addEventListener(`click`, event => {
        // предотвращаем ошибку 
        event.preventDefault(); 

        //показываем спряттаную ранее дивку и вводим нужную инфу в формате округленных чисел
        hiddenBlock.classList.remove(`counter__result--hidden`);

        document.querySelector(`#calories-norm`).textContent = Math.round(keepWeight(gender, weight, height, activityRatio));
        document.querySelector(`#calories-minimal`).textContent = Math.round(loseWeight);
        document.querySelector(`#calories-maximal`).textContent = Math.round(gainWeight);
        
        //скролл к блоку с результатами
        buttonSubmit.scrollIntoView({ block: `center`, behavior: `smooth` });
    })

    //включение кнопки РЕСЕТ
    let enableReset = () => {
        if (age > 0 || height > 0 || weight > 0) {
            buttonReset.removeAttribute("disabled")
        }
    }
    enableReset();

    //удаление результатов и введенных данных по клику
    buttonReset.addEventListener(`click`, event => {
        //предотвращаем ошибку
        event.preventDefault();

        //прячем блок результаты и удаляем введенную инфу
        hiddenBlock.classList.add(`counter__result--hidden`);
        document.querySelector(`#age`).value = ``;
        document.querySelector(`#height`).value = ``;
        document.querySelector(`#weight`).value = ``;

        // по умолчанию пол мужской, нагрузка минимальная
        document.querySelectorAll('input[name=activity]')[0].checked = true;
        document.querySelectorAll('input[name=gender]')[0].checked = true;
        //отключение кнопок
        buttonSubmit.setAttribute("disabled");
        buttonReset.setAttribute("disabled");

        //скролл на начало страницы не работает
        buttonReset.scrollIntoView({ block: `start`, behavior: `smooth` });
    })

    //обнуление введенных значений при переключении на вкладку другого пола    
    genderChecked.addEventListener(`change`, () => {

        hiddenBlock.classList.add(`counter__result--hidden`);
        document.querySelector(`#age`).value = ``;
        document.querySelector(`#height`).value = ``;
        document.querySelector(`#weight`).value = ``;
    })

    //формулы для рассчета
    let keepWeight = (gender, weight, height, activityRatio) => {
        if (gender === `male`) {
            return ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activityRatio;
        } else {
            return ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activityRatio;
        }
    }

    let loseWeight = keepWeight(gender, weight, height, activityRatio) * 0.85;

    let gainWeight = keepWeight(gender, weight, height, activityRatio) * 1.15;
})