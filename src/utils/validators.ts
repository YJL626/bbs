import { mAxios } from "@/network";
import {
  email as email1,
  required as required1,
  minLength as minLength1,
  maxLength as maxLength1,
  helpers,
} from "@vuelidate/validators";
import { ValidatorResponse } from "node_modules/@vuelidate/core/index.js";
const email = helpers.withMessage("请输入合法的邮箱地址", email1);
const required = helpers.withMessage("该字段不得为空", required1);
const minLength = (length: number) =>
  helpers.withMessage(`不得少于${length}位`, minLength1(length));
const maxLength = (length: number) =>
  helpers.withMessage(`不得多于${length}位`, maxLength1(length));
const wordStart = helpers.withMessage("必须以字母开头", (value) =>
  /^[a-z,A-Z].+/.test(value as string)
);
const hasWord = helpers.withMessage("必须含有字母", (value) =>
  /[a-z,A-Z]/.test(value as string)
);
const a: ValidatorResponse = {
  $valid: true,
};
const checkMailboxExist = helpers.withMessage("邮箱已存在", (async (
  email: string
) => {
  const result = await mAxios
    .get("/check/email", { params: { email } })
    .catch(() => "");
  return result ? true : false;
}) as any);
const checkUserNameExist = helpers.withMessage(
  "用户名已存在",
  // @ts-ignore
  async (name) => {
    const result = await mAxios
      .get("/check/name", { params: { name } })
      .catch(() => "");
    return result ? true : false;
  }
);

export {
  hasWord,
  wordStart,
  email,
  required,
  minLength,
  maxLength,
  checkMailboxExist,
  checkUserNameExist,
};
