import Loading from "./Loading";
import Message from "./Message";
import "./index.scss";
type Props = {
  loading: boolean;
  type: string;
  message: string;
};
const Global = ({ loading, type, message }: Props) => {
  return (
    <>
      {loading && (
        <div className="global">
          <Loading loading={loading} />
          <Message type={type} message={message} />
        </div>
      )}
    </>
  );
};

export default Global;
