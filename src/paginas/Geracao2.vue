<script setup>
import { onMounted, ref } from 'vue'

// Estado para controlar o carregamento
const isLoading = ref(true)

// Lista de Pokémon
const pokemons = ref([])

// Termo de busca para filtragem
const searchTerm = ref('')

// Função que carrega os Pokémon da API
const loadPokemons = async () => {
  try {
    for (let i = 152; i <= 251; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const pokemonData = await response.json()
      pokemons.value.push(pokemonData)
    }
  } catch (error) {
    console.error("Erro ao carregar Pokémon:", error)
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 1500)
  }
}

// Função para filtrar os Pokémon com base no nome
const filterPokemons = () => {
  const term = searchTerm.value.toLowerCase()
  return pokemons.value.filter(pokemon => pokemon.name.toLowerCase().includes(term))
}

// Função para obter o ícone de tipo do Pokémon
const getTypeIcon = (type) => {
  const icons = {
    grass: 'fa-leaf',
    fire: 'fa-fire',
    water: 'fa-tint',
    bug: 'fa-bug',
    normal: 'fa-circle',
    poison: 'fa-skull-crossbones',
    ground: 'fa-mountain',
    fairy: 'fa-gem',
    electric: 'fa-bolt',
    fighting: 'fa-fist-raised',
    psychic: 'fa-brain',
    rock: 'fa-gem',
    ghost: 'fa-ghost',
    ice: 'fa-snowflake',
    dragon: 'fa-dragon',
    dark: 'fa-moon',
    steel: 'fa-cogs'
  }
  return icons[type] || 'fa-question-circle' // Retorna um ícone default caso o tipo não tenha correspondência
}

// Carrega os Pokémon quando o componente for montado
onMounted(loadPokemons)
</script>

<template>
  <body>
    <div v-if="isLoading" class="carregamento">
      <img src="../complementos/carregamento.gif" alt="Carregando Pokémon" />
    </div>

    <main v-if="!isLoading" class="container">
      <div class="row">
        <div class="col-12">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Qual Pokémon você está procurando?"
            class="form-control pesquisa"
          />
          <p v-if="filterPokemons().length === 0">Nenhum Pokémon encontrado.</p>
          <p v-else-if="filterPokemons().length === 1">
            Encontramos 1 Pokémon.
          </p>
          <p v-else>
            Foram encontrados {{ filterPokemons().length }} Pokémons.
          </p>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="pokemon in filterPokemons()"
          :key="pokemon.id"
        >
          <div class="card" :class="pokemon.types[0].type.name">
            <img
              :src="pokemon.sprites.other.showdown.front_default"
              alt="Imagem do Pokémon"
            />
            <p class="titulo-pokemon">
              <!-- Ícone do tipo ao lado do nome -->
              <i :class="['fas', getTypeIcon(pokemon.types[0].type.name)]"></i>
              {{ pokemon.name.toUpperCase() }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<style scoped>
/* Estilo para o corpo e layout geral */
.container {
  padding: 20px;
}

.card {
  margin-top: 30px;
  transition: transform 0.5s;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: #fff;
}

.card p {
  font-size: 18px;
  margin-top: 10px;
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
  color: white;
  -webkit-text-stroke-width: 1.4px;
  -webkit-text-stroke-color: #000;
}

.card:hover {
  transform: scale(1.1, 1.1);
}

/* Estilo para as imagens dentro das cards */
.card img {
  width: 200px; /* Aumenta o tamanho para 200px */
  height: 200px; /* Aumenta o tamanho para 200px */
  object-fit: contain; /* Assegura que a imagem se ajuste ao tamanho sem cortar */
  border-radius: 10px; /* Bordas arredondadas para as imagens */
  margin: 0 auto; /* Centraliza a imagem dentro da card */
  display: block; /* Garante que o display seja adequado para centralizar */
}

/* Estilo do carregamento */
.carregamento {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.pesquisa {
  margin-top: 30px;
  margin-bottom: 10px;
}

/* Tipos de Pokémon com cores de fundo */
.grass {
  background-color: rgb(92, 184, 92) !important;
}

.fire {
  background-color: rgb(188, 89, 89) !important;
}

.water {
  background-color: rgb(51, 58, 187) !important;
}

.bug {
  background-color: rgb(165, 188, 89) !important;
}

.normal {
  background-color: rgb(227, 227, 227) !important;
}

.poison {
  background-color: rgb(93, 73, 167) !important;
}

.ground {
  background-color: rgb(153, 122, 65) !important;
}

.fairy {
  background-color: rgb(167, 94, 175) !important;
}

.electric {
  background-color: rgb(245, 237, 86) !important;
}

.fighting {
  background-color: rgb(174, 166, 118) !important;
}

.psychic {
  background-color: rgb(130, 19, 182) !important;
}

.rock {
  background-color: rgb(91, 83, 64) !important;
}

.ghost {
  background-color: rgb(88, 74, 95) !important;
}

.ice {
  background-color: rgb(24, 167, 195) !important;
}

.dragon {
  background-color: rgb(236, 162, 0) !important;
}

.dark {
  background-color: rgb(85, 85, 85) !important;
}

.steel {
  background-color: rgb(119, 119, 119) !important;
}
</style>
