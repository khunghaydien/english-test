import { endLoading, startLoading } from "@/store/reducer/common/Api";
import Cookies from "js-cookie";
export async function callApi(
  req: any,
  dispatch: any,
) {
  try {
    dispatch(startLoading());
    const accessToken = Cookies.get('accessToken');
    const options = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      },
      body: req.payload ? JSON.stringify(req.payload) : null,
    }
    const response = await fetch(req.url, options);
    if (!response.ok) {
      dispatch(endLoading());
    }
    const data = await response.json();
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
}
