import { endLoading, startLoading } from "@/store/reducer/common/Api";

export async function callApi(req: any, dispatch: any) {
  try {
    dispatch(startLoading());
    const response = await fetch(req.url);
    if (!response.ok) {
    }
    const data = await response.json();
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
}
