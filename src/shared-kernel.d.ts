// shared-kernel.d.ts
// Типы размещённые здесь не должны быть привязаны к контексту приложения или к его бизнес-логике.
// Их применение должно лишь улучшить читаемость кодовой базы.

type Nullable<T> = T | null;
type Optional<T> = T | undefined;

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
type Branded<T, B> = T & Brand<B>;

// Network & UI
type Url = string;

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<object, object, any>;
  export default component;
}
