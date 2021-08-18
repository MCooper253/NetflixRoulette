import React from 'react';
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import ModalDropdown from './ModalDropdown.js';

describe('Modal Dropdown', () => {

    test('boxes are checked when clicked', () => {

        const handelClickMock = jest.fn();

        render(<ModalDropdown toggleGenreState={handelClickMock} /> );

        userEvent.click(screen.getByTitle('action'));
        userEvent.click(screen.getByTitle('horror'));
        userEvent.click(screen.getByTitle('documentary'));
        userEvent.click(screen.getByTitle('crime'));

        expect(handelClickMock).toHaveBeenCalledTimes(4);
        
    })
})