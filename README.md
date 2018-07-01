# otus-js-19-27-ng-memory

Описание приложения
Приложение для запоминания иностранных слов. В этом приложении пользователь сможет добавлять слова для изучения, проходить тесты для запоминания слов. Это Single Page Application состоит из 3 страниц:
Последние добавленные слова (Recently Added)
Упражнениями (Go)
Настройки (Settings)
На главном экране, на странице Recently Added пользователь видит список последних добавленных слов, может добавить новое слово в словарь (если успеем, будем делать также статистику изучения слов).

На странице упражнений пользователь занимается тестированием своих знаний. Ему показывается слово на одном языке, и он должен написать его перевод на другой язык. Если перевод правильный, слово засчитывается, иначе показываем ошибку. Мы начнем с двух языков - русского и английского, будем расширять возможности приложения по мере написания программы.

На странице настроек пользователь выбирает языки, количество слов в упражнении, отводимое на упражнение время.
Навигация по страницам происходит с помощью ссылок в верхней части страниц, каждой странице соответствует отдельный url.

#19 Установить все необходимые зависимости для
    работы с angular - node, npm, tsc, angular-cli
    ●
    Настройте IDE
    ●
    Создать простое приложение “Hello Angular”
    используя angular-cli

#21 Декомпозировать приложение для запоминания иностранных слов
    Декомпозировать приложение для запоминания иностранных слов. Создать структуру и компоненты контейнеры приложения
    Подключить Angular Material - https://material.angular.io/guide/getting-started

#23 Создать и добавить сервис для перевода слов
    Сделать список слов - Dictionary View Создать и добавить сервис для перевода слов https://tech.yandex.com/translate/ Сделать запрос со страницы Dictionary View на Yandex API