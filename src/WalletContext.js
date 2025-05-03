import { createContext, useState, useEffect } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const storedAccount = localStorage.getItem("walletAddress");
        if (storedAccount) setAccount(storedAccount);
    }, []);

    const connectWallet = async () => {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            localStorage.setItem("walletAddress", accounts[0]); // Guardar en local storage
        } catch (error) {
            console.error("Error al conectar MetaMask:", error);
        }
    };

    return (
        <WalletContext.Provider value={{ account, connectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};