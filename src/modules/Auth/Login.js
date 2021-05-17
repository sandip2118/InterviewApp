/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
} from 'react-native';

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        GoogleSignin.configure({
            webClientId: '996937456642-26ikp0ah8o3n5nko5h6hsqi9ps2v87km.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true
        });
    }

    _signIn = async () => {
        console.log('+++++');
        try {
            // await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn().then((res) => {
                console.log('res', res.user);
                this.props.navigation.navigate('Home')
            }).catch((err) => {
                console.log('err', err);

            })
            this.setState({ userInfo });
            console.log('userInfo', userInfo);

        } catch (error) {
            console.log('error', error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    render() {
        return (
            <SafeAreaView>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                // disabled={this.state.isSigninInProgress} 
                />
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            console.log('--------', result);
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        this.props.navigation.navigate('Home')
                                        console.log('data.accessToken.toString()', data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} />
            </SafeAreaView>
        );
    }
};

export default Login;
