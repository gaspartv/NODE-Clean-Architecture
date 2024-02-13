import UpdateCharacter from '../../core/usecases/characters/UpdateCharacter'
import CharacterRepositoryMemory from '../../infra/repositories/CharacterRepositoryMemory'

test('Should be able to update a character', async () => {
  const characterRepositoryMemory = new CharacterRepositoryMemory()
  const updateCharacter = new UpdateCharacter(characterRepositoryMemory)
  const characterUpdate = await updateCharacter.execute('1', {
    vocation: 'Druid',
    level: 100,
    world: 'Inabra',
    description: 'I am a Druid',
  })
  expect(characterUpdate.id).toBe('1')
  expect(characterUpdate.vocation).toBe('Druid')
  expect(characterUpdate.level).toBe(100)
  expect(characterUpdate.world).toBe('Inabra')
  expect(characterUpdate.description).toBe('I am a Druid')
})
