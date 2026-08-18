import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PostCode } from "../../../api/researcher/postCheckCode";
import { useNavigate } from "react-router-dom";

const useCheckCode = (token) => {
    const navigate = useNavigate();
    const {mutate:check ,isPending: isPending} = useMutation({
        mutationFn:(code) => PostCode(code,token),
        onSuccess:() => {
            toast.success("تم تأكيد الحساب")   
            navigate("/BugBountySyria/login");   
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message);
        }
    })
  return {check,isPending}
}
export default useCheckCode