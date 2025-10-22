// ========================================
// CONSTANTES E REFERÊNCIAS DE DOM
// ========================================

// Botão de login com GitHub (simulado)
const githubLoginBtn = document.getElementById('github-login-btn');

// ========================================
// FUNÇÕES DE UI (AUXILIARES)
// ========================================

/**
 * Coloca o botão em estado de carregamento e retorna o HTML original
 * @param {HTMLButtonElement} btn
 * @returns {string} HTML original do botão
 */
function showLoading(btn) {
  const original = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4 31.4" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/>
      </circle>
    </svg>
    Conectando...
  `;
  return original;
}

/**
 * Mostra estado de sucesso no botão
 * @param {HTMLButtonElement} btn
 */
function showSuccess(btn) {
  btn.innerHTML = `
    <svg height="20" viewBox="0 0 16 16" width="20">
      <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
    </svg>
    Conectado!
  `;
  btn.classList.add('is-success');
}

/**
 * Restaura o botão ao estado original
 * @param {HTMLButtonElement} btn
 * @param {string} originalHTML
 */
function resetButton(btn, originalHTML) {
  btn.innerHTML = originalHTML;
  btn.classList.remove('is-success');
  btn.disabled = false;
}

// ========================================
// CONTROLADORES (HANDLERS)
// ========================================

/**
 * Handler do clique no botão de login do GitHub (simulado)
 */
function handleGithubLoginClick() {
  const originalHTML = showLoading(githubLoginBtn);

  // Simula tempo de autenticação
  setTimeout(() => {
    showSuccess(githubLoginBtn);

    // Exibe mensagem de sucesso e restaura estado após breve delay
    setTimeout(() => {
      alert('Login simulado com sucesso! Em produção, você seria autenticado via GitHub OAuth.');
      resetButton(githubLoginBtn, originalHTML);
    }, 1500);
  }, 2000);
}

// ========================================
// EVENT LISTENERS
// ========================================

if (githubLoginBtn) {
  githubLoginBtn.addEventListener('click', handleGithubLoginClick);
}
