import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://f32d026f462e4e0ba7b7a62936c8fc79.api.mockbin.io/")
            .then((response) => {
                return response.json();
            })
            .then((myJson)=>{
                setMyData(myJson);
            })
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listItem}>
                <View style={styles.row}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.userText}>{item.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.userText}>{item.email}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Phone:</Text>
                    <Text style={styles.userText}>{item.phone}</Text>
                </View>
            </View>
        );
    };

return (
    <View style={styles.container}>
        <StatusBar/>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })}>
            <Text style={styles.addButtonText}>Add User</Text>
        </TouchableOpacity>
        <FlatList data={myData} renderItem={renderItem} />
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white"
    },
    addButton: {
        backgroundColor: "blue",
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 30
    },
    addButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3
    },
    listItem: {
        padding: 20,
        borderWidth: 2,
        borderColor: "green",
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 5
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginRight: 5
    },
    userText: {
        fontSize: 16,
        color: "black"
    }
});

export default Home;
