<script lang="ts">
  import type { Recipe } from '$lib/data/mock-data.js';

  export let recipe: Recipe;
  
  function getDifficultyColor(difficulty: string) {
    switch (difficulty) {
      case 'Fácil': return '#10B981';
      case 'Médio': return '#F59E0B';
      case 'Difícil': return '#EF4444';
      default: return '#6B7280';
    }
  }
</script>

<a href="/receita/{recipe.id}" class="recipe-card">
  <div class="card-header">
    <img src={recipe.image} alt={recipe.title} class="recipe-image" />
    
    <button class="favorite-btn" on:click|preventDefault={() => {/* Add to favorites logic */}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </button>
  </div>
  
  <div class="card-body">
    <h3 class="recipe-title">{recipe.title}</h3>
    <p class="recipe-description">{recipe.description}</p>
    
    <div class="recipe-meta">
      <span 
        class="difficulty-tag"
        style="background-color: {getDifficultyColor(recipe.difficulty)}"
      >
        {recipe.difficulty}
      </span>
      
      <div class="meta-info">
        <div class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          <span>{recipe.total_time_minutes}min</span>
        </div>
        
        <div class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span>{recipe.servings}</span>
        </div>
      </div>
    </div>
  </div>
</a>

<style>
  .recipe-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .recipe-card:hover {
    transform: scale(1.03) translateY(-2px);
    box-shadow: 0 4px 20px rgba(244, 114, 182, 0.15);
  }

  .card-header {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  .recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }

  .recipe-card:hover .recipe-image {
    transform: scale(1.1);
  }

  .favorite-btn {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-normal);
  }

  .favorite-btn:hover {
    background: rgba(244, 114, 182, 0.8);
    transform: scale(1.1);
  }

  .favorite-btn svg {
    fill: currentColor;
    color: white;
  }

  .card-body {
    padding: var(--spacing-lg);
  }

  .recipe-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    line-height: 1.3;
    color: var(--text-primary);
  }

  .recipe-description {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: var(--spacing-md);
  }

  .recipe-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .difficulty-tag {
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-md);
  }

  .meta-info {
    display: flex;
    gap: var(--spacing-md);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: 0.8rem;
    color: var(--text-secondary);
  }

  .meta-item svg {
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
  }

  @media (max-width: 768px) {
    .card-header {
      height: 160px;
    }
    
    .card-body {
      padding: var(--spacing-md);
    }
    
    .recipe-title {
      font-size: 1.1rem;
    }
    
    .meta-info {
      gap: var(--spacing-sm);
    }
    
    .meta-item {
      font-size: 0.75rem;
    }
  }
</style>