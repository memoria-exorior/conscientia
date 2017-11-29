<template>
  <div>
    <ul>
        <li v-for="fact in facts" v-bind:key='fact.id'>
            {{ fact.title }} {{ fact.question }} {{ fact.answer }}
        </li>
    </ul> 
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