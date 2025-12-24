<script lang="ts">
  import type { Category } from '$lib/data/mock-data.js';

  export let category: Category;
</script>

<a href="/categoria/{category.slug}" class="category-card">
  <div class="card-image">
    <img src={category.image} alt={category.title} />
    <div class="card-overlay"></div>
  </div>
  
  <div class="card-content">
    <div class="recipe-count">
      {category.recipe_count}
    </div>
    
    <h3 class="card-title">{category.title}</h3>
    <p class="card-description">{category.description}</p>
  </div>
</a>

<style>
  .category-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: var(--bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    position: relative;
    height: 300px;
    transition: all var(--transition-normal);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .category-card:hover {
    transform: scale(1.03) translateY(-5px);
    box-shadow: 0 8px 30px rgba(244, 114, 182, 0.2);
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--spacing-xl);
    z-index: 2;
  }

  .recipe-count {
    position: absolute;
    top: var(--spacing-lg);
    right: var(--spacing-lg);
    background: var(--accent-gradient);
    color: white;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-md);
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 3;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: var(--spacing-sm);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .card-description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    line-height: 1.4;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    .category-card {
      height: 250px;
    }
    
    .card-content {
      padding: var(--spacing-lg);
    }
    
    .card-title {
      font-size: 1.25rem;
    }
    
    .card-description {
      font-size: 0.9rem;
    }
  }
</style>