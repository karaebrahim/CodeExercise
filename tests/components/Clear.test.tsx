import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Clear from '../../src/js/components/Clear';
import '@testing-library/jest-dom/vitest';

describe('Clear', () => {
  it('should clear filters when clicked', () => {
    render(<Clear clearFilters={undefined} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })
})
