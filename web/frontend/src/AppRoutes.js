import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { UserList } from "./components/UserList";
import { Restaurant } from "./components/Restaurant";

const AppRoutes = [
  {
    index: true,
    element: <Login />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/restaurant',
    element: <Restaurant />
  },
  {
    path: '/userlist',
    element: <UserList />
  }
  
];

export default AppRoutes;
