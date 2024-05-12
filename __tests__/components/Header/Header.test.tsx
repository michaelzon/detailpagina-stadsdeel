import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('renders a heading', () => {
    render(<header/>)
    const heading = screen.getByRole('banner')
 
    expect(heading).toBeInTheDocument()
  })
})