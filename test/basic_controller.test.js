import { Application } from '@hotwired/stimulus';
import BasicController from '../src/basic_controller';

describe("BasicController", () => {
  describe("#copy", () => {
    beforeEach(() => {
      document.body.innerHTML = `<div data-controller="basic">
        <input id="input" data-basic-target="input" />
        <input id="output" data-basic-target="output" />
        <button id="button" data-action="basic#copy" />
      </div>`;

      const application = Application.start();
      application.register("basic", BasicController);
    });

    it("copies input and sets it on output", () => {
      const input = document.getElementById("input");
      const output = document.getElementById("output");
      const button = document.getElementById("button");

      input.value = "foo";
      button.click();

      expect(output.value).toEqual("foo");
    });
  });
});
