import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SelectField from '../../src/js/components/SelectField';
import '@testing-library/jest-dom/vitest';

describe('SelectField', () => {
  it('should render in correct initial state', () => {
    render(<SelectField value={undefined} type={undefined} data={undefined} setData={undefined} />);

    const select = screen.getByRole('select');
    expect(select).toBeInTheDocument();
  })
})
