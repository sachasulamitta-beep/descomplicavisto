/* ===== Descomplica Visto — Guarda de acesso ao guia ===== */
(function () {
  try {
    // Aceita token via URL (?acesso=1)
    var params = new URLSearchParams(window.location.search);
    if (params.get('acesso') === '1') {
      localStorage.setItem('dv_guia_acesso', '1');
      var clean = window.location.pathname;
      window.history.replaceState(null, '', clean);
    }
    if (!localStorage.getItem('dv_guia_acesso')) {
      // Redireciona de volta para o índice do guia (nunca para fora da pasta)
      window.location.replace('index.html?sem_acesso=1');
    }
  } catch (e) {
    /* localStorage bloqueado — permite acesso */
  }
})();
