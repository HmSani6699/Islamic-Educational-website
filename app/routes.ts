import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("./Pages/Home/Home.jsx"),
   

    route("admin","./Dashboard/Admin/Admin.jsx", [
        index("./Dashboard/Admin/AdminDashboard.jsx"),
         route("admission", "./Dashboard/Admin/AdmissionList/AdmissionList.jsx")
    ])
] satisfies RouteConfig;
