# projeto-ci-cd-front

Front-end estático (HTML/CSS/JS) hospedado na **Vercel** que consome a API no **Render**.

## Como usar
1. Deploy este repositório na Vercel (importar do GitHub).
2. Abra a URL do front e, no campo de texto, informe a URL do back (ex.: `https://projeto-back.onrender.com`).
3. Clique em **Chamar API**.

## Páginas/arquivos
- `index.html` → página principal com input de URL e botão
- `script.js` → faz o `fetch()` e mostra o JSON retornado
- `style.css` → estilos simples

> Dica: Você pode travar a URL da API editando `script.js` e definindo uma constante fixa.
