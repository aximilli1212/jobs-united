import {View, Text, SafeAreaView} from 'react-native';
import { Stack, useRouter } from "expo-router";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";
import {COLORS, icons, images, SIZES } from "../constants";

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Text>Home</Text>
            <Stack.Screen>
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: "",
            }}
            </Stack.Screen>
        </SafeAreaView>
    );
}
export default Home;