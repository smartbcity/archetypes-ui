export class S2Automate {
  readonly name: string
  readonly init: S2InitTransition
  readonly transitions: S2Transition[]
}

export interface S2Command<ID> {
  readonly id: ID
}

export class S2InitTransition {
  readonly to: number
  readonly role: number
  readonly command: any
}

export class S2Transition {
  readonly from: number
  readonly to: number
  readonly role: number
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
