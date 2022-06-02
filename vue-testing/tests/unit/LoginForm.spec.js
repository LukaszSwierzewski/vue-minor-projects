import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data payload", async () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find('[data-testid="name-input"]');
    input.setValue("Adam Jahr");
    wrapper.trigger("submit");
    await wrapper.vm.$nextTick();
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);
    const expectedPayload = { name: "Adam Jahr" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
