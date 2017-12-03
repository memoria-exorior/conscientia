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
                <span class='right floated trash icon' v-on:click="deleteFact(fact)">
                    <i class='trash icon'></i>
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
        <div class='ui bottom attached green basic button' v-show="!isEditing && fact.done" disabled>
            Done
        </div>
        <div class='ui bottom attached red basic button' v-on:click='learntFact(fact)' v-show="!isEditing && !fact.done">
            Learnt?
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
    },
    deleteFact (fact) {
      this.$emit('delete-fact', fact)
    },
    learntFact (fact) {
      this.$emit('learnt-fact', fact)
    }
  }
}
</script>

<style>
</style>