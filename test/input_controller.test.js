import { Application } from '@hotwired/stimulus'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, test } from 'vitest'

import InputController from '@/input_controller'

describe('InputController', () => {
  describe('only-number attribute', () => {
    beforeEach(() => {
      document.body.innerHTML = `<form>
        <input id="input" data-controller="input" data-only-number="true" type="text" />
      </form>`

      const application = Application.start()
      application.register('input', InputController)
    })

    test('input only number', async () => {
      const input = document.getElementById('input')

      const user = userEvent.setup()
      await user.type(input, '1')
      await user.type(input, 'a')
      await user.type(input, '.')
      await user.type(input, '.')
      await user.type(input, '9')

      expect(input.value).toEqual('1.9')
    })
  })
})
