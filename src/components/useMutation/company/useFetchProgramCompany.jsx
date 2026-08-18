import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import fetchProgramCompany from "../../../api/copmany/fetchProgramCompany";

const useFetchProgramCompany = (activePage) => {
  const { mutate: fetchProgram, isPending } = useMutation({
    mutationFn: (setData) =>
      fetchProgramCompany(activePage).then((res) => setData(res.data)),
    onSuccess: () => {
      console.log("تم جلب البرامج بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("حدث خطأ ما ,أعد المحاولة");
    },
  });
  return { fetchProgram, isPending };
};
export default useFetchProgramCompany;
