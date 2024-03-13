import React from 'react';
import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Search from '../../src/js/components/Search';
import '@testing-library/jest-dom/vitest';

describe('Search', () => {
  const renderSearch = () => {
    const onChange = vi.fn();
    render(<Search searchItems={onChange} />);

    return {
      inputs: screen.getAllByRole('search'),
      onChange
    }
  }

  it('should render an input field for searching', () => {
    const { inputs } = renderSearch();
    inputs.forEach(input => {
      expect(input).toBeInTheDocument();
    })
  })

  it('should search items when Enter is pressed', () => {
    const { inputs, onChange } = renderSearch();
    const user = userEvent.setup();
    const searchTerm = "SearchTerm";
    inputs.forEach(async input => {
      await user.type(input, `${searchTerm} {enter}`);
      expect(onChange).toHaveBeenCalledWith(searchTerm);
    })
  })

  it('should not search items when input field is empty', async () => {
    const { inputs, onChange } = renderSearch();
    const user = userEvent.setup();
    inputs.forEach(async input => {
      await user.type(input, '{enter}');
      expect(onChange).not.toHaveBeenCalled();
    })
  })
})
