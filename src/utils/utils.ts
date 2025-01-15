import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";

export const getActiveScreen = (
  state:  DrawerNavigationState<ParamListBase>| undefined
): string | undefined => {
  if (!state) return undefined;

  // Check if the state has nested routes
  const route = state.routes[state.index];

  if (route?.state) {
    // @ts-ignore Recursively check deeper states
    return getActiveScreen(route?.state);
  }

  // Return the active route's name
  return route.name;
};
