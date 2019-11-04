import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
	{
		Search: {
			screen: SearchScreen
		},
		ResultsShow: {
			screen: ResultsShowScreen,
			navigationOptions: ( { navigation } ) => ({
				title: `${navigation.state.params.title}`
			}),
		}
	},
	{
		initialRouteName: "Search",
		defaultNavigationOptions: {
			title: "Bussiness Search App"
		}
	}
);

export default createAppContainer(navigator);
