import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("./Pages/Home/Home.jsx"),

  // =====> Admin routes <======//
  route("admin", "./Dashboard/Admin/Admin.jsx", [
    index("./Dashboard/Admin/AdminDashboard.jsx"),
    route("admission", "./Dashboard/Admin/Admission/Amission.jsx"),
    route("admission_form", "./Component/AdmissionForm/AdmissionForm.jsx"),
    route("teacher", "./dashboard/admin/teacher/Teacher.jsx"),
    route("teacher_add_class", "./dashboard/admin/teacher/TeacherAddClass/TeacherAddClass.jsx"),
  ]),

    // =====> Teacher routes  <======//
    route("teacher", "./Dashboard/Teacher/TeacherLayout.jsx", [
    index("./Dashboard/Teacher/TeacherDashboard.jsx"),
    route("student_attendance","./Component/StudentAttendance/StudentAttenddance.jsx"),
  ]),
  
] satisfies RouteConfig;
