const initialState = {
};

export default function appSetting(state =initialState, action = {} ) {
  switch (action.type) {
    case 'tabSelect': {
      return {
        ...state,
        selectedTab: action.tab
      }
    };
    case 'appLaunching': {
      return {
        ...state,
        app_launch: action.launch,
      }
    };
    default:
      return state;
  }
}
