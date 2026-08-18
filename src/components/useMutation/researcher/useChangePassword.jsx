import { useMutation } from "@tanstack/react-query";
import { PostPassword } from "../../../api/researcher/postPassword";
import toast from "react-hot-toast";

const useChangepassword = () => {
  const { mutate: change, isPending } = useMutation({
    mutationFn: (formData) => PostPassword(formData),
    onSuccess: () => {
      console.log("تم تحديث كلمة المرور بنجاح");
      toast.success("تم تحديث كلمة المرور بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("هناك خطأ في البيانات التي ادخلتها اعد المحاولة");
    },
  });
  return { change, isPending };
};
export default useChangepassword;
