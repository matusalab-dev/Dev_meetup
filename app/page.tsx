import Header from "./components/Header";
import { NAV_INFO_HOME } from "./constants/navbar";

export default function Home() {
  return (
    <>
      <Header
        headerNavBar={NAV_INFO_HOME}
        headerNavBarMobile={NAV_INFO_HOME}
        navBarRoute={0}
        logoLink="/"
      />
    </>
  );
}
