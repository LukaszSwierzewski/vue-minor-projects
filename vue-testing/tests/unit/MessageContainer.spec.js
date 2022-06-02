import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps the MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
        stubs: {
            MessageDisplay: {
                template: '<p data-testid="message">Luke Skywalker</p>'
            }
        }
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('Luke Skywalker')
  })
})