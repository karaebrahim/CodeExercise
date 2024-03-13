import React from 'react';
import { it, expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Loader from '../../src/js/components/Loader';
import '@testing-library/jest-dom/vitest';

describe('Loader', () => {
  it('should render with correct text', () => {
    render(<Loader />);

    const container = document.getElementById('loader');
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Loading...');
  })
})
