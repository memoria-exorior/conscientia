<template>
    <div>
        <p class="facts">Learnt Facts  : {{facts.filter(fact => {return fact.done === true}).length}}</p>
        <p class="facts">Learning Facts: {{facts.filter(fact => {return fact.done === false}).length}}</p>
        <!-- <fact v-for="fact in facts" v-bind:key='fact'></fact> -->
        <fact v-for="fact in facts" v-bind:fact="fact" v-bind:key='fact.id' ></fact>
    </div>
</template>

<script type = "text/javascript" >

import Fact from '@/components/Fact'

export default {
  name: 'FactList',
  components: {
    'fact': Fact
  },
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

<style scoped>
p.facts {
  text-align: center;
}
</style>