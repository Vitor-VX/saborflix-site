<script lang="ts">
  import { page } from '$app/stores';
</script>

<header class="header">
  <nav class="nav">
    <div class="nav-content">
      <a href="/" class="logo">
        <span class="logo-text">Netflix da Confeiteira</span>
      </a>
      
      <div class="nav-links">
        <a 
          href="/" 
          class="nav-link"
          class:active={$page.url.pathname === '/'}
        >
          Home
        </a>
        <a 
          href="/favoritos" 
          class="nav-link"
          class:active={$page.url.pathname === '/favoritos'}
        >
          Favoritos
        </a>
      </div>
    </div>
  </nav>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(18, 18, 18, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(234, 234, 234, 0.1);
  }

  .nav {
    padding: 0 var(--spacing-lg);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md) 0;
  }

  .logo {
    text-decoration: none;
  }

  .logo-text {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 800;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-links {
    display: flex;
    gap: var(--spacing-lg);
  }

  .nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
    position: relative;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--text-primary);
    background: rgba(244, 114, 182, 0.1);
  }

  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: var(--accent-gradient);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    .logo-text {
      font-size: 1.25rem;
    }
    
    .nav-links {
      gap: var(--spacing-md);
    }
    
    .nav-link {
      padding: var(--spacing-xs) var(--spacing-sm);
      font-size: 0.9rem;
    }
  }
</style>