<template>
    <div>
        <div>
            <p>Learnt Facts  : {{facts.filter(fact => {return fact.done === true}).length}}</p>
            <p>Learning Facts: {{facts.filter(fact => {return fact.done === false}).length}}</p>
        </div>
        <div class='ui centered card' v-for="fact in facts" v-bind:key='fact.id'>
            <div class='content'>
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
                    <span class='right floated edit icon'>
                        <i class='edit icon'></i>
                    </span>
                </div>
            </div>
            <div class='ui bottom attached green basic button' v-show="fact.done">
                Done
            </div>
            <div class='ui bottom attached red basic button' v-show="!fact.done">
                Learn
            </div>
        </div>
  </div>
</template>

<script type = "text/javascript" >
export default {
  name: 'FactList',
  data () {
    return {
      facts: [
        {
          id: 1,
          title: 'Fact A',
          question: 'Question A',
          answer: 'Answer A',
          done: false
        },
        {
          id: 2,
          title: 'Fact B',
          question: 'Question B',
          answer: 'Answer B',
          done: false
        },
        {
          id: 3,
          title: 'Fact C',
          question: 'Question C',
          answer: 'Answer C',
          done: false
        }
      ]
    }
  }
}
</script>

<style>
</style>