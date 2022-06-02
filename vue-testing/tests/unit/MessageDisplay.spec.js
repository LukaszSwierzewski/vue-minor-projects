import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/swapi";
import flushPromises from "flush-promises";
jest.mock("@/services/swapi");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage and displays message", async () => {
    // mock the API call
    const mockMessage = "Luke Skywalker";
    getMessage.mockResolvedValueOnce({ name: mockMessage });
    const wrapper = mount(MessageDisplay);
    await flushPromises();

    expect(getMessage).toHaveBeenCalledTimes(1);
    const messsage = wrapper.find('[data-testid="message"]').element
      .textContent;
    expect(messsage).toEqual(mockMessage);
    // wait for promise to resolve
    // check that call happened once
    // check that component displays message
  });

  it("Displays an error when getMessage call fails", async () => {
    // mock the failed API call
    const mockError = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce(mockError);
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const error = wrapper.find('[data-testid="message-error"]').element
      .textContent;
    console.log(error);
    expect(error).toEqual(mockError);
    // wait for promise to resolve
    // check that call happened once
    // check that component displays error
  });
});
