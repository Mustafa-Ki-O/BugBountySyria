import { useMutation } from "@tanstack/react-query";
import { fetchHomeCompany } from "../../../api/copmany/fetchHomeCompany";
import toast from "react-hot-toast";

const useFetchHome = (activePage) => {
    const {mutate:fetch ,isPending: isPendingCom} = useMutation({
        mutationFn:(setData) => fetchHomeCompany(activePage).then(res => setData(res.data)),
        onSuccess:() => {
            console.log('تم جلب البيانات بنجاح')     
        },
        onError : () => {
            toast.error("حدث خطأ ما ,أعد المحاولة")
    }
    })
  return {fetch,isPendingCom}
}
export default useFetchHome