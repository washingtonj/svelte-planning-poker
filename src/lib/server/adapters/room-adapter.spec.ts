import { describe, expect, it } from 'vitest'
import { RoomAdapter } from './room-adapter'


describe('Room-Adapter', () => {
  it('Should create a room', async () => { 
    // Arrange
    const { createRoom } = RoomAdapter.getInstance()

    // Act
    const room = await createRoom('room-1')

    // Assert
    expect(room.name).toBe('room-1')
    expect(room.id).toBeDefined()
    expect(room.players).toBeDefined()
  })

  it('Should join a room', async () => {
    // Arrange
    const { joinRoom, createRoom } = RoomAdapter.getInstance()
    const room = await createRoom('room-1')

    // Act
    const joinedRoom = await joinRoom(room.id, 'player-1')

    // Assert
    expect(joinedRoom.name).toBe('room-1')
    expect(joinedRoom.id).toBeDefined()
    expect(joinedRoom.players).toBeDefined()
    expect(joinedRoom.players.length).toBe(1)
    expect(joinedRoom.players[0].name).toBe('player-1')
  })

  it('Should throw an error when room does not exist', async () => {
    // Arrange
    const { joinRoom } = RoomAdapter.getInstance()

    // Act
    const joinRoomPromise = joinRoom('room-1', 'player-1')

    // Assert
    await expect(joinRoomPromise).rejects.toThrow('Room not found')
  })
})