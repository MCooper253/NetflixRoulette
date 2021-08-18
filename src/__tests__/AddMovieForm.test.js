import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { jest, test, expect } from '@jest/globals';

//import { postMovie } from '../Redux/thunk.js'
import Modal from '../app/Containers/Modal.js'
import AddMovieForm from '../app/Components/AddMovieForm.js'
import AddMovieModalContainer from '../app/Containers/Header Containers/AddMovieModalContainer.js';


const mockStore = configureStore([]);

const mockCloseModal = jest.fn();
const mockMovieSubmission = jest.fn();

describe('add movie modal', () => {
    let store

    beforeEach(() => {
        store = mockStore({});
    })

    const buildAddMovieModalContainer = () => {
        return (
            <div id='root'>
                <Provider store={store}>
                    <AddMovieModalContainer>
                        <Modal
                            innerComp={<AddMovieForm />}
                            closeModal={mockCloseModal} 
                            onSubmit={mockMovieSubmission}
                        />
                    </AddMovieModalContainer>
                </Provider>
            </div>
            )
    }

    test("does the 'Add Movie' button render and render the modal upon being clicked", () => {
        
        render(buildAddMovieModalContainer());

        expect(screen.getByText(/^\+ ADD MOVIE$/)).toBeInTheDocument();

        userEvent.click(screen.getByText(/^\+ ADD MOVIE$/));
        expect(screen.getByTitle(/^modal$/)).toBeInTheDocument();

    });

    test("does the modal render correctly", () => {
        
        render(buildAddMovieModalContainer());

        userEvent.click(screen.getByText(/^\+ ADD MOVIE$/));
    });

    // test("does the modal's close and reset fucntions work properly")

    // test("does the modal's submit function submit a action to the redux store")
    
    // test("upon submission does the modal close")
})