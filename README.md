# Тестовое задание FunBox

## Level I

> Q1
>
> Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения пользователя, менеджера проекта, дизайнера, верстальщика, клиентского программиста, серверного программиста.

Для пользователя: скорость загрузки сайта, корректное отображение, удобство использования, интерфейс должен быть интуитивно понятным, чтоб пользователь понимал что происходит на экране.

Для менеджера: сайт должен соответствовать ТЗ заказчика.

Для дизайнера: в идеале дизайн должнен быть удобнен как для пользователя,
так и валиден для верстки разработчками интерфейсов.

Для верстальщика: верстка правильно работает на всех устройствах и браузерах.

Для клиентского программиста: правильно реализованая логика, нет багов, сайт выполняет все свои функции по ТЗ .

Для серверного программиста: сайт не нагружает сервер большим количеством запросов,
данные корректно обрабатываются и передаются на сервер.

---

> Q2
>
> Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.
>
> Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Для разработки хорошего сайта требуется слаженная работа команды.
Все участники команды должны обсудить все аспекты, требования по ТЗ, архитектуру, дизайн, данные которые будут отображены пользователю, все переходы между состояниями в приложении.
При проектирования дизайна интерефейса нужно соблюдать правила адаптивности, кроссбраузерности, предусмотрено как сайт должен отображаться на разных устройствах,
какие элементы интерактивны, т.е дизайнер и разработчик должны синхронизироваться в решениях. Вся команда должна четко представлять над чем работает и что в итоге должно получиться. Также нужно оптимизировать
сайт, улучшать время загрузки, сжимать изображения, по возможности избегать больших сторонних скриптов (если нужна лишь малая часть из этого функционала). Современные инструменты для фронтенд разработки значительно упрощают жизнь, я использую сборщики, линтеры, препроцессоры, современный стандарт JS, vue/react для разработки.

---

> Q3
>
> Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Сайт должен быть адаптивен на разных устройствах и быть кроссбраузерным. Адаптивность реализуется с помощью css медиа-запросов с указанием различных разрешений экранов, т.е информация должна быть читабельна. сохранена структура, блоки не наклдываются друг на друга и ничто не разваливается на разных разрешениях.
Можно использовать подход mobile-first, и тестировать в браузере изменяя разрешение экрана под другие устройства. Тестировать на кроссбраузерность лучше
на реальных устройствах ios/android и десктопных браузерах. Проверить поддержку css свойств и js можно на сайте can i use. При проблемах с кроссбраузерностью применимы css свойства с вендорными префиксами.

---

> Q4
>
> Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Использую visual studio code в качестве редактора, установил кучу полезных плагинов которые помогают в разработке. Для git использвую smartgit. Отладку провожу в dev tools.

---

> Q5
>
> Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Проверить верстку и стили в браузерах в инструментах разработчика и походу уже фиксить проблему если это связано со стилями.

---

> Q6
>
> Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Нужно достучаться до дизайнера и уточнить все, возможно интерактивность и не нужна по ТЗ. Должна быть синхронизированность в действиях, и непонятные моменты нужно обсуждать сразу и договариваться с командой.

---

> Q7
>
> Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе,вам интересны?

Слушаю подкасты веб стандарты, фронтенвикенд, читаю статью на медиум/хабр. Смотрю видео курсы яндекса/шри. Больше нравится js-программирование, писать логику и решать задачки. Интересна бекенд разработка, иногда делаю для себя пет проекты.

---

## Level II

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
