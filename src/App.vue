<template>
  <header>Battleship Game 🚢</header>
  <div class="main">
    <!-- {{ playerField }} -->
    <div class="player field">
      <div class="row" v-for="(row, y) in playerField" :key="y">
        <div
          @click="shipSelected($event)"
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
      <div>Click on ship to place:</div>
      <div
        @click="shipSelected($event)"
        class="ship"
        v-for="ship in playerShips"
        :key="ship"
        :data-ship="ship[0] + '-' + ship[1]"
      >
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
      console.log("e :>> ", e.target.dataset.position);
      console.log("object :>> ");
    },
    shipSelected(e) {
      e.preventDefault();
      console.log("e :>> ", e.target.dataset.position);
      console.log("object :>> ");
      let position = e.target.dataset.position.split("-");
      console.log("position :>> ", position);
      let y = position[0];
      let x = position[1];
      // 0 = free
      // 1 = taken
      // if(this.adding) {

      // }

      if (this.playerField[y][x] === 0 && this.adding == false) {
        this.playerField[y][x] = 1;
        this.shipAdding.push([y, x]);
        this.adding = true;
      }

      if (this.adding == true && this.playerField[y][x] != 1) {
        this.shipAdding.forEach((arr) => {
          if (arr[0] != y && arr[1] != x) {
            if (
              y < arr[0] + 3 &&
              y > arr[0] - 3 &&
              x < arr[0] + 3 &&
              x > arr[0] - 3
            ) {
              this.playerField[y][x] = 1;
              this.shipAdding.push([y, x]);
            }
          }
        });
      }
      console.log(
        "this.playerField[position[0],position[1]] :>> ",
        this.playerField[y][x]
      );
    }
  },
  data() {
    return {
      adding: false,
      shipAdding: [],
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
