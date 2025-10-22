# 🚀 Sistema Dinâmico de Repositórios

Sistema que renderiza cards de repositórios dinamicamente a partir de dados JSON.

## 📋 Como Usar

### 1️⃣ Definir Quantidade de Cards

No arquivo `js/repos.js`, altere o valor de `maxCards` na linha 2:

```javascript
const CONFIG = {
  maxCards: 6 // Altere este número para controlar quantos cards aparecem
};
```

**Exemplos:**
- `maxCards: 3` → Exibe apenas 3 cards
- `maxCards: 8` → Exibe todos os 8 repositórios disponíveis
- `maxCards: 100` → Exibe todos disponíveis (limitado pelo JSON)

### 2️⃣ Adicionar Novos Repositórios

Edite o arquivo `data/repositories.json` e adicione um novo objeto:

```json
{
  "id": 9,
  "name": "nome-do-repositorio",
  "owner": "usuario-github",
  "description": "Descrição do projeto",
  "topics": ["tag1", "tag2", "tag3"],
  "language": {
    "name": "JavaScript",
    "color": "#f1e05a"
  },
  "stars": 100,
  "forks": 20,
  "url": "https://github.com/usuario/repositorio"
}
```

### 3️⃣ Cores de Linguagens

Cores populares para linguagens de programação:

| Linguagem | Cor (Hex) |
|-----------|-----------|
| JavaScript | `#f1e05a` |
| TypeScript | `#3178c6` |
| Python | `#3572A5` |
| Java | `#b07219` |
| Go | `#00ADD8` |
| Rust | `#dea584` |
| Ruby | `#701516` |
| PHP | `#4F5D95` |
| C++ | `#f34b7d` |
| C# | `#178600` |
| Swift | `#ffac45` |
| Kotlin | `#A97BFF` |
| Vue | `#41b883` |
| Dart | `#00B4AB` |

## 📁 Estrutura de Arquivos

```
OpenUnitedCampus_prototype/
├── assets/
│   └── styles.css          # Estilos dos cards
├── data/
│   └── repositories.json   # Dados dos repositórios
├── js/
│   └── repos.js           # Lógica de renderização
└── index.html             # Página principal
```

## ✨ Funcionalidades

- ✅ Renderização dinâmica via JavaScript
- ✅ Dados carregados de arquivo JSON
- ✅ Controle de quantidade de cards exibidos
- ✅ Botão "Star" interativo
- ✅ Formatação automática de números (1.2k, 3.5k)
- ✅ Responsivo e tema escuro
- ✅ Contador de repositórios exibidos

## 🔧 Personalização

### Alterar Layout do Grid

No arquivo `assets/styles.css`, modifique:

```css
.repo-grid {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 16px;
}
```

### Adicionar Mais Informações ao Card

Edite a função `createRepoCard()` em `js/repos.js` para adicionar novos elementos.

## 🌐 Como Visualizar

1. Abra o arquivo `index.html` no navegador
2. Ou use um servidor local:
   ```bash
   python -m http.server 8000
   # Acesse: http://localhost:8000
   ```

## 📝 Notas

- Os cards são gerados automaticamente ao carregar a página
- Verifique o console do navegador para mensagens de log
- Em caso de erro ao carregar, uma mensagem será exibida na tela
