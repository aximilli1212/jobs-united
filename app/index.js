import {View, Text, SafeAreaView, ScrollView} from 'react-native';
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
                    headerTitle: "Jobs United",
            }}
            </Stack.Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Home;