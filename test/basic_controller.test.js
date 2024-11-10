import { Application } from '@hotwired/stimulus'
import { beforeEach, describe, expect, test } from 'vitest'

import BasicController from '@/basic_controller'

describe('BasicController', () => {
  describe('#copy', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div data-controller="basic">
        <input id="input" data-basic-target="input" type="text" />
        <input id="output" data-basic-target="output" type="text" />
        <button id="button" data-action="basic#copy" />
      </div>`

      const application = Application.start()
      application.register('basic', BasicController)
    })

    test('copies input and sets it on output', () => {
      const input = document.getElementById('input')
      const output = document.getElementById('output')
      const button = document.getElementById('button')

      input.value = 'foo'
      button.click()

      expect(output.value).toEqual('foo')
    })
  })
})
