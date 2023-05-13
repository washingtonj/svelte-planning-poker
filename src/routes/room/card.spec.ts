// @vitest-environment jsdom

import Card from './card.svelte'
import { render } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'

describe('Card', () => {
  it('Should display username on waiting state', () => {
    // Arrange
    const { getAllByText } = render(Card, { card: { playerName: 'Washi', description: '30min', value: '5' }, state: 'waiting' })
    
    // Act
    const username = getAllByText('Washi')

    // Assert
    expect(username).toBeDefined()
  })

  it('Should display username on voted state', () => {
    // Arrange
    const { getAllByText } = render(Card, { card: { playerName: 'Washi', description: '30min', value: '5' }, state: 'voted' })
    
    // Act
    const username = getAllByText('Washi')

    // Assert
    expect(username).toBeDefined()
  })

  it('Should display the description, username and value on revealed state', () => {
    // Arrange
    const { getAllByText } = render(Card, { card: { playerName: 'Washi', description: '30min', value: '5' }, state: 'revealed' })
    
    // Act
    const username = getAllByText('Washi')
    const description = getAllByText('30min')
    const value = getAllByText('5')

    // Assert
    expect(username).toBeDefined()
    expect(description).toBeDefined()
    expect(value).toBeDefined()
  })
})