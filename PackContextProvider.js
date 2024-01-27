import { useContext, createContext, Component, useState } from 'react';
import { View } from 'react-native';

const PackContext = createContext(null);

const PackContextProvider = ({ children }) => {
    const [state, setState] = useState({ packs: [{ id: "pack1" }, { id: "pack2" }] });

    console.log("<<<<<< PackContextProvider initialized >>>>>>" + JSON.stringify(state));
    console.log(JSON.stringify(state));
    addPack = () => {
        console.log("PackContextProvider.addPack");
        let newPack = { id: "pack" + (state.packs.length + 1) };
        newSet.packs.push(newPack);
        console.log("newPack" + JSON.stringify(newPack));
        console.log("state.packs" + JSON.stringify(state.packs));
        newSet = { ...state }
        this.state = newSet;
        setState(newSet);
    }

    return (

        <PackContext.Provider value={{ ...this.state, addPack: this.addPack }} >
            {children}
        </PackContext.Provider>

    );
};

export { PackContext, PackContextProvider }