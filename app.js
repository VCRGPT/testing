// For regular fields: add class 'field-group'
function createFieldGroup(title, content, italic = false, spaced3 = false) {
  const container = document.createElement('p');
  container.classList.add('field-group');
  if (spaced3) container.classList.add('spaced-3');

  // ... rest remains unchanged
}
