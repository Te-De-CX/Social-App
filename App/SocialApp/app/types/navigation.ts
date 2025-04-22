import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  slider: undefined;
  login: undefined;
  // Add other routes here as needed
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}