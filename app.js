// app.js - estrutura corrigida do dashboard (remove cards aninhados)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('main') || document.body;
  const dashboard = document.createElement('div');
  dashboard.className = 'container';
  dashboard.innerHTML = `
    <div class="card">
      <div class="grid">
        <div class="card metric">
          <div>
            <div class="small">Processos ativos</div>
            <div class="value" id="active-count">—</div>
          </div>
          <div><button class="btn" id="refresh">Atualizar</button></div>
        </div>

        <div class="card metric">
          <div>
            <div class="small">Erros (últ. hora)</div>
            <div class="value" id="error-count">—</div>
          </div>
        </div>

        <div class="card text-center">
          <div class="small">Última atualização</div>
          <div id="last-updated" class="small">—</div>
        </div>
      </div>
    </div>
  `;
  container.prepend(dashboard);

  function updateMetrics(data) {
    document.getElementById('active-count').textContent = data.active;
    document.getElementById('error-count').textContent = data.errors;
    document.getElementById('last-updated').textContent = new Date().toLocaleString();
  }

  async function fetchMetrics() {
    try {
      // Troque pela sua API real, ex: /api/metrics
      // const res = await fetch('/api/metrics');
      // const data = await res.json();
      // Simulação de dados enquanto não há API:
      const data = {
        active: Math.floor(Math.random() * 120),
        errors: Math.floor(Math.random() * 10)
      };
      updateMetrics(data);
    } catch (err) {
      console.error('Falha ao buscar métricas', err);
    }
  }

  document.getElementById('refresh').addEventListener('click', fetchMetrics);

  // Atualiza a cada 30s automaticamente
  fetchMetrics();
  setInterval(fetchMetrics, 30000);
});
