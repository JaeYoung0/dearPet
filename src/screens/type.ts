export type ScreenParams = {
  Login: {}
  Main: {}
  Welcome: {}
  MyFeed: {}
  WritePost: {}
  MyPet: {}
  PostCard: { postId: string }
  SignUp: {}
}

export type RouteProps = {
  [P in keyof ScreenParams]: {
    key: P
    name: P
    params: ScreenParams[P]
  }
}
