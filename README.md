# template.front

Шаблон для создания интерфейсов.

**Node:** 22 LTS

## Начало работы

* Установите [pnpm](https://pnpm.io/installation)
* `pnpm dlx degit obviouslymilk/template`
* `pnpm install`
* `pnpm dev`

## Работа с проектом

В проекте используется строгий линтинг.
Вместо использования команды `pnpm lint` и `pnpm lint:fix`
можно установить следующие расширения для VSCode:

* [Stylelint](https://marketplace.visualstudio.com/items/?itemName=stylelint.vscode-stylelint)
* [ESLint](https://marketplace.visualstudio.com/items/?itemName=dbaeumer.vscode-eslint)

Для Stylelint настройки [validate](vscode://settings/stylelint.validate) добавьте параметр `vue`.

### CSS

Стили компонентов должны быть прописаны локально в SFC.

Глобальные переменные, общие стили должны находится в
папке [`/assets`](src/assets).

### ESLint

Для поддержания идентичности в проектах рекомендовано использовать конфиг,
представленный в этом проекте. Он настроен для работы с Vue + TS со строгой
типизацией.

## Разное

Для возможности тестирования проекта на устройствах в *одной* сети необходимо
отключить брандмауэр для общедоступных сетей в Windows Defender:

**Безопасность Windows > Брандмауэр и безопасность сети > Общедоступная сеть**

## Ресурсы

- AirBnb JS Style Guide: https://github.com/airbnb/javascript
- TS Style Guide: https://mkosir.github.io/typescript-style-guide/
- Vue FAQ: https://vue-faq.org/
- Conventional Commits: https://www.conventionalcommits.org/ru/
