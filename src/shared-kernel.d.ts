// shared-kernel.d.ts
// Типы размещённые здесь не должны быть привязаны к контексту приложения или к его бизнес-логике.
// Их применение должно лишь улучшить читаемость кодовой базы.

type Nullable<T> = T | null;
type Optional<T> = T | undefined;

// Network & UI
type Url = string;
