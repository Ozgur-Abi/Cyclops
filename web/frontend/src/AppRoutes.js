import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { UserList } from "./components/UserList";
import { OrderList } from "./components/OrderList";
import { EditCustomer} from "./components/EditCustomer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
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
    path: '/userlist',
    element: <UserList />
  },
  {
    path: '/orderlist',
    element: <OrderList />
  },
  {
    path: '/editcustomer',
    element: <EditCustomer />
  }

];

export default AppRoutes;
