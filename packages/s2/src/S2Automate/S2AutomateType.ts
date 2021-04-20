export class S2Automate {
  readonly name: string
  readonly init: S2InitTransition
  readonly transitions: S2Transition[]
}

export interface S2Command<ID> {
  readonly id: ID
}

export interface S2Role {}
export interface S2State {
  readonly position: number
  nodePosition(): number
}

export class S2InitTransition {
  readonly to: S2State
  readonly role: S2Role
  readonly command: any
}

export class S2Transition {
  readonly from: S2State
  readonly to: S2State
  readonly role: S2Role
  readonly command: string
}

export class S2TransitionCommand {
  readonly name: string
  readonly attributes: S2TransitionCommandAttribute[]
}

export class S2TransitionCommandAttribute {
  readonly name: string
  readonly type: string
  readonly optional: boolean
}
