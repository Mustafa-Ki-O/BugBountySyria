import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SignInCompany } from "../../../api/copmany/sighnInCompany";

const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (formData) => SignInCompany(formData),
    onSuccess: () => {
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/BugBountySyria/home");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("الايميل او كلمة السر خاطئة");
    },
  });
  return { login, isPending };
};
export default useLogin;
