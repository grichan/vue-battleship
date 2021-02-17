<template>
  <header>Battleship Game 🚢</header>
  <div class="main">
    <!-- {{ playerField }} -->
    <div class="player field" @mouseleave="mouseLeave($event)">
      <div class="row" v-for="(row, y) in playerField" :key="y">
        <div
          @mouseover="moveShip($event)"
          @mouseleave="mouseLeave($event)"
          @click="placeShip($event)"
          class="cell"
          v-for="(col, x) in row"
          :key="col"
          :data-position="y + '-' + x"
        >
          <div class="overlay">
            {{ col }}
          </div>
        </div>
      </div>
      <button @click="rotateShip()">Rotate</button>
    </div>
    <div>
      <button>Start new game</button>
      <p>Your turn</p>
      <div>Click on ship to move:</div>
      <div
        @click="selectShip($event, name)"
        class="ship"
        v-for="(length, name) in ships"
        :key="name"
      >
        {{ name }}
        <span v-for="i in length" :key="i">
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
    selectShip(e, name) {
      e.preventDefault();
      this.selectedShipLength = this.ships[name];

      console.log(this.selectedShipLength);
    },
    moveShip(e) {
      e.preventDefault();
      console.log("e.target :>> ", e.target.className);
      if (e.target.className == "overlay") {
        e.target.style.height = 30 * this.selectedShipLength + "px";
      }
    },
    mouseLeave(e) {
      e.preventDefault();
      for (let i = 0; i < this.playerField.length; i++) {
        for (let j = 0; j < this.playerField.length; j++) {
          if (this.playerField[i][j] == "⚓") {
            this.playerField[i][j] = " ";
          }
        }
      }
    },
    placeShip(e) {
      e.preventDefault();
      let position = e.target.dataset.position.split("-");
      let y = position[0];
      let x = position[1];

      if (this.playerField[y][x] == "🚢" || this.playerField[y][x] == "🌊") {
        return;
      }

      // // if y
      // this.playerField[y][x] = "🚢";
      // for (let i = 1; i < this.selectedShipLength; i++) {
      //   this.playerField[parseInt(y) + i][x] = "🚢";
      //   if (x < 9) {
      //     this.playerField[parseInt(y) + i][parseInt(x) + 1] = "🌊";
      //   }
      //   if (x > 0) {
      //     this.playerField[parseInt(y) + i][parseInt(x) - 1] = "🌊";
      //   }
      // }
      // if (x < 9 && x > 0) {
      //   this.playerField[y][parseInt(x) - 1] = "🌊";
      //   this.playerField[y][parseInt(x) + 1] = "🌊";
      //   this.playerField[parseInt(y) - 1][parseInt(x) + 1] = "🌊";
      //   this.playerField[parseInt(y) - 1][parseInt(x) - 1] = "🌊";
      //   this.playerField[parseInt(y) - 1][parseInt(x)] = "🌊";
      //   this.playerField[parseInt(y) + this.selectedShipLength][
      //     parseInt(x) + 1
      //   ] = "🌊";
      //   this.playerField[parseInt(y) + this.selectedShipLength][
      //     parseInt(x) - 1
      //   ] = "🌊";
      //   this.playerField[parseInt(y) + this.selectedShipLength][parseInt(x)] =
      //     "🌊";
      // }
    },
    rotateShip() {
      console.log('"roteShip" :>> ', "roteShip");
    }
  },
  data() {
    return {
      ships: { Battleship: 4, Carrier: 5 },
      selectedShipLength: 0,
      playerField: [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]
      ],
      playerShips: [
        [2, 4],
        [1, 5]
      ],
      enemyField: [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]
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
  /* margin: 1px; */
  height: 30px;
  pointer-events: auto;
  width: 30px;
  background-color: rgb(240, 255, 253);
}

.overlay {
  height: 120px;
}

.cell:hover > .overlay {
  background-color: red;
  position: relative;
  pointer-events: none;
}

.enemy .cell {
  background-color: seashell;
}
</style>
