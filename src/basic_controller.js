import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'output']

  copy() {
    this.targets.find('output').value = this.targets.find('input').value
  }
}
