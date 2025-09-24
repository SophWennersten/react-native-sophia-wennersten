import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";


export interface DailyMessage {
  messages: string;
  vibe: string;
}

export default function useDailyMessageSecureStore(key: string, messagesArray: DailyMessage[]){
    const [dailyMessage, setDailyMessage] = useState(
    messagesArray[Math.floor(Math.random() * messagesArray.length)]
  );    

    useEffect(() => {
        
        const loadMessage = async () => {
            const today = new Date().toISOString().slice(0, 10);
            const stored = await SecureStore.getItemAsync(key);
            
            if(stored){
                const parsed = JSON.parse(stored)
                if (parsed.date === today) {
                    setDailyMessage(parsed.value);
                    return;
                }
            }
        }
        loadMessage();
    },[key])

    useEffect(() => {
        const saveMessage = async () => {
            if(!dailyMessage) return;
            const today = new Date().toISOString().slice(0, 10);
            await SecureStore.setItemAsync(
                key,
                JSON.stringify({date: today, value: dailyMessage})
            );
        };
        saveMessage();
    }, [key, dailyMessage]);

    return dailyMessage;
}   