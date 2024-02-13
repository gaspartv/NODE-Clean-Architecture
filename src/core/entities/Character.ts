import { randomUUID } from 'crypto'
import { CreateCharacterDto } from '../dtos/character/CreateCharacter'
import { UpdateCharacterDto } from '../dtos/character/UpdateCharacter'

interface CharacterInterface {
  id: string
  vocation: string
  level: number
  world: string
  description: string
}

export class CharacterEntity {
  private _id: string
  private _vocation: string
  private _level: number
  private _world: string
  private _description: string

  constructor(character: CharacterInterface) {
    this._id = character.id
    this._vocation = character.vocation
    this._level = character.level
    this._world = character.world
    this._description = character.description
  }

  get() {
    return {
      id: this._id,
      vocation: this._vocation,
      level: this._level,
      world: this._world,
      description: this._description,
    }
  }

  create(dto: CreateCharacterDto) {
    this._id = randomUUID().toString()
    this._vocation = dto.vocation
    this._level = dto.level
    this._world = dto.world
    this._description = dto.description
  }

  update(dto: UpdateCharacterDto) {
    if (dto.vocation) this._vocation = dto.vocation
    if (dto.level) this._level = dto.level
    if (dto.world) this._world = dto.world
    if (dto.description) this._description = dto.description
  }
}
