import { useMutation } from "@tanstack/react-query";
import { LogOut } from "../../../api/researcher/logOut";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogout = () => {
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: () => navigate("/login"),
    onSuccess: () => {
      // navigate("/login");
      toast.success("تم تسجيل الخروج بنجاح");
      console.log("تم تسجيل الخروج بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
  return { logout, isPending };
};
export default useLogout;
