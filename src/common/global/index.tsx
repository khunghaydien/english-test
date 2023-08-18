import Loading from "./Loading";
import "./index.scss";
type Props = {
  loading: boolean;
};
const Global = ({ loading }: Props) => {
  return (
    <>
      {loading && (
        <div className="global">
          <Loading loading={loading} />
        </div>
      )}
    </>
  );
};

export default Global;
