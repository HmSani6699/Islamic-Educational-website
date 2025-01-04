import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("./Pages/Home/Home.jsx"),
   

    route("admin","./Dashboard/Admin/Admin.jsx", [
        index("./Dashboard/Admin/AdminDashboard.jsx"),
         route("admission", "./Dashboard/Admin/Admission/Amission.jsx"),
         route("admission_form", "./Component/AdmissionForm/AdmissionForm.jsx"),
    ])
] satisfies RouteConfig;
