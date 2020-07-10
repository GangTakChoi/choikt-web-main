<template>
  <div class="main-wrap">
    <h1>몬티홀의 역설</h1>
    <h2>과연 몬티홀의 역설은 현실에서도 증명이 될까?</h2>
    <div class="card-wrap">
      <ul>
        <li id="card-1" @click="selectCard(1)">{{ card1 }}</li>
        <li id="card-2" @click="selectCard(2)">{{ card2 }}</li>
        <li id="card-3" @click="selectCard(3)">{{ card3 }}</li>
      </ul>
    </div>
    <div class="button-wrap">
        <button v-if="step == 1" @click="selectComplete">선택완료</button>
        <button v-if="step == 2" @click="lastSelect('change')">선택을 바꾼다</button>
        <button v-if="step == 2" @click="lastSelect('maintain')">바꾸지 않는다</button>
        <button v-if="step == 3" @click="openCard">open</button>
        <button v-if="step == 4" @click="retry">다시하기</button>
        <span v-if="step == 4">{{ lastMant }}</span>
    </div>
    <div class="score-wrap">
      <span>느그티홀 : {{this.nuegtyhall}}</span>
      <span>우리티홀 : {{this.ourityhall}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MontyHallProblem',
  props: {
    msg: String
  },
  data () {
    return {
      card1: '?',
      card2: '?',
      card3: '?',
      lastMant: '',
      cardArray: ['카', '양', '양'],
      selectCardNumber: 0,
      openCardNumber: 0,
      changeFlag: false,
      step: 1,
      ourityhall: 0,
      nuegtyhall: 0
    }
  },
  methods: {
    init: function () {
      this.card1 = '?'
      this.card2 = '?'
      this.card3 = '?'
      this.lastMant = ''
      this.cardArray = ['카', '양', '양']
      this.selectCardNumber = 0
      this.openCardNumber = 0
      this.changeFlag = false
      this.step = 1
    },
    retry: function () {
      this.init()
      this.shuffleCard()
    },
    selectComplete: function () {
      if (this.selectCardNumber === 0) {
        alert('카드를 선택해주세요')
        return
      }
      this.step += 1

      const sheepIndexList = []

      for (var i = 0; i <= 2; i++) {
        if (i === this.selectCardNumber - 1) continue
        if (this.cardArray[i] === '양') sheepIndexList.push(i)
      }

      sheepIndexList.sort(() => Math.random() - 0.5)

      this.openCardNumber = sheepIndexList[0] + 1

      if (this.openCardNumber === 1) {
        this.card1 = this.cardArray[0]
      } else if (this.openCardNumber === 2) {
        this.card2 = this.cardArray[1]
      } else if (this.openCardNumber === 3) {
        this.card3 = this.cardArray[2]
      }
    },
    lastSelect: function (param) {
      this.step += 1
      if (param === 'change') {
        this.changeFlag = true
        for (var i = 1; i <= 3; i++) {
          if (this.openCardNumber !== i && this.selectCardNumber !== i) {
            this.selectCardNumber = i
            return
          }
        }
      }
    },
    openCard: function () {
      this.card1 = this.cardArray[0]
      this.card2 = this.cardArray[1]
      this.card3 = this.cardArray[2]

      this.step += 1

      if ((this.cardArray[this.selectCardNumber - 1] === '카' && this.changeFlag) ||
      (this.cardArray[this.selectCardNumber - 1] === '양' && !this.changeFlag)) {
        this.lastMant = '역시 우리티홀이야~'
        this.ourityhall += 1
      } else {
        this.lastMant = '응~ 느그티홀이야~'
        this.nuegtyhall += 1
      }
    },
    selectCard: function (cardNumber) {
      if (this.step !== 1) return
      this.selectCardNumber = cardNumber
    },
    shuffleCard: function () {
      this.cardArray.sort(() => Math.random() - 0.5)
    }
  },
  created () {
    this.shuffleCard()
  },
  watch: {
    selectCardNumber: function (cardNumber) {
      var card1 = document.getElementById('card-1')
      var card2 = document.getElementById('card-2')
      var card3 = document.getElementById('card-3')
      card1.style.outline = 'none'
      card2.style.outline = 'none'
      card3.style.outline = 'none'
      if (cardNumber !== 0) {
        var selectCard = document.getElementById('card-' + cardNumber)
        selectCard.style.outline = '2px solid white'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main-wrap {
    background-color: black;
    color: white;
  }
  .card-wrap {
    margin-top: 40px;
    ul {
      display: block;
      text-align: center;
      li {
        box-sizing: border-box;
        display: inline-block;
        padding-top: 35px;
        font-size: 40px;
        text-align: center;
        width: 100px;
        height: 115px;
        background-color: gray;
        &:not(:last-child) {
          margin-right: 30px;
        }
        &:hover {
          cursor: pointer;
          outline: 2px solid white;
        }
      }
    }
  }
  .button-wrap {
    text-align: center;
    margin-top: 30px;
    button {
      margin: 12px auto;
      display: block;
      width: 120px;
      height: 40px;
      font-size: 15px;
      background-color: black;
      color: white;
      border: 1px solid white;
      outline:none;
      &:hover {
        cursor: pointer;
        color: black;
        background-color: white;
      }
    }
  }
  .score-wrap {
    position: absolute;
    bottom:50px;
    left:0;
    right:0;
    text-align: center;
    margin-top: 50px;
    span {
      margin-right: 20px;
    }
  }
  h1 {
    margin-top: 60px;
    text-align: center;
    font-size: 20px;
  }
  h2 {
    margin-top: 20px;
    text-align: center;
  }
</style>
