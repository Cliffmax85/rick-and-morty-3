import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import App from './App'

it('should make sure a list of characters shows up and take you to the detail page', async () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )

    const loading = screen.getByText(/loading!/i);
    await waitForElementToBeRemoved(loading);

    const link = await screen.findByText('Antenna Morty');

    userEvent.click(link);
    await screen.findByText('Location: Citadel of Ricks')
})

it('should test the dropdown', async () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )

    const loading = screen.getByText(/loading!/i);
    await waitForElementToBeRemoved(loading);

    const dropdown = screen.getByRole('combobox', { name: 'Search By Character Status' })

    userEvent.selectOptions(dropdown, 'dead');

    await screen.findByText('Adjudicator Rick');
})

it('should test initial entries', async () => {
    render(
        <MemoryRouter
            initialEntries={['/character/1', '/character/2', '/character/3', '/character/4']}
            initialIndex={3}>
            <App />
        </MemoryRouter>
    );



    const beth = await screen.findByText(/beth smith/i);
    expect(beth.textContent).toEqual('Beth Smith');
})