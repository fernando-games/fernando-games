import MainLayout from "../components/layout/MainLayout";
import HomeProvider from "../components/home/HomeProvider";

export default function Home() {
  return (
    <HomeProvider>
      <MainLayout />
    </HomeProvider>
  );
}