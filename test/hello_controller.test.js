import {
  screen
} from '@testing-library/dom'
import '@testing-library/jest-dom'

import { Application } from '@hotwired/stimulus'
import HelloController from '../src/hello_controller'

describe("HelloController", () => {
  describe("Greeting", () => {
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
      application.register("hello", HelloController)
    })

    it("Input name and see the output after click the button", () => {
      // Arrange
      const input = document.querySelector("[data-hello-target='name']")
      const button = document.querySelector("[data-action='click->hello#greet']")
      const output = document.querySelector("[data-hello-target='output']")

      // Act
      input.value = "Karn"
      button.click()

      // Assert
      expect(output.textContent).toEqual("Hello, Karn!")
      expect(screen.queryByTestId("output")).not.toBeEmptyDOMElement()
    })
  })
})
