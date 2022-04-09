export type ScreenParams = {
  AdditionalInfo: {}

  Login: {}
  Main: {}
  Welcome: {}
  MyFeed: {}
  WritePost: {}
  MyPet: {}
  PostCard: { postId?: string }
  SignUp: {}

  // Settings Navigation
  Notice: {}
  Privacy: {}
  Alarm: {}
  Instruction: {}
  Donation: {}
  Proposal: {}

  // Feed Naigation
  FeedBase: {}
  HealingGuide: { healingId: number }
}

export type ScreenNames = keyof ScreenParams

export type RouteProps = {
  [P in keyof ScreenParams]: {
    key: P
    name: P
    params: ScreenParams[P]
  }
}
