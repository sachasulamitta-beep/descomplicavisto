/* ===== Descomplica Visto — Guarda de acesso ao guia ===== */
(function () {
  try {
    // Aceita token via URL (?acesso=1) — usado pelo link do obrigado.html
    var params = new URLSearchParams(window.location.search);
    if (params.get('acesso') === '1') {
      localStorage.setItem('dv_guia_acesso', '1');
      // Remove o param da URL sem recarregar
      var clean = window.location.pathname;
      window.history.replaceState(null, '', clean);
    }
    if (!localStorage.getItem('dv_guia_acesso')) {
      window.location.replace('../Checkout%20Kiwify.html');
    }
  } catch (e) {
    /* localStorage bloqueado (modo privado restrito) — permite acesso */
  }
})();
