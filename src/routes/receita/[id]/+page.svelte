<script lang="ts">
  import { page } from '$app/stores';
  import { getRecipeById, getCategoryBySlug } from '$lib/data/mock-data.js';

  $: recipeId = $page.params.id;
  $: recipe = getRecipeById(recipeId);
  $: category = recipe ? getCategoryBySlug(recipe.category_slug) : null;
  
  function getDifficultyColor(difficulty: string) {
    switch (difficulty) {
      case 'Fácil': return '#10B981';
      case 'Médio': return '#F59E0B';
      case 'Difícil': return '#EF4444';
      default: return '#6B7280';
    }
  }
</script>

<svelte:head>
  <title>{recipe?.title || 'Receita'} - Netflix da Confeiteira</title>
  <meta name="description" content="{recipe?.description || 'Receita deliciosa'}" />
</svelte:head>

{#if recipe}
  <!-- Recipe Background -->
  <div class="recipe-background">
    <img src={recipe.image} alt={recipe.title} />
    <div class="background-overlay"></div>
  </div>

  <!-- Main Content -->
  <div class="recipe-content">
    <div class="container">
      <!-- Main Recipe Card -->
      <div class="recipe-main-card">
        <div class="breadcrumb">
          <a href="/">Home</a>
          <span>→</span>
          <a href="/categoria/{recipe.category_slug}">{category?.title}</a>
          <span>→</span>
          <span>{recipe.title}</span>
        </div>

        <h1 class="recipe-title">{recipe.title}</h1>
        <p class="recipe-description">{recipe.description}</p>

        <div class="recipe-meta">
          <div class="meta-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <div>
              <span class="meta-label">Tempo Total</span>
              <span class="meta-value">{recipe.total_time_minutes} min</span>
            </div>
          </div>

          <div class="meta-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <div>
              <span class="meta-label">Preparo</span>
              <span class="meta-value">{recipe.prep_time_minutes} min</span>
            </div>
          </div>

          <div class="meta-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div>
              <span class="meta-label">Rende</span>
              <span class="meta-value">{recipe.servings}</span>
            </div>
          </div>

          <div class="meta-item">
            <div 
              class="difficulty-badge"
              style="background-color: {getDifficultyColor(recipe.difficulty)}"
            >
              {recipe.difficulty}
            </div>
          </div>
        </div>

        <button class="favorite-btn-large">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          Adicionar aos Favoritos
        </button>
      </div>

      <!-- Instructions Grid -->
      <div class="instructions-grid">
        <!-- Ingredients Card -->
        <div class="instruction-card">
          <h2 class="instruction-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m6-6h4a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-4m-6 0V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1"/>
            </svg>
            Ingredientes
          </h2>
          
          {#each recipe.ingredients as group}
            <div class="ingredient-group">
              <h3 class="group-title">{group.group}</h3>
              <ul class="ingredient-list">
                {#each group.items as item}
                  <li class="ingredient-item">{item}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>

        <!-- Steps Card -->
        <div class="instruction-card">
          <h2 class="instruction-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            Modo de Preparo
          </h2>
          
          <ol class="steps-list">
            {#each recipe.steps as step, index}
              <li class="step-item">
                <div class="step-number">{index + 1}</div>
                <p class="step-text">{step}</p>
              </li>
            {/each}
          </ol>
        </div>
      </div>

      <!-- Tips Section -->
      <div class="tips-section">
        <div class="tips-card">
          <h2 class="tips-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>
            Dicas da Confeiteira
          </h2>
          <p class="tips-text">{recipe.tips}</p>
        </div>
      </div>
    </div>
  </div>
{:else}
  <!-- Recipe Not Found -->
  <div class="not-found">
    <div class="container">
      <h1>Receita não encontrada</h1>
      <p>A receita que você procura não existe.</p>
      <a href="/" class="btn btn-primary">Voltar ao início</a>
    </div>
  </div>
{/if}

<style>
  .recipe-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }

  .recipe-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(20px) brightness(0.3);
    transform: scale(1.1);
  }

  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(18, 18, 18, 0.9) 0%,
      rgba(30, 30, 30, 0.8) 100%
    );
  }

  .recipe-content {
    position: relative;
    z-index: 1;
    padding: var(--spacing-2xl) 0;
    min-height: 100vh;
  }

  .recipe-main-card {
    background: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(234, 234, 234, 0.1);
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-lg);
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .breadcrumb a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-normal);
  }

  .breadcrumb a:hover {
    color: var(--accent-pink);
  }

  .breadcrumb span {
    margin: 0 var(--spacing-sm);
  }

  .recipe-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-lg);
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .recipe-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-2xl);
    line-height: 1.6;
  }

  .recipe-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
    padding: var(--spacing-lg);
    background: rgba(0, 0, 0, 0.3);
    border-radius: var(--radius-lg);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .meta-item svg {
    stroke: var(--accent-pink);
    fill: none;
    stroke-width: 2;
    flex-shrink: 0;
  }

  .meta-label {
    display: block;
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .meta-value {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .difficulty-badge {
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .favorite-btn-large {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    background: var(--accent-gradient);
    color: white;
    border: none;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-lg);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-normal);
    box-shadow: 0 4px 15px rgba(244, 114, 182, 0.3);
  }

  .favorite-btn-large:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(244, 114, 182, 0.4);
  }

  .favorite-btn-large svg {
    fill: currentColor;
  }

  .instructions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
  }

  .instruction-card {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .instruction-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-xl);
    color: var(--text-primary);
  }

  .instruction-title svg {
    stroke: var(--accent-pink);
    fill: none;
    stroke-width: 2;
  }

  .ingredient-group {
    margin-bottom: var(--spacing-lg);
  }

  .group-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--accent-orange);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-xs);
    border-bottom: 2px solid var(--accent-orange);
  }

  .ingredient-list {
    list-style: none;
  }

  .ingredient-item {
    padding: var(--spacing-sm) 0;
    color: var(--text-primary);
    border-bottom: 1px solid rgba(234, 234, 234, 0.1);
    position: relative;
    padding-left: var(--spacing-lg);
  }

  .ingredient-item::before {
    content: '•';
    color: var(--accent-pink);
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: var(--spacing-sm);
  }

  .steps-list {
    list-style: none;
    counter-reset: step-counter;
  }

  .step-item {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    counter-increment: step-counter;
  }

  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--accent-gradient);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .step-text {
    color: var(--text-primary);
    line-height: 1.5;
    margin: 0;
  }

  .tips-section {
    margin-bottom: var(--spacing-2xl);
  }

  .tips-card {
    background: linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%);
    border: 1px solid rgba(244, 114, 182, 0.2);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
  }

  .tips-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }

  .tips-title svg {
    stroke: var(--accent-pink);
    fill: none;
    stroke-width: 2;
  }

  .tips-text {
    color: var(--text-primary);
    line-height: 1.6;
    font-size: 1.1rem;
    margin: 0;
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

  @media (max-width: 1024px) {
    .instructions-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .recipe-main-card {
      padding: var(--spacing-lg);
    }
    
    .recipe-title {
      font-size: 2rem;
    }
    
    .recipe-meta {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .instruction-card {
      padding: var(--spacing-lg);
    }
  }
</style>