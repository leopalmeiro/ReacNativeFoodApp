import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

  const filterResultsByprice = ( price ) =>{
    return results.filter( result => {
      return result.price === price;
    });

  };

	return (
/* 		<View style={styles.container}>
 */		
 <>
 	<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
        <ResultsList results={filterResultsByprice('$')} title="Cost Effective" />
			  <ResultsList results={filterResultsByprice('$$')} title="Bit Pricier" />
			  <ResultsList results={filterResultsByprice('$$$')} title="Big Spender"/>
		  </ScrollView>
     {/* </View>	 */}
     </>
 );
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default SearchScreen;



/* import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

  const filterResultsByprice = ( price ) =>{
    return results.filter( result => {
      return result.price === price;
    });

  };

	return (
 		<View style={styles.container}>
 		
 <>
 	<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
        <ResultsList navigation={navigation} results={filterResultsByprice('$')} title="Cost Effective" />
			  <ResultsList navigation={navigation} results={filterResultsByprice('$$')} title="Bit Pricier" />
			  <ResultsList navigation={navigation} results={filterResultsByprice('$$$')} title="Big Spender"/>
		  </ScrollView>
      </View>	
     </>
 );
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default SearchScreen;
 */