import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {

	const id = navigation.getParam("id");
	const [result, setResult] = useState(null);
	console.log(navigation);

	const getResults = async id => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};


	useEffect(() => {
		getResults(id);
    navigation.setParams({ title: 'test' });
		
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={photo => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 250,
		height: 120
	}
});

export default ResultsShowScreen;
