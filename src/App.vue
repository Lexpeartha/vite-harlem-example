<script setup>
import { reactive } from "vue"
import { allRecipes, addRecipe, removeRecipe } from "./stores/recipe"
import { getNewUuid } from "./uuid"

const formData = reactive({
  name: "",
  author: "",
  description: "",
})

const handleFormSubmit = () => {
  addRecipe({
    id: getNewUuid(),
    name: formData.name,
    author: formData.author,
    description: formData.description,
  })
}
</script>

<template>
  <div class="app">
    <h1>Hello Harlem.js!</h1>

    <h2>Add your recipe</h2>
    <form class="form" @submit.prevent="handleFormSubmit">
      <input type="text" v-model="formData.name" required placeholder="Name" />
      <input
        type="text"
        v-model="formData.author"
        required
        placeholder="Author"
      />
      <textarea
        v-model="formData.description"
        required
        placeholder="Description required"
      ></textarea>

      <button>Add recipe</button>
    </form>

    <ol v-if="allRecipes.length">
      <li v-for="item in allRecipes" :key="item.id">
        <details>
          <summary>{{ item.name }} by {{ item.author }}</summary>
          {{ item.description }}
        </details>
        <button @click="removeRecipe(item.id)">Remove recipe</button>
      </li>
    </ol>
    <p v-else>No recipes to display!</p>
  </div>
</template>

<style>
.form {
  width: 33%;
  display: flex;
  flex-direction: column;
}

.form > * + * {
  margin-top: 10px;
}
</style>
