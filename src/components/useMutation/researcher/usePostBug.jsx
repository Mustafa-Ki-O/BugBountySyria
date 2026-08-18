import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PostBug } from "../../../api/researcher/postBug";

const usePostBug = () => {
    const {mutate:postBug ,isPending: isPendingPost} = useMutation({
        mutationFn:(formData) => PostBug(formData),
        onSuccess:() => {
            toast.success("تم رفع التقرير بنجاح")      
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message);
        }
    })
  return {postBug,isPendingPost}
}
export default usePostBug