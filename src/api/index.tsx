import Cookies, { Cookie } from "universal-cookie";

type MockupError = {
  code: number;
  message: string | string[] | undefined;
  notToast?: boolean;
};

const CallAPI = async (
  isLogout: boolean,
  store: any | null = null
): Promise<any> => {
  const cookies = new Cookies();
  const token = cookies.get("JWT_TOKEN");

  const baseURL = "http://localhost:5173";

  const controller = new AbortController();
  const signal = controller.signal;

  if (isLogout) {
    controller.abort();
  }

  const headers: HeadersInit = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = "Bearer " + token;
  }

  const requestOptions: RequestInit = {
    method: "GET", // Change this as needed
    headers,
    signal,
  };

  try {
    const response = await fetch(baseURL, requestOptions);
    const responseData = await response.json();

    if (!response.ok) {
      const mockupError: MockupError = {
        code: response.status,
        message: responseData.errors || responseData.message,
      };

      if (
        typeof mockupError.message === "string" &&
        mockupError.message.includes("{")
      ) {
        mockupError.notToast = true;
      }

      if (store) {
        store.dispatch({ type: "SET_ERROR", payload: mockupError });
      }

      return Promise.reject(mockupError);
    }

    return responseData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default CallAPI;
