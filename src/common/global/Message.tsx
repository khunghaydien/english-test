type Props = {
  type: string;
  message: string;
};
const Message = ({ type, message }: Props) => {
  return (
    <>
      <div className="message">
        <div>{type}</div>
        <div>{message}</div>
      </div>
    </>
  );
};
export default Message;
