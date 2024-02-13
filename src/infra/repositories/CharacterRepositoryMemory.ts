import { ResponseCharacterDto } from '../../core/dtos/character/ResponseCharacter'
import { CharacterEntity } from '../../core/entities/Character'
import CharacterRepository from '../../core/repositories/CharacterRepository'

export default class CharacterRepositoryMemory implements CharacterRepository {
  createCharacter(Entity: CharacterEntity): Promise<ResponseCharacterDto> {
    return Promise.resolve(Entity.get())
  }
  getCharacter(id: string): Promise<ResponseCharacterDto> {
    return Promise.resolve({
      id: id,
      vocation: 'Elder Druid',
      level: 985,
      world: 'Inabra',
      description: 'I am a ED',
    })
  }
  updateCharacter(
    id: string,
    Entity: CharacterEntity
  ): Promise<ResponseCharacterDto> {
    return Promise.resolve(Entity.get())
  }
  deleteCharacter(id: string): Promise<ResponseCharacterDto> {
    return Promise.resolve({
      id: id,
      vocation: 'Elder Druid',
      level: 985,
      world: 'Inabra',
      description: 'I am a ED',
    })
  }
  listCharacters(): Promise<ResponseCharacterDto[]> {
    return Promise.resolve([
      {
        id: '1',
        vocation: 'Elder Druid',
        level: 985,
        world: 'Inabra',
        description: 'I am a ED',
      },
      {
        id: '2',
        vocation: 'Elder Druid',
        level: 985,
        world: 'Inabra',
        description: 'I am a ED',
      },
      {
        id: '3',
        vocation: 'Elder Druid',
        level: 985,
        world: 'Inabra',
        description: 'I am a ED',
      },
    ])
  }
}
