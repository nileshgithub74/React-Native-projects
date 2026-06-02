export type RootStackParamList = {
  onboarding: undefined;
  login: undefined;
  signup: undefined;
  otp: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
