# TO DO list или как бы я продолжил работу с проектом.

!не в порядке приоритетов

1. Refactor. Написать атомарный вариативный компонент кнопки и заменить в шапке, футере, пагинации.
2. Refactor. Вынести пагинацию в отдельный переиспользуемый компонент.
3. Refactor. Избавиться от макроса withDefaults и перейти на деструктуризацию.
4. Добавить логику работу переключения языка интерфейса. С помощью модуля i18n.
5. Пройтись по всей верстке и довести до Pixel perfect.
6. Дописать стили для нормального responsivness на разных устройствах.
7. Продолжить работу с SEO: web manifest, robots, проверить шэринг в соцсетях и пр.
8. Запросить логику работы пагинации, которую закладыали изначально, свериться с текущей реализацией.
9. Запросить макеты для мобильной верстки.
10. SSG.
11. Добавить человекочитаемые урлы для страниц статей. ✅
12. Добавить ссылки на соцсети и внутренние линки. ✅
13. Добавить 404 страницу. ✅
14. Добавить обработку ошибок для запросов.
15. Добавить обработку серверных ошибок.
16. Написать атомарный компонент для работы с иконками.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
