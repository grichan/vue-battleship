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
          {{ col }}
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
      let position = e.target.dataset.position.split("-");
      let y = position[0];
      let x = position[1];
      console.log("y,x :>> ", y, x);

      if (y < 10 - this.selectedShipLength + 1 && this.selectedShipLength > 0) {
        // 4 / 2 = 2
        let mid = Math.floor(this.selectedShipLength / 2);
        console.log("mid :>> ", mid);
        this.playerField[y][x] === "🚢"
          ? null
          : (this.playerField[y][x] = "⚓");

        for (let i = 1; i < this.selectedShipLength; i++) {
          if (this.playerField[parseInt(y) + i][x] !== "🚢") {
            this.playerField[parseInt(y) + i][x] = "⚓";
          }
        }
        // for (let i = 1; i < this.selectedShipLength; i++) {
        //   this.playerField[parseInt(y) - i][x] = "⚓";
        // }
      }
    },
    mouseLeave(e) {
      e.preventDefault();
      for (let i = 0; i < this.playerField.length; i++) {
        for (let j = 0; j < this.playerField.length; j++) {
          if (this.playerField[i][j] == "⚓") {
            this.playerField[i][j] = "";
          }
        }
      }
    },
    placeShip(e) {
      e.preventDefault();
      let position = e.target.dataset.position.split("-");
      let y = position[0];
      let x = position[1];

      // if y
      this.playerField[y][x] = "🚢";
      this.playerField[y][parseInt(x) - 1] = "🌊";
      this.playerField[y][parseInt(x) + 1] = "🌊";
      this.playerField[parseInt(y) - 1][parseInt(x) + 1] = "🌊";
      this.playerField[parseInt(y) - 1][parseInt(x) - 1] = "🌊";
      this.playerField[parseInt(y) - 1][parseInt(x)] = "🌊";
      this.playerField[parseInt(y) + this.selectedShipLength][parseInt(x) + 1] =
        "🌊";
      this.playerField[parseInt(y) + this.selectedShipLength][parseInt(x) - 1] =
        "🌊";
      this.playerField[parseInt(y) + this.selectedShipLength][parseInt(x)] =
        "🌊";

      for (let i = 1; i < this.selectedShipLength; i++) {
        this.playerField[parseInt(y) + i][x] = "🚢";
        this.playerField[parseInt(y) + i][parseInt(x) + 1] = "🌊";
        this.playerField[parseInt(y) + i][parseInt(x) - 1] = "🌊";
      }
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
  width: 30px;
  background-color: rgb(240, 255, 253);
}

.enemy .cell {
  background-color: seashell;
}
</style>
