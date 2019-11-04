import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList , ScrollView} from "react-native";
import yelp from "../api/yelp";



const ResultsShowScreen = ({ navigation }) => {



	const id = navigation.getParam('id');
	const [result, setResult] = useState(null);

	const getResults = async id => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResults(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{result.name}</Text>
			<Text style={styles.descriptionText}>Location: {result.location.address1}</Text>
			<Text style={styles.descriptionText}>City:  {result.location.city}</Text>
			<ScrollView>
			<FlatList
				data={result.photos}
				keyExtractor={photo => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex : 1,
		margin: 5
	},
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	descriptionText:{
		fontSize: 20,
		fontWeight: 'normal',
		marginTop: 5,
	},
	image: {
		width: 250,
		height: 120,
    borderRadius: 2,
    marginTop: 5,
	}
});

export default ResultsShowScreen;

