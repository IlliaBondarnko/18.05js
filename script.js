// 1)Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.

const slider = document.querySelector(".slider__input")

slider.addEventListener("input", _.debounce(onInput, 3000))

function onInput(e) {
    const val = e.target.value
    const img = document.getElementById("img");
    const multiplicator = 1 + val / 150
    const res = 450 * multiplicator
    img.style.height = `${res}px`;
    img.style.width = `${res}px`;
}


// 2)Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. Рішення: Використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яка буде виконуватися при переміщенні мишкою.

const box = document.getElementById("box");

document.addEventListener("mousemove", _.debounce(moveObject, 100));

function moveObject(e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x)
    console.log(y)
    box.style.left = `${x-25}px`;
    box.style.top = `${y-25}px`;
};
