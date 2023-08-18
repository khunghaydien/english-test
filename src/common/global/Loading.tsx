type Props = {
  loading: boolean;
};
const Loading = ({ loading }: Props) => {
  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading-item-1 loading-item"></div>
          <div className="loading-item-2 loading-item"></div>
          <div className="loading-item-3 loading-item"></div>
        </div>
      )}
    </>
  );
};
export default Loading;
