import { Application } from '@hotwired/stimulus'
import { beforeEach, describe, expect, test } from 'vitest'

import HelloController from '@/hello_controller'

describe('HelloController', () => {
  describe('Greeting', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div data-controller="hello">
        <input data-hello-target="name" type="text">
        <button data-action="click->hello#greet">
          Greet
        </button>
        <span data-testid="output" data-hello-target="output">
        </span>
      </div>`

      const application = Application.start()
      application.register('hello', HelloController)
    })

    test('Input name and see the output after click the button', async () => {
      const input = document.querySelector("[data-hello-target='name']")
      const button = document.querySelector(
        "[data-action='click->hello#greet']"
      )
      const output = document.querySelector("[data-hello-target='output']")

      input.value = 'Karn'
      button.click()

      expect(output.textContent).toEqual('Hello, Karn!')
    })
  })
})
