import AppHeader from "@/components/AppHeader";
import { mount } from "@vue/test-utils";
describe("AppHeader", () => {
  test("if user is not logged in do not show the button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("if user is logged in do not show the button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
