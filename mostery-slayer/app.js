function getRandomNumber(min = 1, max = 10) {
  return Math.round(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data: function() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      winner: null,
      logMessages: [],
    }
  },
  computed: {
    monsterBarStyle: function() {
      if (this.monsterHealth <= 0) {
        return {
          width: '0%'
        }
      }
      return {
        width: `${this.monsterHealth}%`,
      }
    },
    playerBarStyle: function() {
      if (this.playerHealth <= 0) {
        return {
          width: '0%'
        }
      }
      return {
        width: `${this.playerHealth}%`,
      }
    },
    isSpecialAttackDisabled: function() {
      return this.round % 3 !== 0;
    }
  },
  watch: {
    playerHealth: function(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth: function(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    }
  },
  methods: {
    attackMonster: function() {
      this.round++;
      const attack = getRandomNumber(1, 10);
      this.monsterHealth -= attack;
      this.attackPlayer();
      this.addLogMessage('player', 'attack', attack);
    },
    attackPlayer: function() {
      const attack = getRandomNumber(1, 15);
      this.playerHealth -= attack;
      this.addLogMessage('monster', 'attack', attack);
    },
    specialAttackMonster: function() {
      const attack = getRandomNumber(10, 25);
      this.monsterHealth -= attack;
      this.attackPlayer();
      this.round++;
      this.addLogMessage('player', 'attack', attack);
    },
    healPlayer: function() {
      const heal = getRandomNumber(1, 20);
      if (this.playerHealth + heal >= 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.round++;
      this.attackPlayer();
      this.addLogMessage('player', 'heal', heal);
    },
    playAgain: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrender: function() {
      this.winner = 'monster';
    },
    addLogMessage: function(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      })
    }
  }
})

app.mount('#game')