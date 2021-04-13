import LoginReg from "@/views/LoginReg/LoginReg.vue";
import Login from "@/views/LoginReg/childComponents/Login.vue";
import Register from "@/views/LoginReg/childComponents/Register.vue";

const loginReg = {
  path: "/LoginReg",
  component: LoginReg,
  children: [
    {
      path: "",
      redirect: "/LoginReg/login",
    },
    {
      path: "login",
      component: Login,
    },
    {
      path: "register",
      component: Register,
    },
  ],
};
export { loginReg };
