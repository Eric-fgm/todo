# To Do App

> Aplikacja do zarządania zadaniami z opcją grupowania na listy.

## Spis Treści

- [Technologie](#technologie)
- [Szybki Start](#szybki-start)
- [Struktura Katalogów](#struktura-katalogów)

## Technologie

Projekt to Monorepo (pnpm workspaces)

- **pnpm**: Szybki i efektywny menedżer pakietów.
- **TypeScript**: Typowany nadzbiór JavaScript, który kompiluje się do czystego JavaScript.
- **React**: Biblioteka JavaScript do budowania interfejsów użytkownika.
- **Vite**: Szybkie narzędzie do budowy i serwera deweloperskiego dla nowoczesnych projektów webowych.
- **Express**: Minimalny i elastyczny framework aplikacji webowej dla Node.js.

## Szybki Start

Aby uruchomić lokalną kopię, wykonaj następujące kroki:

### Wymagania Wstępne

Upewnij się, że masz zainstalowane na swoim komputerze (ja takich używałem):

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
