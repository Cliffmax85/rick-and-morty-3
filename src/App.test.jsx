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

    console.log(dropdown);
})