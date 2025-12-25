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
    slug: "no-bake-recipes",
    title: "Receitas Sem Fogo",
    description: "Deliciosos Recheios que não Vão ao Fogo.",
    image: "https://s2-receitas.glbimg.com/Py-8PUREpbOjlcqKB_iAS2CESI8=/4032x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/D/2/E2yVJwTxaPYEmaQAxADQ/recheio-de-brigadeiro-branco-para-bolo.jpg",
    recipe_count: 22
  },
  {
    slug: "no-bake-pudding",
    title: "Pudim Sem Forno",
    description: "Deliciosos Pudim que Não vão ao Fogo.",
    image: "https://cozinhaglobo.com.br/wp-content/uploads/2023/07/pudim-de-leite-1024x682.jpg",
    recipe_count: 10
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
    image: "https://www.bolandobolos.net.br/img/bd-ninho-com-morango-smartphone.jpg",
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
          "1 xícara de leite",
          "1/2 xícara de óleo",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "2 colheres de sopa de leite Ninho em pó",
          "200g de creme de leite",
          "300g de morangos frescos picados"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate branco",
          "200g de creme de leite",
          "Leite Ninho para polvilhar",
          "Morangos para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa batendo ovos, açúcar, leite e óleo no liquidificador.",
      "Adicione a farinha e fermento, misture bem.",
      "Asse em forma retangular a 180°C por 35 minutos.",
      "Para o recheio: misture leite condensado, leite Ninho e creme de leite.",
      "Corte o bolo ao meio e espalhe metade do recheio.",
      "Distribua os morangos picados sobre o recheio.",
      "Cubra com a outra camada de bolo.",
      "Derreta o chocolate branco com creme de leite para a cobertura.",
      "Cubra todo o bolo com a cobertura de chocolate branco.",
      "Polvilhe Leite Ninho generosamente por cima.",
      "Decore com morangos frescos cortados ao meio.",
      "Refrigere por 2 horas antes de cortar em 12 fatias.",
      "Embale individualmente em caixinhas brancas para valorizar o produto."
    ],
    tips: "Para vender: Use embalagens brancas ou transparentes para destacar a beleza do bolo. Cole etiquetas elegantes. Os morangos frescos por cima valorizam muito! Sugestão de preço: R$ 14-18 por fatia. Durabilidade: 3 dias na geladeira. Melhor dia de venda: quinta a domingo."
  },
  {
    id: "bolo-cenoura-brigadeiro",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Cenoura com Brigadeiro",
    description: "Tradicional bolo de cenoura com cobertura de brigadeiro.",
    image: "https://atelierdossabores.com.br/zona-sul/wp-content/uploads/sites/6/2022/04/Cenoura-com-chocolate-fatia-quadrada-4.jpg",
    prep_time_minutes: 30,
    total_time_minutes: 45,
    servings: "12 fatias",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "3 cenouras médias",
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO E COBERTURA",
        items: [
          "2 latas de leite condensado",
          "4 colheres de sopa de chocolate em pó",
          "2 colheres de sopa de manteiga",
          "Chocolate granulado para decorar"
        ]
      }
    ],
    steps: [
      "Bata no liquidificador as cenouras, ovos, açúcar e óleo até ficar homogêneo.",
      "Despeje em uma tigela e adicione a farinha aos poucos.",
      "Acrescente o fermento e misture delicadamente.",
      "Asse em forma retangular untada a 180°C por 45 minutos.",
      "Deixe esfriar completamente.",
      "Prepare o brigadeiro: leve ao fogo leite condensado, chocolate e manteiga.",
      "Mexa sem parar até desgrudar do fundo da panela.",
      "Corte o bolo ao meio horizontalmente.",
      "Espalhe metade do brigadeiro como recheio.",
      "Cubra com a outra camada.",
      "Espalhe o restante do brigadeiro por cima e nas laterais.",
      "Cubra com chocolate granulado ainda morno.",
      "Refrigere por 2 horas e corte em 12 fatias."
    ],
    tips: "Para vender: Este é um clássico que todo mundo ama! Embale em caixinhas ou saquinhos transparentes. A cenoura dá uma cor bonita e é super saudável. Sugestão de preço: R$ 9-12 por fatia. Ótimo custo-benefício. Divulgue como 'feito com cenoura fresca'. Dura até 5 dias refrigerado."
  },
  {
    id: "bolo-limao",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Limão",
    description: "Bolo refrescante de limão com cobertura cremosa.",
    image: "https://i.ytimg.com/vi/QtSkLzPGOp4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4Y_AHUYb58bwTgQFNebjuudKZNw",
    prep_time_minutes: 30,
    total_time_minutes: 40,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "1 xícara de leite",
          "Suco de 2 limões",
          "Raspas de 1 limão",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "Suco de 3 limões"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate branco",
          "200g de creme de leite",
          "Raspas de limão para decorar"
        ]
      }
    ],
    steps: [
      "Bata ovos, açúcar, óleo, leite e suco de limão no liquidificador.",
      "Adicione as raspas de limão.",
      "Misture a farinha de trigo aos poucos.",
      "Acrescente o fermento e mexa delicadamente.",
      "Asse em forma retangular a 180°C por 40 minutos.",
      "Prepare o recheio misturando leite condensado com suco de limão.",
      "Deixe na geladeira até engrossar (30 minutos).",
      "Corte o bolo ao meio e espalhe o recheio.",
      "Derreta chocolate branco com creme de leite.",
      "Cubra todo o bolo com a cobertura branca.",
      "Decore com raspas de limão por cima.",
      "Refrigere por 3 horas antes de cortar.",
      "Corte em 12 fatias e embale em papel transparente."
    ],
    tips: "Para vender: Perfeito para o verão! O limão é refrescante e faz sucesso. Use embalagens claras. Destaque 'sabor refrescante de limão' na divulgação. Sugestão de preço: R$ 11-14 por fatia. Ótimo para festas e eventos ao ar livre. Dura 4 dias refrigerado."
  },
  {
    id: "bolo-ferrero-rocher",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Ferrero Rocher",
    description: "Bolo sofisticado com Ferrero Rocher para clientes especiais.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdVSsIADTke9u5JLWc2t3aWFjK3rJdg40aQ&s",
    prep_time_minutes: 35,
    total_time_minutes: 45,
    servings: "12 fatias",
    difficulty: "Difícil",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "1 xícara de leite",
          "2 xícaras de farinha de trigo",
          "1 xícara de cacau em pó",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "300g de Nutella",
          "200g de creme de leite",
          "100g de avelãs trituradas"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate ao leite",
          "200g de creme de leite",
          "12 bombons Ferrero Rocher",
          "Avelãs inteiras para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa batendo ovos, açúcar, óleo e leite.",
      "Adicione farinha e cacau peneirados.",
      "Acrescente fermento e asse a 180°C por 35 minutos em forma retangular.",
      "Misture Nutella com creme de leite e avelãs trituradas para o recheio.",
      "Corte o bolo ao meio e espalhe o recheio.",
      "Derreta chocolate ao leite com creme de leite para a ganache.",
      "Cubra todo o bolo com a ganache.",
      "Antes de secar, pressione avelãs nas laterais.",
      "Refrigere por 2 horas.",
      "Corte em 12 fatias.",
      "Coloque 1 Ferrero Rocher no topo de cada fatia.",
      "Embale cada fatia em caixinha dourada ou transparente elegante.",
      "Finalize com laço de fita dourada."
    ],
    tips: "Para vender: Este é um produto PREMIUM! Use embalagens sofisticadas (caixinhas douradas ou pretas). Cole etiquetas elegantes. Perfeito para presentes e datas especiais. Sugestão de preço: R$ 18-25 por fatia. Faça propaganda nas redes sociais mostrando o luxo do produto. Aceite encomendas antecipadas."
  },
  {
    id: "bolo-nutella",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Nutella",
    description: "Fatia de bolo recheado com muito Nutella, perfeito para vender.",
    image: "https://cursosdedocesgourmet.wordpress.com/wp-content/uploads/2020/02/50ee5047-96d5-4ae2-a732-1a3372968d07.jpeg",
    prep_time_minutes: 30,
    total_time_minutes: 40,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "1 xícara de leite",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento em pó"
        ]
      },
      {
        group: "RECHEIO E COBERTURA",
        items: [
          "500g de Nutella",
          "200g de creme de leite",
          "Chocolate granulado para decorar",
          "Avelãs picadas para decorar"
        ]
      }
    ],
    steps: [
      "Bata no liquidificador os ovos, açúcar, óleo e leite até ficar homogêneo.",
      "Despeje em uma tigela, adicione a farinha aos poucos mexendo delicadamente.",
      "Por último, adicione o fermento e misture suavemente.",
      "Asse em forma retangular untada (30x40cm) a 180°C por 35-40 minutos.",
      "Deixe esfriar completamente antes de cortar.",
      "Corte o bolo ao meio na horizontal, formando duas camadas.",
      "Misture 300g de Nutella com o creme de leite para o recheio cremoso.",
      "Espalhe o recheio na primeira camada e cubra com a segunda.",
      "Derreta 200g de Nutella em banho-maria e cubra todo o bolo.",
      "Decore com chocolate granulado e avelãs nas laterais.",
      "Corte em 12 fatias generosas e embale individualmente em papel celofane.",
      "Cole etiquetas personalizadas e refrigere até a venda."
    ],
    tips: "Para vender: Embale cada fatia em caixinhas individuais ou saquinhos transparentes. Adicione um laço de fita e uma etiqueta bonita. Mantenha refrigerado. Sugestão de preço: R$ 12-15 por fatia. Dica profissional: Faça o bolo um dia antes para que fique mais úmido e fácil de cortar."
  },
  {
    id: "bolo-chocolate",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Chocolate",
    description: "Clássico bolo de chocolate com cobertura cremosa.",
    image: "https://content5.flowwow-images.com/data/flowers/1000x1000/50/1726494523_31700150.jpg",
    prep_time_minutes: 25,
    total_time_minutes: 40,
    servings: "12 fatias",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "1 xícara de leite",
          "2 xícaras de farinha de trigo",
          "1 xícara de chocolate em pó",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "2 colheres de sopa de chocolate em pó",
          "1 colher de sopa de manteiga"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate meio amargo",
          "200g de creme de leite",
          "Chocolate granulado"
        ]
      }
    ],
    steps: [
      "Bata no liquidificador ovos, açúcar, óleo e leite.",
      "Adicione farinha e chocolate em pó aos poucos.",
      "Acrescente o fermento e misture delicadamente.",
      "Asse em forma retangular untada a 180°C por 40 minutos.",
      "Faça o recheio: leve ao fogo leite condensado, chocolate e manteiga até engrossar.",
      "Corte o bolo ao meio e recheie.",
      "Derreta o chocolate com creme de leite em banho-maria.",
      "Cubra todo o bolo com a ganache de chocolate.",
      "Decore com chocolate granulado nas laterais.",
      "Deixe na geladeira por 3 horas antes de cortar.",
      "Corte em fatias generosas de aproximadamente 8cm.",
      "Embale em papel celofane transparente amarrado com fita."
    ],
    tips: "Para vender: O chocolate é sempre campeão de vendas! Embale bem e mantenha refrigerado. Adicione um cartãozinho com os ingredientes. Sugestão de preço: R$ 10-13 por fatia. Faça pedidos antecipados e ofereça desconto para compras acima de 4 fatias. Durabilidade: 5 dias refrigerado."
  },
  {
    id: "bolo-red-velvet",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Red Velvet",
    description: "Clássico bolo vermelho com cream cheese.",
    image: "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/bolo-red-velvet-1920w.jpg",
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
          "1 xícara de óleo",
          "1 xícara de leite",
          "3 xícaras de farinha de trigo",
          "3 colheres de sopa de cacau em pó",
          "Corante vermelho em gel",
          "1 colher de sopa de vinagre",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO E COBERTURA",
        items: [
          "400g de cream cheese",
          "1 lata de leite condensado",
          "200g de manteiga",
          "Raspas de chocolate branco para decorar"
        ]
      }
    ],
    steps: [
      "Bata ovos, açúcar, óleo e leite no liquidificador.",
      "Adicione o corante vermelho até obter cor intensa.",
      "Misture farinha e cacau peneirados.",
      "Adicione o vinagre e por último o fermento.",
      "Asse em forma retangular a 180°C por 35 minutos.",
      "Para o creme: bata cream cheese, leite condensado e manteiga até ficar cremoso.",
      "Corte o bolo em 3 camadas finas.",
      "Recheie cada camada com o creme de cream cheese.",
      "Cubra todo o bolo com o restante do creme.",
      "Faça texturas com garfo no creme.",
      "Decore com raspas de chocolate branco.",
      "Refrigere por 4 horas.",
      "Corte em 12 fatias mostrando as camadas vermelhas.",
      "Embale em caixinhas elegantes."
    ],
    tips: "Para vender: O Red Velvet é SOFISTICADO e muito procurado! Use embalagens elegantes. Tire fotos mostrando as camadas vermelhas. Destaque como 'tradicional americano'. Sugestão de preço: R$ 15-19 por fatia. Perfeito para datas especiais e presentes. Aceite encomendas. Dura 4 dias refrigerado."
  },
  {
    id: "bolo-ninho-maracuja",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Ninho e Maracujá",
    description: "Combinação perfeita de ninho com maracujá.",
    image: "https://lh5.googleusercontent.com/proxy/SzsV2cdIkzv3zfaGFO4nTnp-cg0caEoviTVonfeM8NeMx4YzS81TNLZqyRVfwiXctpmwIen3LQZDMWQ_BA6LFnQzZZQ4fXsvWovE9Unlkvez6nrjJVFnM2k",
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
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "3 colheres de sopa de leite Ninho",
          "Polpa de 4 maracujás",
          "200g de creme de leite"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate branco",
          "200g de creme de leite",
          "Leite Ninho para polvilhar",
          "Sementes de maracujá para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa básica batendo ovos, açúcar, leite e óleo.",
      "Adicione farinha e fermento, asse a 180°C por 40 minutos.",
      "Para o recheio: misture leite condensado, leite Ninho e creme de leite.",
      "Adicione a polpa de maracujá sem as sementes.",
      "Corte o bolo ao meio e espalhe o recheio de ninho com maracujá.",
      "Cubra com a segunda camada.",
      "Derreta chocolate branco com creme de leite.",
      "Cubra todo o bolo com a ganache branca.",
      "Polvilhe leite Ninho generosamente.",
      "Decore com algumas sementes de maracujá por cima.",
      "Refrigere por 3 horas.",
      "Corte em 12 fatias e embale em caixinhas brancas.",
      "Cole etiqueta descrevendo os sabores."
    ],
    tips: "Para vender: Esta combinação é INOVADORA e faz muito sucesso! Destaque nas redes sociais como 'novidade exclusiva'. Use embalagens bonitas. Sugestão de preço: R$ 14-17 por fatia. Perfeito para quem gosta de sabores marcantes. O maracujá equilibra a doçura do ninho. Dura 3 dias refrigerado."
  },
  {
    id: "bolo-oreo",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Oreo",
    description: "Bolo cremoso com biscoitos Oreo.",
    image: "https://i.ytimg.com/vi/uOu7itaA92c/maxresdefault.jpg",
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
          "1 xícara de óleo",
          "1 xícara de leite",
          "2 xícaras de farinha de trigo",
          "1 xícara de cacau em pó",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "200g de cream cheese",
          "1 pacote de Oreo triturado (sem o recheio)"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate meio amargo",
          "200g de creme de leite",
          "Oreos inteiros para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa de chocolate e asse a 180°C por 40 minutos.",
      "Para o recheio: bata leite condensado, creme de leite e cream cheese.",
      "Separe os biscoitos Oreo do recheio e triture os biscoitos.",
      "Misture os Oreos triturados no creme.",
      "Corte o bolo ao meio e espalhe o recheio com Oreo.",
      "Cubra com a segunda camada.",
      "Derreta chocolate com creme de leite para a ganache.",
      "Cubra todo o bolo com a cobertura.",
      "Decore com Oreos inteiros em cima.",
      "Pressione Oreos triturados nas laterais.",
      "Refrigere por 3 horas.",
      "Corte em 12 fatias mostrando o recheio com Oreo.",
      "Embale em saquinhos transparentes ou caixinhas pretas."
    ],
    tips: "Para vender: O Oreo é sucesso garantido, especialmente entre crianças e jovens! Use embalagens pretas ou transparentes. Destaque 'feito com Oreo original'. Sugestão de preço: R$ 13-16 por fatia. Ótimo custo-benefício. Promova em datas comemorativas. Perfeito para festas infantis. Dura 4 dias refrigerado."
  },
  {
    id: "bolo-limao-mirtilo",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Limão e Mirtilo",
    description: "Bolo gourmet de limão com mirtilos frescos.",
    image: "https://padariavianney.com.br/web/image/product.image/2452/image_1024/Bolo%20de%20Lim%C3%A3o%20Siciliano%20Com%20Mirtilo?unique=f4a495b",
    prep_time_minutes: 40,
    total_time_minutes: 45,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "1 xícara de leite",
          "Suco de 3 limões",
          "Raspas de 2 limões",
          "3 xícaras de farinha de trigo",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "1 lata de leite condensado",
          "Suco de 3 limões",
          "200g de creme de leite",
          "150g de mirtilos frescos"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate branco",
          "200g de creme de leite",
          "Mirtilos frescos e raspas de limão para decorar"
        ]
      }
    ],
    steps: [
      "Bata ovos, açúcar, óleo, leite e suco de limão no liquidificador.",
      "Adicione raspas de limão.",
      "Misture farinha de trigo aos poucos.",
      "Acrescente fermento e asse a 180°C por 45 minutos.",
      "Prepare recheio misturando leite condensado, suco de limão e creme de leite.",
      "Reserve alguns mirtilos inteiros e amasse levemente outros.",
      "Misture os mirtilos amassados no recheio.",
      "Corte o bolo ao meio e espalhe o recheio com mirtilos.",
      "Distribua mirtilos inteiros sobre o recheio.",
      "Cubra com a segunda camada.",
      "Derreta chocolate branco com creme de leite.",
      "Cubra o bolo com a ganache branca.",
      "Decore com mirtilos frescos por cima e raspas de limão.",
      "Refrigere por 4 horas, corte em 12 fatias e embale elegantemente."
    ],
    tips: "Para vender: Este é um bolo GOURMET e sofisticado! Use embalagens elegantes e claras. Destaque como 'sabor exclusivo' e 'ingredientes premium'. Perfeito para eventos sofisticados e presentes especiais. Sugestão de preço: R$ 16-22 por fatia. Os mirtilos agregam muito valor. Tire fotos lindas. Dura 3 dias refrigerado."
  },
  {
    id: "bolo-duplo-chocolate",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Duplo Chocolate",
    description: "Bolo com chocolate branco e preto, visual impressionante.",
    image: "https://i.ytimg.com/vi/og4q1Eerz6s/maxresdefault.jpg",
    prep_time_minutes: 35,
    total_time_minutes: 50,
    servings: "12 fatias",
    difficulty: "Difícil",
    ingredients: [
      {
        group: "MASSA DE CHOCOLATE",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "1 xícara de leite",
          "2 xícaras de farinha",
          "1 xícara de cacau em pó",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO BRANCO",
        items: [
          "300g de chocolate branco",
          "200g de creme de leite"
        ]
      },
      {
        group: "RECHEIO PRETO",
        items: [
          "300g de chocolate meio amargo",
          "200g de creme de leite"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200g chocolate branco",
          "200g chocolate meio amargo",
          "200g creme de leite (dividido)"
        ]
      }
    ],
    steps: [
      "Prepare a massa de chocolate e asse a 180°C por 35 minutos.",
      "Deixe esfriar e corte em 3 camadas finas.",
      "Derreta chocolate branco com 100g de creme de leite para recheio branco.",
      "Derreta chocolate meio amargo com 100g de creme de leite para recheio preto.",
      "Monte: primeira camada de bolo + recheio branco.",
      "Segunda camada de bolo + recheio preto.",
      "Terceira camada de bolo.",
      "Prepare duas coberturas: uma de chocolate branco e outra de chocolate meio amargo.",
      "Cubra metade do bolo com chocolate branco e metade com chocolate preto.",
      "Crie um efeito marmorizado no encontro dos dois chocolates.",
      "Decore as laterais alternando chocolate branco e preto.",
      "Refrigere por 4 horas antes de cortar.",
      "Corte em 12 fatias mostrando as camadas.",
      "Embale em caixinhas transparentes para mostrar o visual."
    ],
    tips: "Para vender: O VISUAL é o diferencial deste bolo! Tire fotos lindas mostrando as camadas. Use embalagens transparentes. Destaque como 'artesanal' e 'exclusivo'. Sugestão de preço: R$ 16-20 por fatia. Perfeito para presentear. Aceite encomendas com antecedência. Dura 5 dias refrigerado."
  },
  {
    id: "bolo-kinder-bueno",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Kinder Bueno",
    description: "Bolo irresistível com chocolate Kinder Bueno.",
    image: "https://i0.wp.com/www.flamboesa.com.br/wp-content/uploads/2015/09/bolo-kinder-bueno-6.jpg",
    prep_time_minutes: 40,
    total_time_minutes: 45,
    servings: "12 fatias",
    difficulty: "Difícil",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "2 xícaras de açúcar",
          "1 xícara de óleo",
          "1 xícara de leite",
          "2 xícaras de farinha",
          "1 xícara de cacau em pó",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "300g de creme de avelã branco",
          "200g de creme de leite",
          "3 colheres de Nutella",
          "5 barras de Kinder Bueno picadas"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "400g de chocolate ao leite",
          "200g de creme de leite",
          "12 barras de Kinder Bueno para decorar"
        ]
      }
    ],
    steps: [
      "Prepare a massa de chocolate e asse.",
      "Deixe esfriar e corte em 3 camadas.",
      "Para o recheio, misture o creme de avelã branco com creme de leite.",
      "Adicione a Nutella e misture.",
      "Adicione as barras de Kinder Bueno picadas ao recheio.",
      "Recheie as camadas e monte o bolo.",
      "Derreta chocolate ao leite com creme de leite.",
      "Cubra todo o bolo com a ganache.",
      "Antes de secar, pressione pedaços de Kinder nas laterais.",
      "Refrigere por 3 horas.",
      "Corte em 12 fatias.",
      "Coloque 1 barra de Kinder Bueno inteiro no topo de cada fatia.",
      "Embale em caixinhas marrom ou douradas elegantes."
    ],
    tips: "Para vender: PRODUTO PREMIUM! O Kinder Bueno é muito desejado. Use embalagens sofisticadas. Tire fotos mostrando as barras inteiras em cima. Destaque 'feito com Kinder Bueno original'. Sugestão de preço: R$ 18-24 por fatia. Perfeito para presentes. Aceite encomendas. Promova nas redes sociais. Dura 4 dias refrigerado."
  },
  {
    id: "bolo-ninho-maracuja-v2",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Ninho com Maracujá",
    description: "Combinação tropical de Ninho com maracujá agridoce.",
    image: "https://teamodoce.com.br/wp-content/uploads/2025/12/Bolo-de-Ninho-com-Maracuja.webp",
    prep_time_minutes: 35,
    total_time_minutes: 45,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "1 xícara de açúcar",
          "1 xícara de leite",
          "1/2 xícara de óleo",
          "2 xícaras de farinha",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "395g de leite condensado",
          "200ml de creme de leite",
          "150g de Leite Ninho",
          "1 xícara de polpa de maracujá concentrada"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200g de chocolate branco",
          "100ml de creme de leite",
          "Leite Ninho para polvilhar",
          "Sementes de maracujá para decorar"
        ]
      }
    ],
    steps: [
      "Prepare massa básica batendo ovos com açúcar.",
      "Adicione líquidos e depois farinha peneirada.",
      "Fermento por último, misture levemente.",
      "Asse em forma retangular a 180°C por 35 minutos.",
      "Recheio parte 1: Bata leite condensado, creme de leite e Leite Ninho.",
      "Separe metade desta mistura.",
      "Na outra metade, adicione a polpa de maracujá e misture.",
      "Corte o bolo frio ao meio horizontalmente.",
      "Espalhe o creme de maracujá na primeira camada.",
      "Cubra com a segunda camada de bolo.",
      "Espalhe o creme de Ninho branco por cima.",
      "Derreta chocolate branco com creme de leite e cubra o bolo.",
      "Polvilhe Leite Ninho generosamente e coloque algumas sementes de maracujá.",
      "Refrigere 4 horas e corte em 12 fatias."
    ],
    tips: "SABOR EXCLUSIVO: Destaque a combinação tropical. Preço: R$ 12-15. Perfeito para quem gosta de agridoce. Validade: 2 dias refrigerado devido ao maracujá. Use embalagens que protejam bem da umidade."
  },
  {
    id: "bolo-limao-v2",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Limão",
    description: "Refrescante fatia de bolo de limão com cobertura cítrica.",
    image: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-limao-simples.jpg",
    prep_time_minutes: 35,
    total_time_minutes: 35,
    servings: "12 fatias",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "3 ovos",
          "1 e 1/2 xícara de açúcar",
          "1/2 xícara de óleo",
          "1 xícara de suco de limão",
          "Raspas de 2 limões",
          "2 xícaras de farinha",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "CALDA",
        items: [
          "1 xícara de açúcar",
          "1/2 xícara de suco de limão"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "2 xícaras de açúcar de confeiteiro",
          "Suco de 1 limão",
          "Raspas de limão para decorar"
        ]
      }
    ],
    steps: [
      "Bata os ovos com açúcar até dobrar de volume.",
      "Adicione óleo, suco de limão e raspas.",
      "Misture a farinha peneirada aos poucos.",
      "Por último adicione o fermento.",
      "Asse em forma retangular untada a 180°C por 35 minutos.",
      "Calda: Ferva açúcar com suco de limão por 3 minutos.",
      "Fure o bolo quente com garfo e despeje a calda aos poucos.",
      "Deixe absorver completamente e esfriar.",
      "Cobertura: Misture açúcar de confeiteiro com suco de limão até formar uma pasta.",
      "Espalhe sobre o bolo frio.",
      "Decore com raspas de limão por cima.",
      "Deixe a cobertura secar por 30 minutos.",
      "Corte em 12 fatias usando faca limpa e seca."
    ],
    tips: "DIFERENCIAL NO VERÃO: Produto refrescante, ideal para dias quentes. Preço: R$ 7-10. Destaque nas fotos as raspas de limão. Validade: 4 dias refrigerado. Ótima opção para quem quer algo menos doce."
  },
  {
    id: "bolo-ferrero-rocher-v2",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Ferrero Rocher",
    description: "Sofisticada fatia de bolo com Ferrero Rocher e creme de avelã.",
    image: "https://i.ytimg.com/vi/OJAY5ldA47Y/sddefault.jpg",
    prep_time_minutes: 35,
    total_time_minutes: 60,
    servings: "12 fatias",
    difficulty: "Difícil",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "4 ovos",
          "1 xícara de açúcar",
          "1 xícara de leite",
          "1/2 xícara de óleo",
          "2 xícaras de farinha",
          "1/2 xícara de chocolate em pó",
          "1 colher de sopa de fermento"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "395g de leite condensado",
          "200ml de creme de leite",
          "200g de creme de avelã (tipo Nutella)",
          "100g de avelãs torradas picadas"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200g de chocolate ao leite",
          "100ml de creme de leite",
          "12 bombons Ferrero Rocher",
          "Avelãs picadas para decorar"
        ]
      }
    ],
    steps: [
      "Massa: Bata ovos com açúcar até clarear.",
      "Adicione leite e óleo, misture bem.",
      "Intercale farinha peneirada com chocolate em pó.",
      "Adicione fermento e misture levemente.",
      "Asse em forma retangular a 180°C por 35 minutos.",
      "Recheio: Misture leite condensado, creme de leite e creme de avelã.",
      "Corte o bolo frio em 3 camadas horizontais.",
      "Espalhe metade do recheio na primeira camada e polvilhe avelãs.",
      "Coloque segunda camada, repita o processo.",
      "Finalize com terceira camada.",
      "Cobertura: Derreta chocolate com creme de leite.",
      "Cubra todo o bolo e alise bem.",
      "Decore cada futura fatia com 1 Ferrero Rocher no topo e avelãs ao redor.",
      "Refrigere por 4 horas, corte em 12 fatias com faca quente."
    ],
    tips: "PRODUTO PREMIUM: Embale em caixinhas de acetato elegantes. Destaque o Ferrero no topo. Preço: R$ 15-20 por fatia. Público-alvo: presentear e ocasiões especiais. Validade: 3 dias refrigerado. Invista na apresentação!"
  },
  {
    id: "bolo-nutella-v2",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo de Nutella",
    description: "Fatia de bolo macio com recheio cremoso de Nutella, perfeita para vender.",
    image: "https://i.ytimg.com/vi/-AyJyL1TNO4/hqdefault.jpg",
    prep_time_minutes: 35,
    total_time_minutes: 40,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "3 ovos",
          "1 xícara de açúcar",
          "1 xícara de leite",
          "1/2 xícara de óleo",
          "2 xícaras de farinha de trigo",
          "1 colher de sopa de fermento",
          "1 pitada de sal"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "400g de Nutella",
          "200ml de creme de leite"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "200g de chocolate meio amargo",
          "100ml de creme de leite",
          "Nutella para decorar"
        ]
      }
    ],
    steps: [
      "Massa: Bata os ovos com açúcar até ficar claro. Adicione leite e óleo, misture bem.",
      "Acrescente a farinha peneirada aos poucos, mexendo delicadamente.",
      "Por último adicione o fermento, misture levemente.",
      "Asse em forma retangular (30x20cm) untada e enfarinhada a 180°C, por 35 minutos.",
      "Deixe esfriar completamente antes de cortar.",
      "Recheio: Misture a Nutella com o creme de leite até ficar homogêneo.",
      "Corte o bolo ao meio na horizontal. Espalhe o recheio na camada de baixo.",
      "Cubra com a outra metade do bolo.",
      "Cobertura: Derreta o chocolate com o creme de leite em banho-maria.",
      "Despeje sobre o bolo e espalhe uniformemente.",
      "Decore com fios de Nutella por cima.",
      "Leve à geladeira por 2 horas antes de cortar.",
      "Corte em 12 fatias retangulares uniformes usando faca afiada aquecida."
    ],
    tips: "DICAS PARA VENDA: Embale cada fatia em papel filme ou caixinha individual. Mantenha refrigerado. Preço sugerido: R$ 8-12 por fatia. Validade: 3 dias refrigerado. Use adesivos personalizados na embalagem para valorizar o produto."
  },
  {
    id: "bolo-red-velvet-v2",
    category_slug: "fatias-de-bolos",
    title: "Fatia de Bolo Red Velvet",
    description: "Elegante fatia de Red Velvet com cream cheese.",
    image: "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/bolo-red-velvet-1920w.jpg",
    prep_time_minutes: 35,
    total_time_minutes: 45,
    servings: "12 fatias",
    difficulty: "Médio",
    ingredients: [
      {
        group: "MASSA",
        items: [
          "3 ovos",
          "1 e 1/2 xícara de açúcar",
          "1 xícara de leite",
          "1/2 xícara de óleo",
          "2 xícaras de farinha",
          "2 colheres de sopa de chocolate em pó",
          "1 colher de sopa de vinagre branco",
          "1 colher de sopa de fermento",
          "Corante gel vermelho"
        ]
      },
      {
        group: "RECHEIO",
        items: [
          "200g de cream cheese",
          "200ml de creme de leite fresco",
          "1/2 xícara de açúcar de confeiteiro"
        ]
      },
      {
        group: "COBERTURA",
        items: [
          "300g de cream cheese",
          "200ml de creme de leite fresco",
          "1 xícara de açúcar de confeiteiro",
          "Raspas de chocolate branco para decorar"
        ]
      }
    ],
    steps: [
      "Bata ovos com açúcar até clarear.",
      "Adicione leite, óleo e corante vermelho (até ficar bem vermelho).",
      "Misture farinha com chocolate em pó peneirados.",
      "Adicione vinagre e por último o fermento.",
      "Asse em forma retangular a 180°C por 35 minutos.",
      "Recheio: Bata cream cheese com creme de leite e açúcar até ficar cremoso.",
      "Corte o bolo frio em 3 camadas horizontais.",
      "Recheie cada camada com o creme.",
      "Cobertura: Prepare creme mais firme com mesma receita.",
      "Cubra todo o bolo com cobertura de cream cheese.",
      "Decore com raspas de chocolate branco.",
      "Refrigere por 6 horas antes de cortar.",
      "Corte em 12 fatias com faca bem limpa entre cada corte."
    ],
    tips: "PRODUTO SOFISTICADO: Público que aprecia sabores internacionais. Preço: R$ 12-16. Destaque a cor vermelha nas fotos. Validade: 2 dias refrigerado. Embalagem premium com janela para ver a cor. Ótimo para datas especiais!"
  },

  {
    id: "creme-cream-cheese-geleia-frutas-vermelhas",
    category_slug: "no-bake-recipes",
    title: "Creme de Cream Cheese com Geleia de Frutas Vermelhas",
    description: "Recheio sofisticado de cream cheese com frutas vermelhas.",
    image: "https://receitinhasdadani.com.br/wp-content/uploads/2025/01/Mousse-de-cream-cheese-com-geleia--1140x720.jpeg",
    prep_time_minutes: 15,
    total_time_minutes: 120,
    servings: "Rende 600g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "300g de cream cheese em temperatura ambiente",
          "200g de creme de leite fresco",
          "1/2 xícara de açúcar de confeiteiro",
          "150g de geleia de frutas vermelhas",
          "Frutas vermelhas frescas (opcional)"
        ]
      }
    ],
    steps: [
      "Bata o cream cheese com o açúcar de confeiteiro até ficar bem cremoso.",
      "Adicione o creme de leite aos poucos e bata até incorporar.",
      "O cream cheese naturalmente dá estrutura ao creme.",
      "Em uma tigela, coloque metade do creme.",
      "Adicione a geleia de frutas vermelhas por cima.",
      "Cubra com o restante do creme.",
      "Faça movimentos suaves com uma colher para marmorizar.",
      "Refrigere por 2 horas."
    ],
    tips: "Para vender: Recheio GOURMET e elegante! Perfeito para bolos sofisticados e festas. O visual marmorizado é lindo. Validade: 3 dias refrigerado. Preço premium justificado pela qualidade!"
  },
  {
    id: "creme-cafe-chocolate-branco",
    category_slug: "no-bake-recipes",
    title: "Creme de Café com Chocolate Branco",
    description: "Creme sofisticado de café com chocolate branco.",
    image: "https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/cooking/cropped_temp_157791281654d0ef628d1676.36406090_.jpg",
    prep_time_minutes: 25,
    total_time_minutes: 180,
    servings: "Rende 600g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "200g de chocolate branco derretido",
          "150g de creme de leite",
          "4 colheres de sopa de café solúvel",
          "1/2 xícara de água morna",
          "50g de leite em pó",
          "Grãos de café para decorar"
        ]
      }
    ],
    steps: [
      "Dissolva o café solúvel na água morna.",
      "Derreta o chocolate branco no micro-ondas e deixe esfriar.",
      "Misture leite condensado, chocolate branco derretido e creme de leite.",
      "Adicione o café dissolvido e o leite em pó.",
      "Bata muito bem até ficar homogêneo e encorpado.",
      "Refrigere por 2-3 horas.",
      "Use para rechear bolos gourmet.",
      "Decore com grãos de café torrado."
    ],
    tips: "Para vender: Sabor sofisticado para adultos! Perfeito para eventos corporativos e festas elegantes. Destaque como 'sabor gourmet'. Validade: 4 dias refrigerado. Produto premium!"
  },
  {
    id: "doce-leite-canela-churros-frio",
    category_slug: "no-bake-recipes",
    title: "Doce de Leite com Canela - Churros Frio",
    description: "Recheio cremoso com sabor de churros.",
    image: "https://i.ytimg.com/vi/WTId9SgD3FI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCb-Ww82pj4n_h32WWd8lRInpXgRg",
    prep_time_minutes: 15,
    total_time_minutes: 120,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "400g de doce de leite cremoso",
          "150g de creme de leite",
          "2 colheres de chá de canela em pó",
          "2 colheres de sopa de manteiga",
          "50g de leite em pó",
          "Canela e açúcar para decorar"
        ]
      }
    ],
    steps: [
      "Misture doce de leite com creme de leite e manteiga.",
      "Adicione a canela em pó e o leite em pó.",
      "Bata bem até ficar homogêneo e cremoso.",
      "O leite em pó ajuda a dar estrutura.",
      "Refrigere por 1-2 horas.",
      "Use para rechear bolos, fazer docinhos ou coberturas.",
      "Finalize polvilhando canela com açúcar."
    ],
    tips: "Para vender: Sabor nostálgico de churros! Aroma irresistível de canela. Destaque como 'sabor de churros'. Ótimo custo-benefício. Validade: 5 dias refrigerado. Sucesso em festas!"
  },
  {
    id: "brigadeiro-de-nutella",
    category_slug: "no-bake-recipes",
    title: "Brigadeiro de Nutella",
    description: "Recheio intenso de Nutella, cremoso e estruturado.",
    image: "https://confeitarianarede.com.br/wp-content/uploads/2023/04/nutellacremosa.webp",
    prep_time_minutes: 20,
    total_time_minutes: 120,
    servings: "Rende 450g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "250g de Nutella",
          "150g de creme de leite",
          "2 colheres de sopa de manteiga",
          "50g de leite em pó",
          "50g de avelãs trituradas (opcional)"
        ]
      }
    ],
    steps: [
      "Aqueça a Nutella no micro-ondas por 30 segundos para amolecer.",
      "Misture leite condensado, Nutella amolecida, creme de leite e manteiga.",
      "Adicione o leite em pó e bata bem até ficar homogêneo e brilhante.",
      "O leite em pó ajuda a dar estrutura.",
      "Se usar, adicione as avelãs trituradas.",
      "Refrigere por 2 horas até firmar.",
      "Use para rechear bolos, cupcakes ou fazer brigadeiros gourmet."
    ],
    tips: "Para vender: Destaque 'feito com Nutella original'! Este recheio é premium e permite cobrar mais. Perfeito para bolos gourmet. Validade: 4 dias refrigerado. Rende aproximadamente 20-25 brigadeiros ou recheio para 1 bolo grande."
  },
  {
    id: "ganache-de-chocolate-meio-amargo",
    category_slug: "no-bake-recipes",
    title: "Ganache de Chocolate Meio Amargo",
    description: "Ganache clássica estruturada sem ir ao fogo.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lwuFCEvssDJcEvWdfRhrMPmoLJh_iZUDhw&s",
    prep_time_minutes: 20,
    total_time_minutes: 180,
    servings: "Rende 600g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "400g de chocolate meio amargo picado",
          "300ml de creme de leite",
          "2 colheres de sopa de manteiga"
        ]
      }
    ],
    steps: [
      "Aqueça o creme de leite no micro-ondas por 1-2 minutos até ficar bem quente (quase fervendo).",
      "Coloque o chocolate picado em uma tigela.",
      "Despeje o creme quente sobre o chocolate e deixe descansar 1 minuto.",
      "Mexa delicadamente do centro para fora até o chocolate derreter completamente.",
      "Adicione a manteiga e misture até ficar brilhante e sedosa.",
      "Deixe em temperatura ambiente por 30 minutos.",
      "Refrigere por 2-3 horas até firmar no ponto de rechear.",
      "O chocolate vai firmar naturalmente ao esfriar."
    ],
    tips: "Para vender: Ganache profissional sem ir ao fogo! Perfeita para coberturas lisas e recheios estruturados. Validade: 7 dias refrigerado. Dica: Para cobertura, use morna. Para recheio, use fria e firme."
  },
  {
    id: "creme-de-avela-caseiro",
    category_slug: "no-bake-recipes",
    title: "Creme de Avelã Caseiro",
    description: "Creme tipo Nutella caseiro, cremoso e saboroso.",
    image: "https://s2-receitas.glbimg.com/0AV84K16lqfiLQ22N_cKs-uAjRo=/0x0:1280x853/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/o/g/LTShNAQDuAWoMaNrABog/creme-de-avela.jpeg",
    prep_time_minutes: 25,
    total_time_minutes: 120,
    servings: "Rende 500g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "200g de avelãs torradas",
          "1 lata de leite condensado",
          "200g de chocolate ao leite derretido",
          "100g de creme de leite",
          "3 colheres de sopa de cacau em pó",
          "50g de leite em pó"
        ]
      }
    ],
    steps: [
      "Triture as avelãs no processador até virar uma pasta cremosa (pode demorar 5-8 minutos).",
      "Derreta o chocolate no micro-ondas (intervalos de 30 segundos).",
      "Misture a pasta de avelã com leite condensado e chocolate derretido.",
      "Adicione o creme de leite, cacau em pó e leite em pó.",
      "Bata bem até ficar homogêneo e encorpado.",
      "Refrigere por 2 horas.",
      "Use para rechear ou fazer brigadeiros gourmet."
    ],
    tips: "Para vender: Creme de avelã CASEIRO e artesanal! Destaque que é feito com avelãs reais. Produto premium com bom valor agregado. Validade: 5 dias refrigerado. Custo um pouco maior mas vale a pena!"
  },
  {
    id: "geleia-de-frutas-vermelhas-estruturada",
    category_slug: "no-bake-recipes",
    title: "Geleia de Frutas Vermelhas Estruturada",
    description: "Geleia caseira de frutas vermelhas para rechear.",
    image: "https://static.wixstatic.com/media/f72400_9ef08ee45fd7433f96ae4c0f29aac040~mv2.jpg/v1/fill/w_488,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f72400_9ef08ee45fd7433f96ae4c0f29aac040~mv2.jpg",
    prep_time_minutes: 20,
    total_time_minutes: 240,
    servings: "Rende 400g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "300g de frutas vermelhas frescas ou congeladas (morango, framboesa, amora)",
          "1 xícara de açúcar",
          "Suco de 1 limão",
          "2 colheres de sopa de amido de milho"
        ]
      }
    ],
    steps: [
      "Amasse as frutas vermelhas com um garfo (deixe alguns pedaços).",
      "Misture com o açúcar, suco de limão e amido de milho.",
      "Leve ao micro-ondas por 3-4 minutos (mexendo a cada minuto).",
      "O amido vai engrossar a geleia naturalmente.",
      "Deixe esfriar completamente.",
      "Refrigere por 2-3 horas até firmar bem.",
      "Use para rechear bolos, tortas ou coberturas."
    ],
    tips: "Para vender: Geleia CASEIRA e natural! Destaque 'feita com frutas frescas' e 'sem conservantes'. Produto artesanal premium. Validade: 5 dias refrigerado. Perfeita para bolos gourmet!"
  },
  {
    id: "brigadeiro-branco-com-leite-ninho",
    category_slug: "no-bake-recipes",
    title: "Brigadeiro Branco com Leite Ninho",
    description: "Recheio cremoso e estruturado de brigadeiro branco, perfeito para bolos e doces.",
    image: "https://cdn.aquelareceita.com.br/recipes/vlcsnap-2020-09-17-09h57m39s458FB-1641924679701.png",
    prep_time_minutes: 15,
    total_time_minutes: 120,
    servings: "Rende 400g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "150g de Leite Ninho em pó",
          "2 colheres de sopa de manteiga",
          "50g de leite em pó integral"
        ]
      }
    ],
    steps: [
      "Em uma tigela, misture o leite condensado com o creme de leite.",
      "Adicione o Leite Ninho em pó, o leite em pó e a manteiga.",
      "Bata vigorosamente com fouet até ficar bem cremoso e homogêneo.",
      "O leite em pó vai dar estrutura ao creme.",
      "Leve à geladeira por 1-2 horas para firmar.",
      "Use para rechear bolos, fazer brigadeiros gourmet ou decorar sobremesas."
    ],
    tips: "Para vender: Este recheio é CREMOSO e não derrete! Perfeito para bolos de pote, naked cakes e doces finos. Rende bem e tem ótimo custo-benefício. Validade: 5 dias refrigerado. Dica profissional: Pode adicionar mais leite Ninho por cima na finalização."
  },
  {
    id: "creme-de-maracuja-estruturado",
    category_slug: "no-bake-recipes",
    title: "Creme de Maracujá Estruturado",
    description: "Creme tropical de maracujá firme e saboroso.",
    image: "https://i.ytimg.com/vi/3ABQPPfo4jo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqFMbs_KL0GqYSDiGs_6WsGKyatw",
    prep_time_minutes: 20,
    total_time_minutes: 180,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "1 xícara de polpa de maracujá concentrada (coada)",
          "50g de leite em pó",
          "Sementes de maracujá para decorar"
        ]
      }
    ],
    steps: [
      "Coe a polpa de maracujá para separar as sementes.",
      "Misture leite condensado com a polpa de maracujá.",
      "Adicione o creme de leite e o leite em pó.",
      "Bata muito bem até ficar homogêneo.",
      "O ácido do maracujá ajuda a engrossar.",
      "Refrigere por 2-3 horas.",
      "Use para rechear bolos, tortas ou fazer mousses.",
      "Decore com sementes de maracujá."
    ],
    tips: "Para vender: Sabor tropical irresistível! O maracujá equilibra perfeitamente o doce. Destaque como 'sabor natural'. Validade: 3 dias refrigerado. Perfeito para tortas e bolos gelados!"
  },
  {
    id: "mousse-de-chocolate",
    category_slug: "no-bake-recipes",
    title: "Mousse de Chocolate",
    description: "Mousse clássica de chocolate aerada e intensa.",
    image: "https://i.ytimg.com/vi/ReORK6AdcKA/sddefault.jpg",
    prep_time_minutes: 25,
    total_time_minutes: 240,
    servings: "Rende 700g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "300g de chocolate meio amargo",
          "200ml de creme de leite (para derreter)",
          "300ml de creme de leite fresco gelado (para bater)",
          "2 colheres de sopa de açúcar"
        ]
      }
    ],
    steps: [
      "Derreta o chocolate com 200ml de creme de leite no micro-ondas (intervalos de 30 seg).",
      "Mexa até ficar homogêneo e deixe esfriar completamente.",
      "Bata os 300ml de creme de leite fresco com açúcar até formar picos firmes.",
      "Incorpore delicadamente o creme batido ao chocolate frio.",
      "Faça movimentos suaves para manter a aeração.",
      "Refrigere por 4 horas.",
      "O creme batido dá estrutura e leveza à mousse."
    ],
    tips: "Para vender: Mousse profissional e aerada! Textura de confeitaria. Perfeita para bolos sofisticados. Validade: 4 dias refrigerado. Dica: Pode fazer camadas alternadas com mousse branca."
  },
  {
    id: "doce-de-leite-com-coco",
    category_slug: "no-bake-recipes",
    title: "Doce de Leite com Coco",
    description: "Recheio cremoso de doce de leite com coco ralado.",
    image: "https://i.ytimg.com/vi/0YoboqpFQ6M/sddefault.jpg",
    prep_time_minutes: 10,
    total_time_minutes: 120,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "400g de doce de leite cremoso",
          "150g de creme de leite",
          "100g de coco ralado fino",
          "2 colheres de sopa de manteiga",
          "50g de leite em pó"
        ]
      }
    ],
    steps: [
      "Misture o doce de leite com o creme de leite e manteiga.",
      "Bata bem até ficar cremoso.",
      "Adicione o coco ralado e o leite em pó.",
      "Misture até incorporar completamente.",
      "Refrigere por 1-2 horas.",
      "Use para rechear bolos, tortas ou fazer docinhos."
    ],
    tips: "Para vender: Sabor tropical que agrada muito! Ótimo custo-benefício. Use para rechear bolos simples e vender por preço popular. Validade: 5 dias refrigerado. Dica: Pode polvilhar coco queimado por cima na finalização."
  },
  {
    id: "doce-de-leite-com-nozes",
    category_slug: "no-bake-recipes",
    title: "Doce de Leite com Nozes",
    description: "Recheio sofisticado de doce de leite com nozes crocantes.",
    image: "https://i.ytimg.com/vi/TGNP4db5dMI/maxresdefault.jpg",
    prep_time_minutes: 15,
    total_time_minutes: 120,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "400g de doce de leite cremoso",
          "150g de creme de leite",
          "100g de nozes picadas",
          "2 colheres de sopa de manteiga",
          "50g de leite em pó",
          "1 pitada de canela em pó (opcional)"
        ]
      }
    ],
    steps: [
      "Pique as nozes em pedaços médios (reserve algumas inteiras para decorar).",
      "Misture doce de leite, creme de leite e manteiga.",
      "Adicione o leite em pó e bata até ficar homogêneo.",
      "Acrescente as nozes picadas e a canela.",
      "Refrigere por 1-2 horas.",
      "Use para rechear bolos, tortas ou pavês."
    ],
    tips: "Para vender: Recheio GOURMET e sofisticado! As nozes dão crocância e elegância. Perfeito para bolos vendidos a preço premium. Validade: 4 dias refrigerado. Destaque 'com nozes selecionadas' na divulgação."
  },
  {
    id: "creme-de-leite-ninho-com-morango",
    category_slug: "no-bake-recipes",
    title: "Creme de Leite Ninho com Morango",
    description: "Creme delicado de Ninho com morangos frescos.",
    image: "https://bolosparavender.com/wp-content/uploads/2025/04/creme-de-ninho-com-morango-1200x900.jpg",
    prep_time_minutes: 20,
    total_time_minutes: 120,
    servings: "Rende 600g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "150g de Leite Ninho em pó",
          "200g de creme de leite",
          "200g de morangos frescos picados",
          "50g de leite em pó",
          "Morangos para decorar"
        ]
      }
    ],
    steps: [
      "Lave e pique os morangos em cubos pequenos.",
      "Misture leite condensado com Leite Ninho em pó e leite em pó.",
      "Adicione o creme de leite e bata bem até ficar cremoso.",
      "O leite em pó ajuda a dar estrutura.",
      "Incorpore delicadamente os morangos picados.",
      "Refrigere por 2 horas.",
      "Use para rechear bolos, cupcakes ou fazer sobremesas.",
      "Decore com morangos frescos fatiados."
    ],
    tips: "Para vender: Combinação campeã de vendas! Ninho + morango é sucesso garantido. Use morangos frescos e de qualidade. Validade: 2 dias refrigerado (fruta fresca). Preço premium justificado!"
  },
  {
    id: "creme-de-mascarpone-com-chocolate",
    category_slug: "no-bake-recipes",
    title: "Creme de Mascarpone com Chocolate",
    description: "Creme sofisticado de mascarpone com chocolate.",
    image: "https://prettysimplesweet.com/wp-content/uploads/2020/02/chocolate-cream-cheese-frosting-683x1024.jpg",
    prep_time_minutes: 20,
    total_time_minutes: 180,
    servings: "Rende 600g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "250g de mascarpone",
          "200g de chocolate meio amargo derretido",
          "1/2 lata de leite condensado",
          "150g de creme de leite",
          "Cacau em pó para decorar"
        ]
      }
    ],
    steps: [
      "Derreta o chocolate no micro-ondas e deixe esfriar.",
      "Bata o mascarpone até ficar cremoso.",
      "Adicione o leite condensado e bata.",
      "Acrescente o chocolate derretido e o creme de leite.",
      "Bata até ficar homogêneo e brilhante.",
      "O mascarpone naturalmente dá estrutura cremosa.",
      "Refrigere por 2-3 horas.",
      "Use para rechear bolos sofisticados ou fazer tiramisu."
    ],
    tips: "Para vender: Recheio GOURMET de confeitaria profissional! Sabor suave e sofisticado. Perfeito para bolos de casamento e eventos elegantes. Validade: 4 dias refrigerado. Preço premium!"
  },
  {
    id: "creme-de-amendoim",
    category_slug: "no-bake-recipes",
    title: "Creme de Amendoim",
    description: "Creme irresistível de amendoim estruturado.",
    image: "https://newmillen.com.br/wp-content/uploads/2017/05/creme-de-amendoim-1-1024x768.jpg",
    prep_time_minutes: 15,
    total_time_minutes: 120,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "250g de pasta de amendoim cremosa",
          "150g de creme de leite",
          "2 colheres de sopa de manteiga",
          "50g de leite em pó",
          "Amendoim picado para decorar"
        ]
      }
    ],
    steps: [
      "Misture leite condensado com pasta de amendoim.",
      "Adicione creme de leite, manteiga e leite em pó.",
      "Bata muito bem até ficar homogêneo e encorpado.",
      "A pasta de amendoim e o leite em pó dão estrutura.",
      "Refrigere por 2 horas.",
      "Use para rechear bolos, cupcakes ou fazer docinhos.",
      "Decore com amendoim picado torrado."
    ],
    tips: "Para vender: Sabor marcante que está SUPER em alta! Perfeito para público jovem. Destaque como 'feito com pasta de amendoim'. Validade: 5 dias refrigerado. Ótimo custo-benefício!"
  },
  {
    id: "creme-de-oreo",
    category_slug: "no-bake-recipes",
    title: "Creme de Oreo",
    description: "Creme cremoso com biscoitos Oreo triturados.",
    image: "https://i.ytimg.com/vi/-Y508bf0kmg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMBPfMDo_vn_qvMpKOdvv5Du5Zfg",
    prep_time_minutes: 20,
    total_time_minutes: 120,
    servings: "Rende 600g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "250g de cream cheese",
          "150g de creme de leite",
          "150g de biscoitos Oreo triturados (sem o recheio)",
          "Oreos inteiros para decorar"
        ]
      }
    ],
    steps: [
      "Separe o recheio dos biscoitos Oreo.",
      "Triture apenas os biscoitos até virar farofa fina.",
      "Bata o cream cheese até ficar bem cremoso.",
      "Adicione leite condensado e creme de leite.",
      "Bata até incorporar completamente.",
      "O cream cheese dá estrutura cremosa.",
      "Misture os Oreos triturados delicadamente.",
      "Refrigere por 2 horas.",
      "Decore com Oreos inteiros."
    ],
    tips: "Para vender: Oreo é SEMPRE sucesso! Especialmente com crianças e jovens. Visual lindo com pedaços de biscoito. Validade: 4 dias refrigerado. Use embalagens que mostrem os Oreos."
  },
  {
    id: "creme-de-limao-estruturado",
    category_slug: "no-bake-recipes",
    title: "Creme de Limão Estruturado",
    description: "Creme cítrico de limão firme e cremoso.",
    image: "https://i.ytimg.com/vi/CbK70w-ofB0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvhZt1GfqvHQdJSFkfDiPIj0IqSA",
    prep_time_minutes: 20,
    total_time_minutes: 180,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "Suco de 5 limões",
          "Raspas de 2 limões",
          "50g de leite em pó"
        ]
      }
    ],
    steps: [
      "Misture leite condensado com suco de limão.",
      "O limão faz o leite condensado engrossar naturalmente.",
      "Adicione o creme de leite, raspas e leite em pó.",
      "Bata bem até ficar homogêneo e cremoso.",
      "Refrigere por 2-3 horas até firmar.",
      "Use para rechear bolos, tortas ou fazer mousses."
    ],
    tips: "Para vender: Sabor refrescante e marcante! Perfeito para o verão. Destaque o sabor natural de limão. Validade: 4 dias refrigerado. Ótimo para tortas e bolos gelados."
  },
  {
    id: "ganache-de-chocolate-branco",
    category_slug: "no-bake-recipes",
    title: "Ganache de Chocolate Branco",
    description: "Ganache de chocolate branco cremosa e estável.",
    image: "https://comidinhasdochef.com/wp-content/uploads/2018/11/Ganache-de-Chocolate-Branco.jpg",
    prep_time_minutes: 20,
    total_time_minutes: 180,
    servings: "Rende 550g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "400g de chocolate branco picado",
          "200ml de creme de leite",
          "2 colheres de sopa de manteiga"
        ]
      }
    ],
    steps: [
      "Aqueça o creme de leite no micro-ondas por 1 minuto (bem quente).",
      "Coloque o chocolate branco picado em tigela.",
      "Despeje o creme quente sobre o chocolate.",
      "Aguarde 1 minuto e mexa do centro para fora até derreter completamente.",
      "Adicione a manteiga e misture até ficar brilhante.",
      "Deixe em temperatura ambiente por 30 minutos.",
      "Refrigere por 2-3 horas até firmar.",
      "O chocolate branco firma naturalmente ao esfriar."
    ],
    tips: "Para vender: Ganache de chocolate branco é sofisticada e versátil! Perfeita para bolos de casamento e festas elegantes. Pode colorir com corante em gel. Validade: 7 dias refrigerado."
  },
  {
    id: "creme-de-maracuja",
    category_slug: "no-bake-recipes",
    title: "Creme de Maracujá",
    description: "Creme refrescante de maracujá estruturado.",
    image: "https://acaifruitshow.com.br/wp-content/uploads/2021/09/100.png",
    prep_time_minutes: 15,
    total_time_minutes: 180,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "200g de creme de leite",
          "1 xícara de suco de maracujá concentrado (polpa coada)",
          "50g de leite em pó",
          "Sementes de maracujá para decorar"
        ]
      }
    ],
    steps: [
      "Em uma tigela, misture leite condensado, creme de leite e suco de maracujá.",
      "Adicione o leite em pó para dar estrutura.",
      "Bata bem com fouet até ficar homogêneo e cremoso.",
      "Refrigere por 2-3 horas até firmar.",
      "Use para rechear bolos, tortas ou fazer sobremesas em taças.",
      "Decore com sementes de maracujá."
    ],
    tips: "Para vender: Sabor tropical e refrescante! Perfeito para o verão. Destaque o sabor natural de maracujá. Validade: 3 dias refrigerado. Ótimo para bolos de pote e tortas geladas."
  },
  {
    id: "mousse-de-limao",
    category_slug: "no-bake-recipes",
    title: "Mousse de Limão",
    description: "Mousse aerada e estruturada de limão.",
    image: "https://www.receitadecupcake.com.br/wp-content/uploads/2014/06/Recheio-de-Mousse-de-Lim%C3%A3o.jpg",
    prep_time_minutes: 20,
    total_time_minutes: 240,
    servings: "Rende 600g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "1 xícara de suco de limão",
          "Raspas de 2 limões",
          "300ml de creme de leite fresco gelado",
          "2 colheres de sopa de açúcar"
        ]
      }
    ],
    steps: [
      "Misture leite condensado com suco de limão e raspas.",
      "O limão vai fazer o leite condensado encorpar naturalmente.",
      "Na batedeira, bata o creme de leite fresco com açúcar até formar picos firmes.",
      "Incorpore delicadamente o creme batido à mistura de limão.",
      "Use movimentos suaves de baixo para cima.",
      "Refrigere por 3-4 horas até firmar.",
      "Use para rechear bolos, fazer tortas ou servir em taças."
    ],
    tips: "Para vender: Mousse leve e refrescante! Perfeita para recheios de bolos altos. O creme batido dá leveza profissional. Validade: 3 dias refrigerado. Destaque como 'mousse aerada'."
  },
  {
    id: "creme-de-coco-beijinho-cremoso",
    category_slug: "no-bake-recipes",
    title: "Creme de Coco - Beijinho Cremoso",
    description: "Creme de beijinho frio, cremoso e estruturado.",
    image: "https://i.ytimg.com/vi/syZ2nhBqTPI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDVDsB6WF0bN1ISZgOG6jqpVz-OEw",
    prep_time_minutes: 15,
    total_time_minutes: 120,
    servings: "Rende 500g",
    difficulty: "Fácil",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "200ml de leite de coco",
          "100g de coco ralado fino",
          "150g de creme de leite",
          "2 colheres de sopa de manteiga",
          "50g de leite em pó",
          "Coco ralado para decorar"
        ]
      }
    ],
    steps: [
      "Misture leite condensado, leite de coco, creme de leite e manteiga.",
      "Adicione o leite em pó e bata bem até ficar homogêneo.",
      "Acrescente o coco ralado e misture.",
      "O leite em pó dá estrutura ao creme.",
      "Refrigere por 1-2 horas.",
      "Use para rechear bolos, fazer beijinhos gourmet ou coberturas.",
      "Finalize com coco ralado por cima."
    ],
    tips: "Para vender: Sabor clássico brasileiro que todo mundo ama! Ótimo custo-benefício. Perfeito para bolos simples e festa infantil. Validade: 5 dias refrigerado. Destaque o sabor de 'beijinho'."
  },
  {
    id: "creme-de-amendoim-com-chocolate",
    category_slug: "no-bake-recipes",
    title: "Creme de Amendoim com Chocolate",
    description: "Combinação perfeita de amendoim e chocolate.",
    image: "https://www.receiteria.com.br/wp-content/uploads/pasta-de-amendoim-com-chocolate-01.jpg",
    prep_time_minutes: 20,
    total_time_minutes: 180,
    servings: "Rende 600g",
    difficulty: "Médio",
    ingredients: [
      {
        group: "Ingredientes",
        items: [
          "1 lata de leite condensado",
          "150g de pasta de amendoim",
          "150g de chocolate meio amargo derretido",
          "150g de creme de leite",
          "50g de leite em pó",
          "Amendoim picado e chocolate para decorar"
        ]
      }
    ],
    steps: [
      "Derreta o chocolate no micro-ondas e deixe esfriar.",
      "Divida os ingredientes em duas tigelas.",
      "Tigela 1: misture metade do leite condensado com pasta de amendoim e metade do creme de leite.",
      "Tigela 2: misture outra metade do leite condensado com chocolate e restante do creme.",
      "Adicione metade do leite em pó em cada tigela.",
      "Em uma forma, coloque camadas alternadas.",
      "Faça movimento de marmorizado com palito.",
      "Refrigere por 2-3 horas."
    ],
    tips: "Para vender: Combinação IRRESISTÍVEL! Visual marmorizado impressiona. Produto premium que justifica preço mais alto. Validade: 4 dias refrigerado. Perfeito para bolos gourmet."
  },

  {
    id: 'pudim-de-limao',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Limão',
    description: 'Pudim refrescante de limão sem forno, perfeito para o verão.',
    image: 'https://i.ytimg.com/vi/zAhOxEaN7T4/maxresdefault.jpg',
    prep_time_minutes: 20,
    total_time_minutes: 480,
    servings: '8 porções',
    difficulty: 'Fácil',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          'Suco de 4 limões',
          'Raspas de 2 limões',
          '1 pacote de gelatina de limão',
          '1 pacote de gelatina sem sabor (12g)',
          '1/2 xícara de água quente'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de água'
        ]
      }
    ],
    steps: [
      'Dissolva ambas as gelatinas na água quente.',
      'Deixe esfriar até temperatura ambiente.',
      'No liquidificador: bata o leite condensado, creme de leite, leite, suco de limão e as gelatinas.',
      'Adicione as raspas de limão.',
      'Bata por mais 2 minutos até ficar bem misturado.',
      'Prepare a calda caramelizada e deixe esfriar na forma.',
      'Despeje a mistura de limão sobre a calda fria.',
      'Refrigere por 6-8 horas.',
      'Desenforme e decore com rodelas finas de limão.'
    ],
    tips: "Para vender: Refrescante e perfeito para o calor! Destaque como 'sabor cítrico' e 'refrescante'. Preço: R$ 9-13. Use embalagens amarelas ou claras. Validade: 4 dias refrigerado. Ótimo para eventos ao ar livre e almoços de família."
  },
  {
    id: 'pudim-de-abacaxi-cremoso',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Abacaxi Cremoso',
    description: 'Pudim tropical de abacaxi sem forno, leve e refrescante.',
    image: 'https://i.ytimg.com/vi/DGHMCbO2h3A/maxresdefault.jpg',
    prep_time_minutes: 30,
    total_time_minutes: 480,
    servings: '8 porções',
    difficulty: 'Médio',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          '200ml de suco de abacaxi concentrado',
          '100g de abacaxi picado em cubos pequenos',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água',
          'Rodelas de abacaxi para decorar'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de suco de abacaxi'
        ]
      }
    ],
    steps: [
      'Hidrate e dissolva a gelatina na água.',
      'No liquidificador: bata o leite condensado, creme de leite, leite, suco de abacaxi e a gelatina.',
      'Bata por 2 minutos até ficar bem homogêneo.',
      'Prepare a calda caramelizando o açúcar e adicionando o suco de abacaxi.',
      'Deixe a calda esfriar na forma.',
      'Coloque os cubos de abacaxi sobre a calda fria.',
      'Despeje a mistura do liquidificador cuidadosamente.',
      'Refrigere por 6-8 horas.',
      'Desenforme e decore com rodelas de abacaxi.'
    ],
    tips: "Para vender: Tropical e refrescante! Destaque 'com pedaços de abacaxi' e 'sabor natural'. Preço: R$ 10-14. Perfeito para festas e churrascos. Validade: 3 dias refrigerado. Dica: Pode substituir parte do leite por água de coco para uma versão ainda mais tropical."
  },
  {
    id: 'pudim-de-coco',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Coco',
    description: 'Pudim tropical de coco sem forno, cremoso e perfumado.',
    image: 'https://minhasreceitinhas.com.br/wp-content/uploads/2022/05/pudim-de-coco-gelado.jpg',
    prep_time_minutes: 20,
    total_time_minutes: 480,
    servings: '8 porções',
    difficulty: 'Fácil',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '200ml de leite de coco',
          '100ml de leite',
          '100g de coco ralado',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água',
          'Coco ralado para decorar'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de água'
        ]
      }
    ],
    steps: [
      'Hidrate e dissolva a gelatina na água.',
      'No liquidificador: bata o leite condensado, creme de leite, leite de coco, leite e gelatina.',
      'Bata bem por 2 minutos.',
      'Adicione o coco ralado e bata rapidamente apenas para misturar.',
      'Prepare a calda de açúcar caramelizado e deixe esfriar na forma.',
      'Despeje a mistura de coco sobre a calda fria.',
      'Polvilhe coco ralado por cima.',
      'Refrigere por 6-8 horas.',
      'Desenforme cuidadosamente.'
    ],
    tips: "Para vender: Perfeito para o verão! Destaque como 'sabor tropical'. Embale com coco ralado por cima. Preço: R$ 10-13. Use embalagens claras. Validade: 3 dias refrigerado. Dica: Pode adicionar pedacinhos de coco fresco para versão gourmet (R$ 15-18)."
  },
  {
    id: 'pudim-de-manga',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Manga',
    description: 'Pudim tropical de manga sem forno, cremoso e perfumado.',
    image: 'https://imgs.search.brave.com/ybZidSrovl8c41qUb87S8CsTgIbz-pz68p-XBARrbgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9jb2NhLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMy9QdWRpbS1k/ZS1tYW5nYS5qcGVn',
    prep_time_minutes: 25,
    total_time_minutes: 360,
    servings: '8 porções',
    difficulty: 'Médio',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          'Polpa de 2 mangas maduras (aprox. 300g)',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água',
          'Pedaços de manga para decorar'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de água'
        ]
      }
    ],
    steps: [
      'Descasque as mangas e bata a polpa no liquidificador até virar purê.',
      'Passe por uma peneira para remover fibras (opcional).',
      'Hidrate e dissolva a gelatina na água.',
      'No liquidificador limpo, bata o leite condensado, creme de leite, leite, purê de manga e gelatina.',
      'Bata muito bem por 2 minutos.',
      'Prepare a calda de açúcar e deixe esfriar na forma.',
      'Despeje a mistura de manga sobre a calda.',
      'Refrigere por 6-8 horas.',
      'Desenforme e decore com cubos de manga fresca.'
    ],
    tips: "Para vender: Sabor exótico e tropical! Destaque 'feito com manga fresca'. Preço: R$ 11-15. Perfeito para o verão. Use mangas bem maduras e doces. Validade: 2 dias refrigerado. Embalagens amarelas ou laranjas valorizam."
  },
  {
    id: 'pudim-de-nutella',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Nutella',
    description: 'Pudim gourmet de Nutella sem forno, cremoso e irresistível.',
    image: 'https://imgs.search.brave.com/7A1WIhPXF9yp_42PW90HYJsRbROLz6qSgYOLJDVX_6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnVtY29tby5jb20u/YnIvcHQvcG9zdHMv/Ni8wLzMvY29tb19m/YXplcl9wdWRpbV9k/ZV9udXRlbGxhXzIy/MzA2XzYwMC5qcGc',
    prep_time_minutes: 25,
    total_time_minutes: 480,
    servings: '8 porções',
    difficulty: 'Médio',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          '300g de Nutella',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de água'
        ]
      },
      {
        group: 'Decoração',
        items: [
          '100g de Nutella derretida',
          'Avelãs picadas'
        ]
      }
    ],
    steps: [
      'Hidrate e dissolva a gelatina na água, aquecendo no micro-ondas.',
      'Aqueça 200g de Nutella no micro-ondas por 20 segundos para amolecer.',
      'No liquidificador: bata o leite condensado, creme de leite, leite, Nutella amolecida e gelatina.',
      'Bata por 2-3 minutos até ficar bem cremoso e homogêneo.',
      'Prepare a calda de açúcar caramelizado e deixe esfriar na forma.',
      'Despeje a mistura de Nutella sobre a calda fria.',
      'Refrigere por 8 horas.',
      'Desenforme cuidadosamente.',
      'Aqueça os 100g restantes de Nutella e despeje fios por cima.',
      'Decore com avelãs picadas.'
    ],
    tips: "Para vender: PRODUTO PREMIUM! Nutella é sempre desejada. Destaque como 'gourmet' e 'feito com Nutella original'. Preço: R$ 15-22. Use embalagens sofisticadas. Perfeito para presentes e datas especiais. Validade: 3 dias refrigerado. Tire fotos mostrando a Nutella derretida por cima!"
  },
  {
    id: 'pudim-de-doce-de-leite',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Doce de Leite',
    description: 'Pudim irresistível de doce de leite sem forno.',
    image: 'https://imgs.search.brave.com/tLfWHuzHlnGzrizaZS7ouA8pc-rrz-S0K1hQ0zsRiWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzM2/MC0yNDAvZjBmMDkx/MTUxMzc5ODk5Mzlh/OWZjNGI4YTAwYzVh/MzkvMTkzNDkxLW9y/aWdpbmFsLmpwZw',
    prep_time_minutes: 20,
    total_time_minutes: 480,
    servings: '8 porções',
    difficulty: 'Fácil',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          '400g de doce de leite cremoso',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água'
        ]
      },
      {
        group: 'Calda',
        items: [
          '100g de doce de leite cremoso para o fundo da forma'
        ]
      }
    ],
    steps: [
      'Hidrate e dissolva a gelatina na água.',
      'No liquidificador: bata o leite condensado, creme de leite, leite, 300g de doce de leite e a gelatina.',
      'Bata por 2 minutos até ficar homogêneo e cremoso.',
      'Espalhe 100g de doce de leite cremoso no fundo da forma como calda.',
      'Despeje a mistura do liquidificador sobre o doce de leite.',
      'Com uma colher, faça redemoinhos suaves para marmorizar (opcional).',
      'Refrigere por 6-8 horas.',
      'Desenforme virando em um prato com borda (o doce de leite escorre como calda).'
    ],
    tips: "Para vender: SUCESSO GARANTIDO! Todo mundo ama doce de leite. Destaque como 'extra cremoso' e 'sabor intenso'. Preço: R$ 11-15. Validade: 4 dias refrigerado. Embale em potes transparentes. Dica: Faça uma versão com pedaços de brownie no meio (R$ 16-20)."
  },
  {
    id: 'pudim-de-chocolate',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Chocolate',
    description: 'Pudim cremoso de chocolate sem forno, irresistível!',
    image: 'https://imgs.search.brave.com/UXVdo27UtFWYrtL_0zeKLMGJzqaYA04797fUW-_WYg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWNl/aXRhc2JhcmF0YXMu/Y29tLmJyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzA0L1B1/ZGltLWRlLUNob2Nv/bGF0ZS1DcmVtb3Nv/LmpwZy53ZWJw',
    prep_time_minutes: 25,
    total_time_minutes: 360,
    servings: '8 porções',
    difficulty: 'Fácil',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          '4 colheres de sopa de chocolate em pó',
          '100g de chocolate meio amargo derretido',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de água'
        ]
      }
    ],
    steps: [
      'Hidrate a gelatina na água por 5 minutos e aqueça por 15 segundos no micro-ondas para dissolver.',
      'Derreta o chocolate meio amargo no micro-ondas (30 segundos).',
      'No liquidificador: bata o leite condensado, creme de leite, leite, chocolate em pó, chocolate derretido e a gelatina.',
      'Bata por 2 minutos até ficar bem homogêneo.',
      'Prepare a calda caramelizando o açúcar com a água.',
      'Deixe a calda esfriar na forma.',
      'Despeje a mistura de chocolate sobre a calda fria.',
      'Refrigere por 6-8 horas.',
      'Desenforme e sirva gelado.'
    ],
    tips: "Para vender: O chocolate é sempre sucesso! Embale em potes ou fatias individuais. Preço: R$ 10-14. Decore com raspas de chocolate. Validade: 3 dias refrigerado. Destaque que é 'cremoso' e 'intenso sabor de chocolate'."
  },
  {
    id: 'pudim-de-morango',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Morango',
    description: 'Pudim rosado de morango sem forno, delicado e saboroso.',
    image: 'https://imgs.search.brave.com/xHXKHeIpqteWtBgtLJ5SHYLREUu9KXk0MtHVHgnow-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Zv/bmFvY2EuY29tLmJy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA2L1B1ZGltLWRl/LU1vcmFuZ28tY29t/LUNhbGRhLWRlLU1v/cmFuZ28tcGFyYS1v/cy1BcGFpeG9uYWRv/cy1wb3ItTW9yYW5n/by02NzJ4MzUyLmpw/Zw',
    prep_time_minutes: 30,
    total_time_minutes: 360,
    servings: '8 porções',
    difficulty: 'Médio',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          '200g de morangos frescos',
          '1 pacote de gelatina de morango',
          '1 pacote de gelatina sem sabor (12g)',
          '1/2 xícara de água quente',
          'Morangos frescos para decorar'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de água'
        ]
      }
    ],
    steps: [
      'Dissolva a gelatina de morango e a sem sabor na água quente.',
      'Deixe esfriar até temperatura ambiente.',
      'Lave e corte os morangos, removendo as folhas.',
      'No liquidificador: bata o leite condensado, creme de leite, leite, morangos e as gelatinas dissolvidas.',
      'Bata muito bem até ficar rosa homogêneo.',
      'Prepare a calda de açúcar caramelizado e deixe esfriar na forma.',
      'Despeje a mistura rosa sobre a calda.',
      'Refrigere por 6-8 horas.',
      'Desenforme e decore com morangos frescos fatiados.'
    ],
    tips: "Para vender: A cor rosa chama atenção! Tire fotos lindas. Embale em potes transparentes ou com janela. Preço: R$ 12-16. Destaque 'feito com morangos frescos'. Perfeito para datas românticas. Validade: 2 dias refrigerado (morango fresco)."
  },
  {
    id: 'pudim-de-cafe',
    category_slug: 'no-bake-pudding',
    title: 'Pudim de Café',
    description: 'Pudim sofisticado de café sem forno, para apreciadores.',
    image: 'https://imgs.search.brave.com/jAK07ocHLHGo0R1eImgDuwqrzqyGRNRhCPPPmuHUksA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z2F6ZXRhc3AuY29t/LmJyL2ltZy9jLzgy/NS81MDAvZG5fYXJx/dWl2by8yMDI1LzA0/L3B1ZGltLWNhZmUu/anBn',
    prep_time_minutes: 25,
    total_time_minutes: 360,
    servings: '8 porções',
    difficulty: 'Médio',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          '4 colheres de sopa de café solúvel',
          '1/2 xícara de água morna',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água fria',
          'Grãos de café para decorar'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de café forte'
        ]
      }
    ],
    steps: [
      'Dissolva o café solúvel na água morna.',
      'Hidrate a gelatina na água fria e dissolva no micro-ondas (15 segundos).',
      'No liquidificador: bata o leite condensado, creme de leite, leite, café dissolvido e a gelatina.',
      'Bata por 2 minutos até ficar bem cremoso.',
      'Calda: Caramelize o açúcar e adicione o café forte cuidadosamente.',
      'Deixe a calda esfriar na forma.',
      'Despeje a mistura de café sobre a calda.',
      'Refrigere por 6-8 horas.',
      'Desenforme e decore com grãos de café torrado.'
    ],
    tips: "Para vender: Produto sofisticado para adultos! Destaque como 'sabor intenso de café' e 'gourmet'. Preço: R$ 12-16. Perfeito para cafés especiais e eventos corporativos. Validade: 4 dias refrigerado. Use embalagens elegantes marrom ou preta."
  },
  {
    id: 'pudim-classico-sem-forno',
    category_slug: 'no-bake-pudding',
    title: 'Pudim Clássico',
    description: 'Pudim tradicional cremoso sem ir ao forno, pronto em poucas horas.',
    image: 'https://imgs.search.brave.com/c_V-FEbF3t1gcbq5c-CfLJz6rq8q3fyoveClbK0AWR4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/L2EyYTYzZTNkMWUx/ZWI2ODcvMzAweDIy/MGYwLjVfMC41XzEu/MHE4MC9mb3RvLXBy/aW5jaXBhbC1kYS1y/ZWNlaXRhLXB1ZGlt/LWNsYXNzaWNvLmpw/Zw',
    prep_time_minutes: 20,
    total_time_minutes: 360,
    servings: '8 porções',
    difficulty: 'Fácil',
    ingredients: [
      {
        group: 'Ingredientes',
        items: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 lata de leite',
          '1 pacote de gelatina sem sabor (12g)',
          '3 colheres de sopa de água'
        ]
      },
      {
        group: 'Calda',
        items: [
          '1 xícara de açúcar',
          '1/2 xícara de água'
        ]
      }
    ],
    steps: [
      'Hidrate a gelatina na água por 5 minutos e dissolva no micro-ondas por 15 segundos.',
      'No liquidificador, bata o leite condensado, creme de leite, leite e a gelatina dissolvida.',
      'Bata por 2 minutos até ficar homogêneo e cremoso.',
      'Calda: Em uma panela, derreta o açúcar em fogo baixo até caramelizar.',
      'Adicione a água com cuidado (vai espirrar) e mexa até virar uma calda homogênea.',
      'Despeje a calda numa forma de pudim, espalhe e deixe esfriar completamente.',
      'Despeje a mistura do liquidificador sobre a calda fria.',
      'Leve à geladeira por no mínimo 6 horas (preferencialmente de um dia para o outro).',
      'Para desenformar, passe uma faca nas bordas e vire sobre um prato.'
    ],
    tips: "Para vender: Embale em potes individuais transparentes ou faça em forminhas pequenas. Preço sugerido: R$ 8-12 por porção. A gelatina é o segredo para firmar sem forno! Validade: 3 dias refrigerado. Dica profissional: Faça sempre um dia antes para garantir que fique bem firme."
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