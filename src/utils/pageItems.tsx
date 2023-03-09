import About from "../pages/About";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Store from "../pages/Store";

type RouterItem = { title: string; path: string; element: React.ReactNode }[];

export const routerItem: RouterItem = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },
  {
    title: "Store",
    path: "/store",
    element: <Store />,
  },
  {
    title: "About",
    path: "/about",
    element: <About />,
  },
  {
    title: "My Page",
    path: "/mypage",
    element: <MyPage />,
  },
];
