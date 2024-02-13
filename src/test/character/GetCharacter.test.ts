import GetCharacter from '../../core/usecases/characters/GetCharacter'
import CharacterRepositoryMemory from '../../infra/repositories/CharacterRepositoryMemory'

test('Should be able to get a character', async () => {
  const characterRepositoryMemory = new CharacterRepositoryMemory()
  const getCharacter = new GetCharacter(characterRepositoryMemory)
  const character = await getCharacter.execute('1')
  expect(character.id).toBe('1')
  expect(character.vocation).toBe('Elder Druid')
  expect(character.level).toBe(985)
  expect(character.world).toBe('Inabra')
  expect(character.description).toBe('I am a ED')
})
