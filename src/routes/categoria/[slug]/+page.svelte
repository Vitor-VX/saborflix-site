<script lang="ts">
  import { page } from '$app/stores';
  import { getCategoryBySlug, searchRecipes } from '$lib/data/mock-data.js';
  import RecipeCard from '$lib/components/RecipeCard.svelte';

  $: slug = $page.params.slug;
  $: category = getCategoryBySlug(slug);
  $: recipes = searchRecipes('', slug);
  
  let searchQuery = '';
  $: filteredRecipes = searchRecipes(searchQuery, slug);
</script>

<svelte:head>
  <title>{category?.title || 'Categoria'} - Netflix da Confeiteira</title>
  <meta name="description" content="{category?.description || 'Receitas da categoria'}" />
</svelte:head>

{#if category}
  <!-- Category Header -->
  <section class="category-header">
    <div class="container">
      <nav class="breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumb-separator">→</span>
        <span class="breadcrumb-current">{category.title}</span>
      </nav>
      
      <h1 class="category-title">{category.title}</h1>
      <p class="category-description">{category.description}</p>
      <p class="recipe-count">{category.recipe_count} receitas disponíveis</p>
    </div>
  </section>

  <!-- Search & Filter -->
  <section class="search-section">
    <div class="container">
      <div class="search-bar">
        <div class="search-input-wrapper">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input 
            type="text" 
            placeholder="Buscar receitas..." 
            class="search-input"
            bind:value={searchQuery}
          />
        </div>
        
        <button class="filter-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
          </svg>
          Filtrar
        </button>
      </div>
    </div>
  </section>

  <!-- Recipes Grid -->
  <section class="recipes-section">
    <div class="container">
      {#if filteredRecipes.length > 0}
        <div class="recipes-grid">
          {#each filteredRecipes as recipe}
            <RecipeCard {recipe} />
          {/each}
        </div>
      {:else}
        <div class="no-results">
          <h3>Nenhuma receita encontrada</h3>
          <p>Tente ajustar sua busca ou explore outras categorias.</p>
        </div>
      {/if}
    </div>
  </section>
{:else}
  <!-- Category Not Found -->
  <section class="not-found">
    <div class="container">
      <h1>Categoria não encontrada</h1>
      <p>A categoria que você procura não existe.</p>
      <a href="/" class="btn btn-primary">Voltar ao início</a>
    </div>
  </section>
{/if}

<style>
  .category-header {
    padding: var(--spacing-2xl) 0 var(--spacing-xl);
    background: linear-gradient(135deg, var(--bg-card) 0%, rgba(30, 30, 30, 0.5) 100%);
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-lg);
    font-size: 0.9rem;
  }

  .breadcrumb a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-normal);
  }

  .breadcrumb a:hover {
    color: var(--accent-pink);
  }

  .breadcrumb-separator {
    margin: 0 var(--spacing-sm);
    color: var(--text-secondary);
  }

  .breadcrumb-current {
    color: var(--text-primary);
    font-weight: 500;
  }

  .category-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .category-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
  }

  .recipe-count {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .search-section {
    padding: var(--spacing-xl) 0;
  }

  .search-bar {
    display: flex;
    gap: var(--spacing-md);
    max-width: 600px;
    margin: 0 auto;
  }

  .search-input-wrapper {
    flex: 1;
    position: relative;
  }

  .search-icon {
    position: absolute;
    left: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
  }

  .search-input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
    background: var(--bg-card);
    border: 2px solid transparent;
    border-radius: var(--radius-lg);
    color: var(--text-primary);
    font-size: 1rem;
    transition: border-color var(--transition-normal);
  }

  .search-input:focus {
    outline: none;
    border-color: var(--accent-pink);
  }

  .search-input::placeholder {
    color: var(--text-secondary);
  }

  .filter-btn {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    background: var(--bg-card);
    border: 2px solid var(--text-secondary);
    border-radius: var(--radius-lg);
    color: var(--text-primary);
    cursor: pointer;
    transition: all var(--transition-normal);
  }

  .filter-btn:hover {
    border-color: var(--accent-pink);
    color: var(--accent-pink);
  }

  .filter-btn svg {
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
  }

  .recipes-section {
    padding: 0 0 var(--spacing-3xl);
  }

  .recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
  }

  .no-results {
    text-align: center;
    padding: var(--spacing-3xl) 0;
  }

  .no-results h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
  }

  .no-results p {
    color: var(--text-secondary);
  }

  .not-found {
    padding: var(--spacing-3xl) 0;
    text-align: center;
  }

  .not-found h1 {
    font-size: 2rem;
    margin-bottom: var(--spacing-md);
  }

  .not-found p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
  }

  @media (max-width: 768px) {
    .category-title {
      font-size: 2rem;
    }
    
    .search-bar {
      flex-direction: column;
    }
    
    .recipes-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
  }
</style>