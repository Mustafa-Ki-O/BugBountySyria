import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import PostRateReport from "../../../api/copmany/postRateReport";


const useRateReport = (uuid) => {
    const { mutate : rateReport , isPending } = useMutation({
        mutationFn:(formData) => PostRateReport(uuid,formData),
        onSuccess:() => {
            toast.success('تم رفع التقييم بنجاح')
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error('اعد المحاولة ')
            
        }
    })
  return {rateReport,isPending}
}
export default useRateReport