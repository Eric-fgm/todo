# To Do App

> Aplikacja do zarządania zadaniami z opcją grupowania na listy.

## Spis Treści

- [Technologie](#technologie)
- [Szybki Start](#szybki-start)
- [Struktura Katalogów](#struktura-katalogów)

## Technologie

Projekt to Monorepo, a dokładniej pnpm workspaces (nie używałem nx, lerny ani turborepo bo nie było sensu).

- **pnpm**: Szybki i efektywny menedżer pakietów.
- **TypeScript**: Typowany nadzbiór JavaScript, który kompiluje się do czystego JavaScript.
- **React**: Biblioteka JavaScript do budowania interfejsów użytkownika.
- **Vite**: Szybkie narzędzie do budowy i serwera deweloperskiego dla nowoczesnych projektów webowych.
- **Express**: Minimalny i elastyczny framework aplikacji webowej dla Node.js.

## Szybki Start

Aby uruchomić lokalną kopię, wykonaj następujące kroki:

### Wymagania Wstępne

Upewnij się, że masz zainstalowane na swoim komputerze (takie wersje miałem zainstalowane):

- Node.js (>= 20.11.0)
- pnpm (>= 8.9.2)
- Typescript (>= 5.5.2)

### Instalacja

1. Sklonuj repozytorium:

```
git clone https://github.com/Eric-fgm/todo.git

cd todo
```

2. Zbuduj repo:

```
pnpm build
```

3. Uruchom serwer (API):

```
pnpm server:start
```

4. Uruchom serwer clienta (w nowej konsoli):

```
pnpm client:preview
```

### Linki

Server API: http://localhost:8080/api/v1

Swagger: http://localhost:8080/api-docs

Client server: http://localhost:4173

### Uwaga!

Serwer (API) jest sztucznie spowolniony (500 ms), aby pokazać że na froncie są zaimplementowane loadery. Możesz się tego pozbyć usuwając poniższy kod.

```typescript
// ./packages/server/bootstrap.ts

app.use(async (req, res, next) => {
  await new Promise((r) => setTimeout(r, 500));
  next();
});
```

## Struktura Katalogów

```
todo/
├── packages/
│   ├── client/         # Aplikacja React
│   ├── server/         # Serwer Express
│   └── shared/         # Wspólny kod
├── .gitignore
├── .prettierrc         # Konfiguracja prettiera
├── eslint.config.js    # Konfiguracja eslint
├── package.json        # Główny plik package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml # Konfiguracja przestrzeni roboczej
└── tsconfig-base.json  # Konfiguracja bazowa typescript
```

Serwer ma standardową strukture à la MVC. W przypadku clienta, większość komponentów jest w folderze components (nie było sensu organizować tego per feature, bo projekt jest mały).
