<script lang="ts">
  import { categories } from '$lib/data/mock-data.js';
  import CategoryCard from '$lib/components/CategoryCard.svelte';
</script>

<svelte:head>
  <title>Netflix da Confeiteira - Receitas Incríveis</title>
  <meta name="description" content="Descubra receitas incríveis para você arrasar na cozinha e fazer seu negócio decolar!" />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-background">
    <img 
      src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1920" 
      alt="Deliciosas sobremesas" 
    />
    <div class="hero-overlay"></div>
  </div>
  
  <div class="hero-content">
    <div class="container">
      <h1 class="hero-title">Netflix da Confeiteira</h1>
      <p class="hero-subtitle">Receitas incríveis para você arrasar na cozinha</p>
    </div>
  </div>
</section>

<!-- Categories Section -->
<section class="categories-section">
  <div class="container">
    <h2 class="section-title">Escolha uma Categoria</h2>
    
    <div class="categories-grid">
      {#each categories as category}
        <CategoryCard {category} />
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h3 class="cta-title">Pronta para transformar sua paixão em negócio?</h3>
      <p class="cta-description">
        Acesse todas as nossas receitas e comece a lucrar com suas criações hoje mesmo!
      </p>
      
      <div class="cta-buttons">
        <button class="btn btn-primary">Gerar Certificado de Conclusão</button>
        <a href="/todas-receitas" class="btn btn-secondary">Ver Todas as Receitas</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .hero-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(18, 18, 18, 0.8) 0%,
      rgba(30, 30, 30, 0.6) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    background: linear-gradient(135deg, #F472B6 0%, #FB923C 50%, #FBBF24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .categories-section {
    padding: var(--spacing-3xl) 0;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: var(--spacing-2xl);
    color: var(--text-primary);
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-xl);
  }

  .cta-section {
    padding: var(--spacing-3xl) 0;
    background: linear-gradient(135deg, var(--bg-card) 0%, rgba(30, 30, 30, 0.8) 100%);
  }

  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .cta-title {
    font-size: 2.25rem;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }

  .cta-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-2xl);
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .hero {
      height: 70vh;
    }
    
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.1rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .categories-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
    
    .cta-title {
      font-size: 1.75rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
</style>