import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import RadioField from '../../src/js/components/RadioField';
import '@testing-library/jest-dom/vitest';

describe('RadioField', () => {
  it('should render in correct initial state', () => {
    render(<RadioField value={undefined} type={undefined} setType={undefined} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('checked', '');
  })


  it('should check the checkbox on user click', () => {
    render(<RadioField value={undefined} type={undefined} setType={undefined} />);

    const radios = screen.getAllByRole('radio');
    const user = userEvent.setup();
    radios.forEach(radio => {
      user.click(radio);
      expect(radio).toBeChecked();
    })
  })
})
