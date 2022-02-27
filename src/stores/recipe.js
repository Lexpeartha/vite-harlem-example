import { createStore } from "@harlem/core"

/* INIT STORE */
const { getter, mutation } = createStore("recipe", {
  recipes: [],
})

/* GETTERS */
export const allRecipes = getter("allRecipes", (state) => state.recipes)

export const cakeRecipes = getter("cakeRecipes", (state) => {
  const cakeRecipeArray = state.recipes.map((recipe) =>
    recipe.name.toLowerCase().includes("cake")
  )

  return cakeRecipeArray
})

export const recipesByChef = getter("recipesByChef", (state) => {
  return (chefName) =>
    state.recipes.find((recipe) => recipe.author === chefName)
})

/* MUTATIONS */
export const addRecipe = mutation("addRecipe", (state, payload) => {
  const recipe = {
    id: payload.id,
    name: payload.name,
    description: payload.description,
    author: payload.author,
  }

  state.recipes.push(recipe)
})

export const removeRecipe = mutation("removeRecipe", (state, recipeId) => {
  const recipeIndex = state.recipes.findIndex(
    (recipe) => recipe.id === recipeId
  )

  state.recipes.splice(recipeIndex, 1)
})
