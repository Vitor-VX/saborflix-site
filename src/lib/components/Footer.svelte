<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3 class="brand-title">Netflix da Confeiteira</h3>
        <p class="brand-subtitle">Receitas incríveis para você arrasar na cozinha</p>
      </div>
      
      <div class="footer-links">
        <div class="link-group">
          <h4>Navegação</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/favoritos">Favoritos</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h4>Categorias</h4>
          <ul>
            <li><a href="/categoria/fatias-de-bolos">Fatias de Bolos</a></li>
            <li><a href="/categoria/brigadeiros">Brigadeiros</a></li>
            <li><a href="/categoria/doces-gourmet">Doces Gourmet</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2024 Netflix da Confeiteira. Todos os direitos reservados.</p>
      <p>Feito com ❤️ para confeiteiros apaixonados.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--bg-card);
    margin-top: var(--spacing-3xl);
    padding: var(--spacing-2xl) 0 var(--spacing-lg);
  }

  .footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-xl);
  }

  .brand-title {
    font-size: 1.5rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-sm);
  }

  .brand-subtitle {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }

  .link-group h4 {
    color: var(--text-primary);
    font-size: 1.1rem;
    margin-bottom: var(--spacing-md);
    font-family: var(--font-heading);
  }

  .link-group ul {
    list-style: none;
  }

  .link-group li {
    margin-bottom: var(--spacing-sm);
  }

  .link-group a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color var(--transition-normal);
  }

  .link-group a:hover {
    color: var(--accent-pink);
  }

  .footer-bottom {
    text-align: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid rgba(234, 234, 234, 0.1);
  }

  .footer-bottom p {
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-bottom: var(--spacing-xs);
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
    
    .footer-links {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
  }
</style>