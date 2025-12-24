<script lang="ts">
  // This would typically connect to a favorites store/service
  // For now, showing placeholder content
</script>

<svelte:head>
  <title>Favoritos - Netflix da Confeiteira</title>
  <meta name="description" content="Suas receitas favoritas salvas" />
</svelte:head>

<div class="favorites-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Suas Receitas Favoritas</h1>
      <p class="page-subtitle">Organize e acesse rapidamente suas receitas preferidas</p>
    </div>

    <div class="favorites-placeholder">
      <div class="placeholder-icon">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      <h3>Você ainda não tem receitas favoritas</h3>
      <p>Explore nossas categorias e adicione receitas aos seus favoritos clicando no ícone de coração.</p>
      
      <a href="/" class="btn btn-primary">Explorar Receitas</a>
    </div>
  </div>
</div>

<style>
  .favorites-page {
    padding: var(--spacing-2xl) 0 var(--spacing-3xl);
    min-height: 70vh;
  }

  .page-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
  }

  .page-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .page-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .favorites-placeholder {
    text-align: center;
    padding: var(--spacing-3xl) var(--spacing-lg);
    background: var(--bg-card);
    border-radius: var(--radius-xl);
    max-width: 600px;
    margin: 0 auto;
  }

  .placeholder-icon {
    margin-bottom: var(--spacing-xl);
  }

  .placeholder-icon svg {
    fill: var(--text-secondary);
    opacity: 0.5;
  }

  .favorites-placeholder h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
  }

  .favorites-placeholder p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 2rem;
    }
    
    .placeholder-icon svg {
      width: 60px;
      height: 60px;
    }
  }
</style>