import Footer from '@/app/components/Footer/Footer'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  it('renders a footer', () => {
    render(<Footer/>)
    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument()
  })
})