import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import Auth from "@arcana/auth-react-native";

export default function App() {
  const componentARef = React.useRef(null);

  const [result, setResult] = useState({});

  const getUserInfo = async () => {
    if (componentARef !== null) {
      const userInfo = await componentARef?.current.getUserInfo();
      console.log({ userInfo });
      setResult(userInfo);
    }
  };
  const getAccount = async () => {
    if (componentARef !== null) {
      const accounts = await componentARef?.current.getAccount();
      console.log({ accounts });
      setResult(accounts);
    }
  };

  const login = async () => {
    componentARef?.current.loginWithSocial("google");
  };
  const show = async () => {
    componentARef?.current.showWallet();
  };
  const hide = async () => {
    componentARef?.current.hideWallet();
  };

  const sendTx = async () => {
    componentARef?.current.sendTransaction({
      to: "0xE28F01Cf69f27Ee17e552bFDFB7ff301ca07e780",
      value: "0x9184e72a",
    });
  };
  const getBalance = async () => {
    const balance = await componentARef?.current.getBalance();
    setResult(balance);
  };

  const logout = async () => {
    await componentARef?.current.logout();
  };

  return (
    <>
      <View>
        <Button title="Hide" onPress={hide} />
        <Button title="Login with google" onPress={login} />
        <Button title="Login with google" onPress={login} />
        <Button title="Get balance" onPress={getBalance} />
        <Button title="Send transaction" onPress={sendTx} />

        <Button title="Get User Info" onPress={getUserInfo} />
        <Button title="Get Account" onPress={getAccount} />
        <Button title="Show wallet" onPress={show} />
        <Button title="Logout" onPress={logout} />
        <Text>{JSON.stringify(result)}</Text>
      </View>
      <Auth
        clientId={"xar_dev_6919ba95cfd93b9eb23846dc748e082cb47d7f89"}
        ref={componentARef}
      />
    </>
  );
}
