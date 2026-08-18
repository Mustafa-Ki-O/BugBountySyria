import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProduct } from "../../../api/copmany/deleteProduct";


const useDeleteProduct = (fetchData,setData) => {
    const { mutate : deletePro , isPending } = useMutation({
        mutationFn:(formData) => deleteProduct(formData),
        onSuccess:() => {
            fetchData(setData);
            toast.success('تم حذف البرنامج بنجاح')
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error('اعد المحاولة ')
            
        }
    })
  return {deletePro,isPending}
}
export default useDeleteProduct