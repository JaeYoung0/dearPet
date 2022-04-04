export type ScreenParams = {
  Login: {}
  Main: {}
  Welcome: {}
  MyFeed: {}
  WritePost: {}
  MyPet: {}
  PostCard: { postId: string }
  SignUp: {}

  // Settings Navigation
  Notice: {}
  Privacy: {}
  Alarm: {}
  Instruction: {}
  Donation: {}
  Proposal: {}
}

export type ScreenNames = keyof ScreenParams

export type RouteProps = {
  [P in keyof ScreenParams]: {
    key: P
    name: P
    params: ScreenParams[P]
  }
}
