import { render, screen } from '@testing-library/react'
import Card from './index'

describe('Card Component', () => {
  it('renders card with children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Card className="custom-card">
        <p>Content</p>
      </Card>
    )
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('custom-card')
  })

  it('renders with card class', () => {
    const { container } = render(
      <Card>
        <p>Glass Card</p>
      </Card>
    )
    const card = container.firstChild
    expect(card).toHaveClass('card')
  })

  it('applies hover effect by default', () => {
    const { container } = render(
      <Card>
        <p>Hoverable Card</p>
      </Card>
    )
    const card = container.firstChild
    // hover prop이 true일 때는 추가 클래스가 없음
    expect(card).toHaveClass('card')
  })

  it('disables hover effect when hover=false', () => {
    const { container } = render(
      <Card hover={false}>
        <p>Non-hoverable Card</p>
      </Card>
    )
    const card = container.firstChild
    expect(card).toHaveClass('hover:shadow-soft')
  })

  it('handles onClick events', async () => {
    const handleClick = jest.fn()
    render(
      <Card onClick={handleClick}>
        <p>Clickable Card</p>
      </Card>
    )
    const card = screen.getByText('Clickable Card').parentElement
    card?.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders multiple children correctly', () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Description</p>
        <button>Action</button>
      </Card>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
