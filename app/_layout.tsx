import ProviderWrapper from "@/components/layout/provider-wrapper";
import { Stack, usePathname } from "expo-router";

export default function RootLayout() {
  const path = usePathname()
  const excludeHeaderList = ['/notifications']
  return (
    <ProviderWrapper>
      <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="(tabs)"/>
  </Stack>
    </ProviderWrapper>
  );
}
