import { Ref } from "vue-demi";

type emit = (event: string, ...args: unknown[]) => void;
type formState = {
  state: string; //接受$v model属性的映射
  errMessage: string;
};
export { emit, formState };
