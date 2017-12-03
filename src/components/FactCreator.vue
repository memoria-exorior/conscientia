<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input type='text' v-model="title" ref='title' defaultValue="">
          </div>
          <div class='field'>
              <label>Question</label>
              <input type='text' v-model="question" ref='question' defaultValue="">
          </div>
          <div class='field'>
              <label>Answer</label>
              <input type='text' v-model="answer" ref='answer' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  data () {
    return {
      title: '',
      question: '',
      answer: '',
      isCreating: false
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.title.length > 0 && this.question.length > 0 && this.answer.length > 0) {
        const title = this.title
        const question = this.question
        const answer = this.answer
        const id = uuid()
        this.$emit('add-fact', {
          id,
          title,
          question,
          answer,
          done: false
        })
      }
      this.isCreating = false
      swal({
        type: 'success',
        text: 'Created a new fact!',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }
}

function uuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
</script>