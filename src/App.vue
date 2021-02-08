<template>
  <header>Battleship Game 🚢</header>
  <div class="main">
    <!-- {{ playerField }} -->
    <div class="player field">
      <div class="row" v-for="(row, y) in playerField" :key="y">
        <div
          @click="placeShip($event)"
          class="cell"
          v-for="(col, x) in row"
          :key="col"
          :data-position="y + '-' + x"
        >
          {{ col }}
        </div>
      </div>
    </div>
    <div>
      <button>Start new game</button>
      <p>Your turn</p>
      <div>Ships to place remaining:</div>
      <div v-for="ship in playerShips" :key="ship">
        {{ ship[0] }}x{{ ship[1] }}
        <span v-for="i in ship[0]" :key="i">
          🚢
        </span>
      </div>
    </div>
    <div class="enemy field">
      <div class="row" v-for="(row, key) in enemyField" :key="key">
        <div class="cell" v-for="col in row" :key="col">
          {{ col }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    placeShip(e) {
      e.preventDefault();
      console.log("e :>> ", e.target.dataset);
      console.log("object :>> ");
    }
  },
  data() {
    return {
      playerField: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      playerShips: [
        [2, 4],
        [1, 5]
      ],
      enemyField: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    };
  }
};
</script>

<style>
.main {
  display: flex;
  justify-content: space-evenly;
}
.field {
  margin: 10px;
}
.row {
  display: flex;
}

.cell {
  margin: 1px;
  height: 30px;
  width: 30px;
  background-color: rgb(240, 255, 253);
}

.enemy .cell {
  background-color: seashell;
}
</style>
