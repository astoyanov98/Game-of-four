import { render, screen } from '@testing-library/react';
import Game from '../Game';

it('renders props passed to Game correctly', async () => {
  render(<Game title="Title"/>);
  const headingElement = screen.getByText(/Title/i);
  expect(headingElement).toBeInTheDocument();
});

it('renders props passed to Game correctly', async () => {
    render(<Game title="Title"/>);
    const headingElement = screen.getByRole('heading', {name:'Title'});
    expect(headingElement).toBeInTheDocument();
});

it('renders props passed to Game correctly', async () => {
    render(<Game title="Title"/>);
    const headingElement = screen.getByTestId('header');
    expect(headingElement).toBeInTheDocument();
});

it('renders props passed to Game correctly', async () => {
    render(<Game title="Title"/>);
    const headingElement = await screen.findByText('Title');
    expect(headingElement).toBeInTheDocument();
});

it('renders props passed to Game correctly', async () => {
    render(<Game title="Title"/>);
    const headingElement = screen.queryByText('asd');
    expect(headingElement).not.toBeInTheDocument();
});
