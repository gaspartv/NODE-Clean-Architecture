import DeleteCharacter from '../../core/usecases/characters/DeleteCharacter'
import CharacterRepositoryMemory from '../../infra/repositories/CharacterRepositoryMemory'

test('Should be able to delete a character', async () => {
  const characterRepositoryMemory = new CharacterRepositoryMemory()
  const deleteCharacter = new DeleteCharacter(characterRepositoryMemory)
  const character = await deleteCharacter.execute('1')
  expect(character.id).toBe('1')
  expect(character.vocation).toBe('Elder Druid')
  expect(character.level).toBe(985)
  expect(character.world).toBe('Inabra')
  expect(character.description).toBe('I am a ED')
})
