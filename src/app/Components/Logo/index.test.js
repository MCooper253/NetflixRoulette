import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react'
import React from 'react';

import Logo from './index';

describe('Logo', () => {

    test('renders app text', () => {

        render(<Logo />);
        const title = screen.findByText('netflix roulette');
        expect(title).toBeTruthy();
    });
});