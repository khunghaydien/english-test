import Footer from "./Footer";
import Header from "./Header";
import "./index.scss";
import imgae from "./../../../assets/ielts-volume.jpg";
type Props = {
  page: React.ReactNode;
};
const Test = ({ page }: Props) => {
  const onClickAction = (value: string) => {
    console.log(value);
  };
  return (
    <div className="test">
      <Header
        name={"Master IELTS General Training Volume 1"}
        imageUrl={imgae}
        imageAlt={"test image"}
        vote={{
          star: 3,
          quantity: 2000,
        }}
        viewed={2165253}
        published={"07 Nov 2018"}
        tested={923452}
        onClickAction={onClickAction}
      />
      <div className="test-body">{page}</div>
      <Footer onActionClick={onClickAction} />
    </div>
  );
};
export default Test;
