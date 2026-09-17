const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = readFileSync('assets/site.js', 'utf8').split("const form=document.querySelector('#enquiry-form');")[1].split('\nif(form){const interest')[0];
async function scenario(reply, valid = true) {
  const button = {}, status = {}, confirmation = { hidden: true, focus() { this.focused = true; } };
  let submit, calls = 0, resolve;
  const form = { hidden: false, dataset: { endpoint: 'https://formsubmit.co/ajax/test@example.com' },
    querySelector: () => button, reportValidity: () => valid,
    addEventListener: (_, callback) => submit = callback,
    setAttribute() {}, removeAttribute() {} };
  const values = [['name', 'Example couple'], ['message', 'Test wedding plans'], ['_honey', '']];
  vm.runInNewContext(source, {form, document: {querySelector: selector => selector === '#form-status' ? status : confirmation},
    setArrowLabel: (element, label) => element.textContent = label,
    AbortController, setTimeout, clearTimeout,
    FormData: class { constructor() { return values; } },
    fetch: (url, options) => { calls++; assert.equal(url, form.dataset.endpoint); assert.deepEqual(JSON.parse(options.body), Object.fromEntries(values));
      return new Promise(r => resolve = () => r({ok: reply.ok, json: async () => { if(reply.malformed) throw Error('Invalid JSON'); return {success: reply.success}; }})); }
  });
  let prevented = false;
  const first = submit({preventDefault() { prevented = true; }});
  await submit({preventDefault() {}});
  assert.equal(prevented, true);
  assert.equal(calls, valid ? 1 : 0, 'invalid/duplicate submissions must not send');
  if(valid) { assert.equal(button.disabled, true); resolve(); }
  await first;
  const success = valid && reply.ok && !reply.malformed && (reply.success === true || reply.success === 'true');
  assert.equal(form.hidden, !!success);
  assert.equal(confirmation.hidden, !success);
  assert.equal(button.disabled, false);
  if(success) assert.equal(confirmation.focused, true);
  else if(valid) assert.match(status.textContent, /Your details are still here/);
}
(async () => {
  for(const reply of [{ok:true,success:true},{ok:true,success:'true'},{ok:true,success:false},{ok:false,success:true},{ok:true,malformed:true}]) await scenario(reply);
  await scenario({}, false);
  console.log('Passed: success confirmation, rejected responses, malformed responses, validation, duplicate protection, and retry availability. No requests sent.');
})();
