export interface Category {
  slug: string;
  title: string;
  description: string;
  image: string;
  recipe_count: number;
}

export interface IngredientGroup {
  group: string;
  items: string[];
}

export interface Recipe {
  id: string;
  category_slug: string;
  title: string;
  description: string;
  image: string;
  prep_time_minutes: number;
  total_time_minutes: number;
  servings: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  ingredients: IngredientGroup[];
  steps: string[];
  tips: string;
}

export const categories: Category[] = [
  {
    slug: "fatias-de-bolos",
    title: "Fatias de Bolos",
    description: "Deliciosas fatias de bolos para fazer e vender.",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    recipe_count: 18
  },
  {
    slug: "doces-gourmet",
    title: "Doces Gourmet",
    description: "Doces sofisticados para ocasiões especiais.",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800",
    recipe_count: 24
  },
  {
    slug: "tortas-e-tartes",
    title: "Tortas e Tartes",
    description: "Tortas doces e salgadas irresistíveis.",
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    recipe_count: 15
  },
  {
    slug: "brigadeiros",
    title: "Brigadeiros",
    description: "O clássico brasileiro em versões especiais.",
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
    recipe_count: 32
  },
  {
    slug: "cupcakes",
    title: "Cupcakes",
    description: "Pequenos bolos decorados com muito amor.",
    image: "https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=800",
    recipe_count: 21
  },
  {
    slug: "sobremesas-de-pote",
    title: "Sobremesas de Pote",
    description: "Práticas e deliciosas sobremesas individuais.",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",
    recipe_count: 19
  }
];

export const recipes: Recipe[] = [
  {
    id: "bolo-ninho-morango",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Ninho com Morango",
    description: "Bolo com leite ninho e morangos frescos, sucesso de vendas.",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    prep_time_minutes: 35,
    total_time_minutes: 40,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1/2 xícara de óleo",
          "1 xícara de leite",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento em pó"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "2 pacotes de leite ninho",
          "300g de morangos frescos"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200ml de chantilly",
          "Leite ninho para polvilhar",
          "Morangos para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa batendo ovos, açúcar, leite e óleo no liquidificador.",
      "Adicione a farinha e o fermento, misture bem.",
      "Asse em forma retangular untada a 180°C por 35 minutos.",
      "Para o recheio, misture o leite condensado, creme de leite e leite ninho.",
      "Corte os morangos em fatias.",
      "Monte o bolo intercalando massa, recheio e morangos.",
      "Finalize com chantilly e decore com morangos e leite ninho."
    ],
    tips: "Para vender: Use embalagens brancas ou transparentes para destacar a beleza do bolo. Mantenha refrigerado e venda no máximo em 2 dias."
  },
  {
    id: "bolo-ninho-morango",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Ninho com Morango",
    description: "Bolo com leite ninho e morangos frescos, sucesso de vendas.",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    prep_time_minutes: 35,
    total_time_minutes: 40,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1/2 xícara de óleo",
          "1 xícara de leite",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento em pó"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "2 pacotes de leite ninho",
          "300g de morangos frescos"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200ml de chantilly",
          "Leite ninho para polvilhar",
          "Morangos para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa batendo ovos, açúcar, leite e óleo no liquidificador.",
      "Adicione a farinha e o fermento, misture bem.",
      "Asse em forma retangular untada a 180°C por 35 minutos.",
      "Para o recheio, misture o leite condensado, creme de leite e leite ninho.",
      "Corte os morangos em fatias.",
      "Monte o bolo intercalando massa, recheio e morangos.",
      "Finalize com chantilly e decore com morangos e leite ninho."
    ],
    tips: "Para vender: Use embalagens brancas ou transparentes para destacar a beleza do bolo. Mantenha refrigerado e venda no máximo em 2 dias."
  },
  {
    id: "bolo-ninho-morango",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Ninho com Morango",
    description: "Bolo com leite ninho e morangos frescos, sucesso de vendas.",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    prep_time_minutes: 35,
    total_time_minutes: 40,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1/2 xícara de óleo",
          "1 xícara de leite",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento em pó"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "2 pacotes de leite ninho",
          "300g de morangos frescos"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200ml de chantilly",
          "Leite ninho para polvilhar",
          "Morangos para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa batendo ovos, açúcar, leite e óleo no liquidificador.",
      "Adicione a farinha e o fermento, misture bem.",
      "Asse em forma retangular untada a 180°C por 35 minutos.",
      "Para o recheio, misture o leite condensado, creme de leite e leite ninho.",
      "Corte os morangos em fatias.",
      "Monte o bolo intercalando massa, recheio e morangos.",
      "Finalize com chantilly e decore com morangos e leite ninho."
    ],
    tips: "Para vender: Use embalagens brancas ou transparentes para destacar a beleza do bolo. Mantenha refrigerado e venda no máximo em 2 dias."
  },
  {
    id: "brigadeiro-gourmet",
    category_slug: "brigadeiros",
    title: "Brigadeiro Gourmet de Pistache",
    description: "Brigadeiro sofisticado com pistache e chocolate belga.",
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
    prep_time_minutes: 20,
    total_time_minutes: 25,
    servings: "30 unidades",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "BRIGADEIRO",
        items: [
          "1 lata de leite condensado",
          "2 colheres de sopa de chocolate em pó 50% cacau",
          "1 colher de sopa de manteiga",
          "100g de pistache sem sal"
        ]
      },
      {
        group: "FINALIZAÇÃO",
        items: [
          "Pistache picado para decorar",
          "Forminhas douradas"
        ]
      }
    ],
    steps: [
      "Processe 80g de pistache até formar uma pasta cremosa.",
      "Em uma panela, misture leite condensado, chocolate e manteiga.",
      "Cozinhe em fogo baixo mexendo sempre até desgrudar da panela.",
      "Adicione a pasta de pistache e misture bem.",
      "Deixe esfriar completamente.",
      "Faça bolinhas e passe no pistache picado.",
      "Coloque nas forminhas e sirva."
    ],
    tips: "Venda em embalagens elegantes. O pistache agrega muito valor - cobre entre R$ 3,50 e R$ 4,50 por unidade."
  },
  {
    id: "torta-limao",
    category_slug: "tortas-e-tartes",
    title: "Torta de Limão Siciliano",
    description: "Torta cremosa com base de biscoito e cobertura de merengue.",
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    prep_time_minutes: 45,
    total_time_minutes: 60,
    servings: "10 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "BASE",
        items: [
          "300g de biscoito maisena",
          "150g de manteiga derretida"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "1/2 xícara de suco de limão siciliano",
          "Raspas de 2 limões",
          "3 gemas de ovo"
        ]
      },
      {
        group: "MERENGUE",
        items: [
          "3 claras em neve",
          "6 colheres de sopa de açúcar"
        ]
      }
    ],
    steps: [
      "Triture o biscoito e misture com a manteiga derretida.",
      "Forre uma forma de torta e leve para gelar por 30 minutos.",
      "Misture todos os ingredientes do recheio e despeje sobre a base.",
      "Asse a 180°C por 15 minutos.",
      "Bata as claras em neve e adicione o açúcar aos poucos.",
      "Cubra a torta com o merengue e asse por mais 10 minutos.",
      "Deixe esfriar antes de servir."
    ],
    tips: "A torta de limão é um clássico que sempre vende bem. Mantenha refrigerada e destaque o frescor do limão siciliano no marketing."
  },
  {
    id: "cupcake-red-velvet",
    category_slug: "cupcakes",
    title: "Cupcake Red Velvet",
    description: "Cupcake aveludado com cream cheese e decoração especial.",
    image: "https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=800",
    prep_time_minutes: 30,
    total_time_minutes: 50,
    servings: "12 cupcakes",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "1 e 1/2 xícara de farinha de trigo",
          "1 xícara de açúcar",
          "1/2 xícara de óleo",
          "1 ovo",
          "1 xícara de leitelho",
          "2 colheres de sopa de corante vermelho",
          "1 colher de chá de essência de baunilha",
          "1 colher de chá de bicarbonato de sódio"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200g de cream cheese",
          "100g de manteiga em temperatura ambiente",
          "2 xícaras de açúcar de confeiteiro",
          "1 colher de chá de essência de baunilha"
        ]
      }
    ],
    steps: [
      "Preaqueça o forno a 180°C e prepare forminhas para cupcakes.",
      "Misture todos os ingredientes secos.",
      "Em outra tigela, bata óleo, ovo, leitelho, corante e baunilha.",
      "Combine as misturas até formar uma massa homogênea.",
      "Distribua nas forminhas e asse por 18-20 minutos.",
      "Para a cobertura, bata cream cheese e manteiga até cremoso.",
      "Adicione açúcar de confeiteiro e baunilha, bata até ficar fofo.",
      "Decore os cupcakes frios com a cobertura usando bico de confeiteiro."
    ],
    tips: "Red velvet é muito fotogênico! Use em eventos especiais e destaque a cor única. Venda entre R$ 8-12 por unidade."
  },
  {
    id: "sobremesa-pote-prestígio",
    category_slug: "sobremesas-de-pote",
    title: "Sobremesa de Pote Prestígio",
    description: "Camadas de brigadeiro, coco e chocolate em potinhos individuais.",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",
    prep_time_minutes: 25,
    total_time_minutes: 30,
    servings: "15 potinhos",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "BRIGADEIRO",
        items: [
          "2 latas de leite condensado",
          "4 colheres de sopa de chocolate em pó",
          "2 colheres de sopa de manteiga"
        ]
      },
      {
        group: "MONTAGEM",
        items: [
          "200g de coco ralado",
          "200g de chocolate granulado",
          "15 potinhos de vidro 150ml",
          "200ml de chantilly"
        ]
      }
    ],
    steps: [
      "Prepare o brigadeiro cozinhando todos os ingredientes até desgrudar da panela.",
      "Deixe esfriar completamente.",
      "Nos potinhos, faça a primeira camada com brigadeiro.",
      "Adicione uma camada de coco ralado.",
      "Coloque mais brigadeiro e finalize com chantilly.",
      "Decore com chocolate granulado.",
      "Refrigere por pelo menos 2 horas antes de servir."
    ],
    tips: "Sobremesas de pote são práticas para vender. Use potinhos bonitos e faça camadas bem definidas para o efeito visual. Ótima margem de lucro!"
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getRecipesByCategory(categorySlug: string): Recipe[] {
  return recipes.filter(recipe => recipe.category_slug === categorySlug);
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

export function searchRecipes(query: string, categorySlug?: string): Recipe[] {
  let filteredRecipes = categorySlug 
    ? recipes.filter(r => r.category_slug === categorySlug)
    : recipes;
    
  if (!query.trim()) return filteredRecipes;
  
  const searchTerm = query.toLowerCase();
  return filteredRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm)
  );
}