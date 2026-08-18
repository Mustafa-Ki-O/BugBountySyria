import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PostProfile } from "../../../api/researcher/postProfile";

const useUpdateProfile = (setCompany) => {
  const { mutate: update, isPending } = useMutation({
    mutationFn: (formData) => PostProfile(formData),
    onSuccess: (data) => {
      setCompany(data.data.researcher);
      toast.success("تم تحديث العلومات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("اعد المحاولة ");
    },
  });
  return { update, isPending };
};
export default useUpdateProfile;
