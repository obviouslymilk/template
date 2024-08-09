# template.front

Шаблон для создания интерфейсов.

**Node:** 20 LTS

## Начало работы

* Установите [pnpm](https://pnpm.io/installation)
* `pnpm install`
* `pnpm dev`

### Настройка среды разработки

Проект создавался и подразумевался для работы в WebStorm 2024.1 и выше.
Следующие настройки рекомендуются для работы с этим шаблоном:

**Editor > Code Style > Style Sheets > CSS: Sort CSS Properties (Custom Order)**

**Languages & Frameworks > JS > Code Quality Tools > ESLint: run eslint --fix on save**

Работать с данным шаблоном в VSCode не рекомендуется в угоду стабильности WebStorm.

## Работа с проектом

### API

Все роуты должны быть прописаны в [api.d.ts](src/types/api.d.ts)
в виде размеченного объединения. Для работы с API используется библиотека
[axios](https://axios-http.com/docs/intro).

### CSS

В шаблоне не используется SCSS и другие препроцессоры в угоду нативным
функциям CSS. Стили компонентов должны быть прописаны локально в SFC.

Глобальные переменные, общие стили и нормализатор должны находится в
папке [assets](src/assets). Общие стили (например, для кнопок и панелей)
следует хранить в папке components.

### ESLint

Для поддержания идентичности в проектах рекомендовано использовать кофинг,
представленный в этом проекте. Он настроен для работы с Vue + TS со строгой
типизацией.

### Разное

Для возможности тестирования проекта на устройствах в *одной* сети необходимо
отключить брандмауэр для общедоступных сетей в Windows Defender:

**Безопасность Windows > Брандамуэр и безопасность сети > Общедоступная сеть**

### Ресурсы

- AirBnb JS Style Guide: https://github.com/airbnb/javascript
- TS Style Guide: https://mkosir.github.io/typescript-style-guide/
- Vue FAQ: https://vue-faq.org/