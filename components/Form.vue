<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="responsavel">
            Responsável
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="responsavel" type="text" v-model="responsavel" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="descricao">
            Descrição
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="descricao" v-model="descricao" required></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="nivel">
            Nível
          </label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nivel" v-model="nivel" required>
          <option value="Baixo">Baixo</option>
          <option value="Médio">Médio</option>
          <option value="Alto">Alto</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="situacao">
          Situação
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="situacao" v-model="situacao" required>
          <option value="Aberto">Aberto</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Fechado">Fechado</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="prioridade">
          Prioridade
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prioridade" v-model="prioridade" required>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsavel: '',
      descricao: '',
      nivel: '',
      situacao: '',
      prioridade: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        responsavel: this.responsavel,
        descricao: this.descricao,
        nivel: this.nivel,
        situacao: this.situacao,
        prioridade: this.prioridade,
      }
      this.$axios.post('/adicionar', data)
        .then(response => {
          console.log(response.data)
          // Lógica de sucesso aqui
        })
        .catch(error => {
          console.log(error.response.data)
          // Lógica de erro aqui
        })
    }
  }
}
</script>
  