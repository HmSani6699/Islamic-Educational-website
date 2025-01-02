import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("./Pages/Home/Home.jsx"),
    //======>  Admin layout  <=====//
    ...prefix("admin", [
        // index("./Login/AdminLogin/AdminLogin.jsx")
        index("./Dashboard/Admin/Admin.jsx"),
      
    ])
] satisfies RouteConfig;
