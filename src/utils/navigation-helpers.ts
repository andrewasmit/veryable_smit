export const handleClickNavigationTab = (linkTab: string): string => {
  switch (linkTab) {
    case "HOME":
      return "home";
    case "STUDY":
      return "countries";
    case "PLAY!":
      return "game";
  }
  return "";
};
