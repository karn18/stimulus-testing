import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect() {
    this.onlyNumber = this.element.dataset['onlyNumber'] === 'true'
    this.element.addEventListener('keydown', this.isNumberKey.bind(this))
  }

  isNumberKey(event) {
    const isNumber = /^[0-9]$/i.test(event.key)
    const isDot = event.key === '.'
    const foundDot = this.element.value.includes('.')

    if (isDot && !foundDot) return true
    if (isNumber) return true

    event.preventDefault()
    return false
  }
}
