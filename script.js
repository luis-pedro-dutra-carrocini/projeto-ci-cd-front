async function chamarAPI() {
  const apiInput = document.getElementById('apiUrl');
  const saida = document.getElementById('saida');
  const url = apiInput.value.trim();

  if (!url) {
    saida.textContent = 'Informe a URL da API (ex.: https://seu-back.onrender.com)';
    return;
  }

  saida.textContent = 'Realizando requisição na API (' +  url + ') Aguarde...';

  try {
    const resp = await fetch(url, { method: 'GET' });
    const dados = await resp.json();
    saida.textContent = JSON.stringify(dados, null, 2);
  } catch (err) {
    saida.textContent = 'Erro ao chamar API: ' + err.message;
  }
}

document.getElementById('btnChamar').addEventListener('click', chamarAPI);
