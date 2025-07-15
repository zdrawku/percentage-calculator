import { describe, it, expect } from 'vitest';
import MasterView from './master-view.js';

describe('MasterView', () => {
  it('<app-master-view> is an instance of MasterView', async () => {
    const element = document.createElement('app-master-view');
    expect(element).to.be.instanceOf(MasterView);
  });
});
