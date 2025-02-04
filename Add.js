import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert, StyleSheet } from 'react-native';

const Add = ({navigation, route}) => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");

return (
    <View style={styles.container}>
        <StatusBar />

        <Text style={styles.title}>Registration</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} onChangeText={(text) => setName(text)} />

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} keyboardType="email-address" />

        <Text style={styles.label}>Phone:</Text>
        <TextInput style={styles.input} onChangeText={(text) => setPhone(text)} keyboardType="phone-pad" />

        <Button
            title="Submit"
            onPress={() => {
                let mydata = JSON.parse(route.params.datastr);
                let item = { name: name, email: email, phone: phone };
                mydata.push(item);
                fetch("https://f32d026f462e4e0ba7b7a62936c8fc79.api.mockbin.io/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "f32d026f462e4e0ba7b7a62936c8fc79",
                    },
                    body: JSON.stringify(mydata),
                }).then(() => {
                    Alert.alert("Success", "User added, check Mockbin", [
                        {
                            text: "OK",
                            onPress: () => navigation.navigate("Home"),
                        },
                    ]);
                });
            }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
        justifyContent: "top"
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "white"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
});

export default Add;
