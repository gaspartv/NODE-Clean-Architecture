import CreateCharacter from '../../core/usecases/characters/CreateCharacter'
import CharacterRepositoryMemory from '../../infra/repositories/CharacterRepositoryMemory'

test('should be able to create a character', async () => {
  const characterRepositoryMemory = new CharacterRepositoryMemory()
  const createCharacter = new CreateCharacter(characterRepositoryMemory)
  const character = await createCharacter.execute({
    vocation: 'Elder Druid',
    level: 985,
    world: 'Inabra',
    description: 'I am a ED',
  })
  expect(character.vocation).toBe('Elder Druid')
  expect(character.level).toBe(985)
  expect(character.world).toBe('Inabra')
  expect(character.description).toBe('I am a ED')
})
