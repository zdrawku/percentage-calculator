import { describe, it, expect } from 'vitest';
import WIthGlobalInputs from './with-global-inputs.js';

describe('WIthGlobalInputs', () => {
  it('<app-with-global-inputs> is an instance of WIthGlobalInputs', async () => {
    const element = document.createElement('app-with-global-inputs');
    expect(element).to.be.instanceOf(WIthGlobalInputs);
  });
});
