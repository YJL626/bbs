const Register = () => import("@/views/LoginReg/childComponents/Register.vue");
const Login = () => import("@/views/LoginReg/childComponents/login/Login.vue");
const LoginReg = () => import("@/views/LoginReg/LoginReg.vue");
const loginReg = {
  name: "loginReg",
  path: "/LoginReg",
  component: LoginReg,
  children: [
    {
      path: "",
      redirect: "/LoginReg/login",
      name: "loginReg",
    },
    {
      name: "login",
      path: "login",
      component: Login,
    },
    {
      name: "register",
      path: "register",
      component: Register,
    },
  ],
};
export { loginReg };
