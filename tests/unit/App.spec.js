import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(App, {
    propsData: {
      fieldLengthX: 10,
      fieldLengthY: 10
    }
  });
});

afterEach(() => {
  wrapper = null;
});

describe("check html elements ", () => {
  it("check main element exists ", () => {
    const main = wrapper.findAll(".main");

    expect(main.length).toBe(1);
  });

  // player field
  it("renders the field box", () => {
    const playerField = wrapper.findAll(".player ");

    expect(playerField.length).toBe(1);
  });
  it("renders the rows", () => {
    const rows = wrapper.findAll(".player .row");

    expect(rows.length).toBe(10);
  });
  it("renders the cells", () => {
    const cells = wrapper.findAll(".player .cell");
    expect(cells.length).toBe(100);
  });

  // enemy field
  it("renders the field box", () => {
    const enemyField = wrapper.findAll(".enemy ");

    expect(enemyField.length).toBe(1);
  });
  it("renders the rows", () => {
    const rows = wrapper.findAll(".enemy .row");

    expect(rows.length).toBe(10);
  });
  it("renders the cells", () => {
    const cells = wrapper.findAll(".enemy .cell");
    // 10 * 10
    expect(cells.length).toBe(100);
  });
});
