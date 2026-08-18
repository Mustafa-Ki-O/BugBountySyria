import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchReports } from "../../../api/copmany/fetchReports";

const useFetchReports = (activePage) => {
  const { mutate: fetchAllReports, isPending } = useMutation({
    mutationFn: (setDataCompany) =>
      fetchReports(activePage).then((res) => setDataCompany(res.data)),
    onSuccess: () => {
      console.log("تم جلب البيانات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("حدث خطأ ما ,أعد المحاولة");
    },
  });
  return { fetchAllReports, isPending };
};
export default useFetchReports;
