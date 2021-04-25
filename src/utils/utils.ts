import { formState } from '@/type'
import { ref, toRef, watch } from 'vue-demi'
import { useRouter } from 'vue-router'
const router = useRouter()
const routerPush = (routerName: string) => router.push({ name: routerName })

function checkErr(value: any, target: any, prop: string, setValue: string) {
  if (value) {
    target[prop] = setValue
  }
  return !!value
}
const linkModel = (formState: formState, $v: any) => {
  formState.state = toRef($v, '$model')
}
const syncErrMsg = (formState: formState, $v: any, root: any) => {
  const hasNull = false
  watch(
    () => $v.$errors,
    () => {
      if ($v.$errors.length === 0) {
        formState.errMessage = ''
        return
      }
      //清除旧的错误提示
      clearErrMsg()
      //更新msg
      formState.errMessage = $v.$errors[0].$message
    }
  )
  function clearErrMsg() {
    Object.values(root).forEach((state: any) => (state.errMessage = ''))
  }
}
export { checkErr, linkModel, syncErrMsg, routerPush }
