import { Text, View, Button, Alert } from 'react-native';
import { useContext } from 'react';
import { AppContext } from './AppContext';
import { PackContext } from './PackContextProvider';

export const UserNameText = ({ }) => {
    let user = useContext(AppContext);
    console.log("usernametext.packprovider");
    let packContext = useContext(PackContext);
    const { addPack } = packContext;

    console.log("packs added" + JSON.stringify(packContext));
    return (
        <View>
            <Text>{user.name}</Text>

            <Text>{JSON.stringify(packContext.packs)} </Text>
            <Button onPress={() => Alert.alert('Simple Button pressed')} title="Press Me" />
            <Button onPress={addPack} title="Add Packs" />
        </View>
    );
};
