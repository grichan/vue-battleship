import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(App);
});

afterEach(() => {
  wrapper = null;
});

describe("Rating", () => {
  it("renders the main div", () => {
    const main = wrapper.findAll(".main");

    expect(main.length).toBe(1);
  });
});
