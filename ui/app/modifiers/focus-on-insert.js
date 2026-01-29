/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { modifier } from 'ember-modifier';
import { schedule } from '@ember/runloop';

/**
 * Focuses on an element when it is inserted into the DOM.
 *
 * Usage:
 *   <input {{focus-on-insert selector='input[type="text"]' shouldFocus=true}} />
 *
 * @param {Element} element - The element that was inserted
 * @param {Object} options - Positional arguments (not used)
 * @param {String} selector - CSS selector for the element to focus (defaults to 'input[type="text"]')
 * @param {Boolean} shouldFocus - Whether to focus (defaults to true)
 */
export default modifier(function focusOnInsert(element, _positional, { selector, shouldFocus = true } = {}) {
  if (shouldFocus === false) {
    return;
  }

  schedule('afterRender', () => {
    const selectString = selector || 'input[type="text"]';
    const targetElement = element.querySelectorAll(selectString)[0];

    if (targetElement && targetElement !== document.activeElement) {
      targetElement.focus();
    }
  });
});
