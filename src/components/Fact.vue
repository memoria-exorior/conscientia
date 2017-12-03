<template>
    <div class='ui centered card'>
        <!-- Display -->
        <div class='content' v-show="!isEditing">
            <div class='header'>
            {{ fact.title }}
            </div>
            <div class='meta'>
            {{ fact.question }}
            </div>
            <div class='meta'>
            {{ fact.answer }}
            </div>
            <div class='extra content'>
                <span class='right floated edit icon' v-on:click="showForm">
                    <i class='edit icon'></i>
                </span>
            </div>
        </div>
        <!-- Edit -->
        <div class="content" v-show="isEditing">
            <div class='ui form'>
                <div class='field'>
                    <label>Title</label>
                    <input type='text' v-model="fact.title" >
                </div>
                <div class='field'>
                    <label>Question</label>
                    <input type='text' v-model="fact.question" >
                </div>
                <div class='field'>
                    <label>Answer</label>
                    <input type='text' v-model="fact.answer" >
                </div>
                <div class='ui two button attached buttons'>
                <button class='ui basic blue button' v-on:click="hideForm">
                    Close X
                </button>
                </div>
            </div>
        </div>
        <!-- Buttons -->
        <div class='ui bottom attached green basic button' v-show="!isEditing && fact.done">
            Done
        </div>
        <div class='ui bottom attached red basic button' v-show="!isEditing && !fact.done">
            Learn
        </div>
    </div>
</template>

<script type = "text/javascript" >
export default {
  name: 'Fact',
  props: ['fact'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    }
  }
}
</script>

<style>
</style>