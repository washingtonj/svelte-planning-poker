// @vitest-environment jsdom

import Selector from './selector.svelte'
import { render, fireEvent, screen } from '@testing-library/svelte'
import { describe, it, expect, vi } from 'vitest'

describe('Selector', () => {
  it('Should render a selector', () => {
    // Arrange
    const { getAllByText } = render(Selector, {
      props: {
        items: [
          {
            id: '1',
            value: '1',
            description: '30min',
          },
          {
            id: '2',
            value: '2',
            description: '1h',
          }
        ],
        onSelect: () => { }
      }
    })

    // Act
    const firstItem = getAllByText('1')
    const secondItem = getAllByText('2')

    // Assert
    expect(firstItem).toBeDefined()
    expect(secondItem).toBeDefined()
  })

  it('Should select an item', async () => {
    // Arrange
    const onClickMock = vi.fn()

    const { getByText } = render(Selector, {
      props: {
        items: [
          {
            id: '1',
            value: '1',
            description: '30min',
          },
          {
            id: '2',
            value: '2',
            description: '1h',
          }
        ],
        selected: '1',
        onSelect: onClickMock
      }
    })

    // Act
    const item = getByText('2')
    await fireEvent.click(item)
    await fireEvent.keyPress(item, { key: 'Enter', code: 'Enter' })

    // Assert
    expect(onClickMock).toHaveBeenCalledTimes(2)
  })
})