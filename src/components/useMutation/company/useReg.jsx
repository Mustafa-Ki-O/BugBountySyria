import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import PostCompany from "../../../api/copmany/postCompany";
import { useNavigate } from "react-router-dom";

const useReg = () => {
  const navigate = useNavigate();
  const { mutate: register, isPending: isPending } = useMutation({
    mutationFn: (formData) => PostCompany(formData),
    onSuccess: () => {
      toast.success("تم انشاء الحساب بنجاح");
      navigate("/login");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });
  return { register, isPending };
};
export default useReg;
