import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FetchProfile } from "../../../api/researcher/fetchProfile";

const useFetchProfile = () => {
  const { mutate: fetchProfile, isPending: isPendingFetch } = useMutation({
    mutationFn: (setResearcher) => {
      FetchProfile().then((res) => setResearcher(res.data.researcher));
    },
    onSuccess: () => {
      console.log("تم جلب البيانات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("لم يتم جلب البيانات");
    },
  });
  return { fetchProfile,  isPendingFetch };
};
export default useFetchProfile;
