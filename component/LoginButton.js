import React from 'react'
import { StyleSheet, Button } from 'react-native';

const LoginButton = props => (
    <Button style={[styles.container, props.style]}
        title='Log In'
        onPress={props.onPress}
    />
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingBottom: 20
    },
    text: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
        color: 'black',
        textAlign: 'center'
    }
})

export default LoginButton