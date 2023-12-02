import { useEffect } from "react";
import { Stack } from "expo-router";
import { StreamChat } from "stream-chat";

const API_KEY = "xkpbpejeqywg";
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {
  useEffect(() => {
    // conect the user
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "pablo",
          name: "Pablo",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("pablo")
      );
    };
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Messages" }} />
    </Stack>
  );
}
