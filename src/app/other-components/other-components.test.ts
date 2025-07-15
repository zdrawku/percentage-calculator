import { describe, it, expect } from 'vitest';
import OtherComponents from './other-components.js';

describe('OtherComponents', () => {
  it('<app-other-components> is an instance of OtherComponents', async () => {
    const element = document.createElement('app-other-components');
    expect(element).to.be.instanceOf(OtherComponents);
  });
});
