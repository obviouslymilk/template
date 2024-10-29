# template.front

Шаблон для создания интерфейсов.

**Node:** 20 LTS

## Начало работы

* Установите [pnpm](https://pnpm.io/installation)
* `pnpm install`
* `pnpm dev`

## Работа с проектом

### CSS

В шаблоне не используется SCSS и другие препроцессоры в угоду нативным
функциям CSS. Стили компонентов должны быть прописаны локально в SFC.

Глобальные переменные, общие стили и нормализатор должны находится в
папке [assets](src/assets). Общие стили (например, для кнопок и панелей)
следует хранить в папке components.

### ESLint

Для поддержания идентичности в проектах рекомендовано использовать конфиг,
представленный в этом проекте. Он настроен для работы с Vue + TS со строгой
типизацией.

### Разное

Для возможности тестирования проекта на устройствах в *одной* сети необходимо
отключить брандмауэр для общедоступных сетей в Windows Defender:

**Безопасность Windows > Брандмауэр и безопасность сети > Общедоступная сеть**

### Ресурсы

- AirBnb JS Style Guide: https://github.com/airbnb/javascript
- TS Style Guide: https://mkosir.github.io/typescript-style-guide/
- Vue FAQ: https://vue-faq.org/
- Conventional Commits: https://www.conventionalcommits.org/ru/