## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

- `npm run start` - Запуск frontend проекта на Webpack Dev Server
- `npm run start:vite` - Запуск frontend проекта на Vite
- `npm run start:dev` - Запуск frontend проекта на Webpack Dev Server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на Vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts-файлов линтером
- `npm run lint:ts:fix` - Исправление ts-файлов линтером
- `npm run lint:scss` - Проверка scss-файлов style-линтером
- `npm run lint:scss:fix` - Исправление scss-файлов style-линтером
- `npm run test:unit` - Запуск unit-тестов с Jest
- `npm run test:ui` - Запуск скриншотных тестов с Loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация JSON отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка Storybook билда
- `npm run prepare` - прекоммит-хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature Sliced Design (FSD)

Ссылка на документацию - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для Webstorm/VSCode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на Jest - `npm run test:unit`
2. Тесты на компоненты с React Testing Library (RTL) -`npm run test:unit`
3. Скриншотное тестирование с Loki `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [Документация по тестированию](/docs/tests.md)

---

## Линтинг

В проекте используется ESLint для проверки Typescript кода и Stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный ESLint plugin _eslint-plugin-machumak-plugin_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3. public-api-imports - разрешает импорт из других модулей только из Public API. Имеет auto-fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts-файлов линтером
- `npm run lint:ts:fix` - Исправление ts-файлов линтером
- `npm run lint:scss` - Проверка scss-файлов style линтером
- `npm run lint:scss:fix` - Исправление scss-файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются story-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
    title: "features/AvatarDropdown/AvatarDropdown",
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.CLEAR,
    },
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. Vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - Babel
- /config/build - конфигурация Webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга/упрощения написания кода/генерации отчетов и тд.

---

## CI Pipeline и Pre-commit-хуки

Конфигурация Github Actions находится в /.github/workflows.
В CI прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux Toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK Query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Работа с Feature-flags

Разрешено использование Feature-flags только с помощью хелпера toggleFeatures — в него передается объект с опциями:

```json
{
  "name": "название фича-флага",
  "on": "функция, которая отработает после включения фичи",
  "off": "функция, которая отработает после выключения фичи"
}
```

Для автоматического удаления фичи использовать скрипт remove-feature.ts, который принимает 2 аргумента

1. Название удаляемого feature-флага
2. Состояние (on\off)

----

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [AddCommentForm](/src/features/AddCommentForm)
- [articleRating](/src/features/ArticleRating)
- [articleRecommendationsList](/src/features/ArticleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/AvatarDropdown)
- [editableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/NotificationButton)
- [profileRating](/src/features/ProfileRating)
- [ScrollSave](/src/features/ScrollSave)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
