import imgae from "@/assets/ielts-volume.jpg";
import Table from "@/common/table";
const records = [
  {
    id: "1",
    name: "Master IELTS General Training Volume 1",
    imageUrl: imgae,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
  },
  {
    id: "2",
    name: "Master IELTS General Training Volume 2",
    imageUrl: imgae,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 222,
    },
    viewed: 324,
    published: "07 Nov 2018",
    tested: 2423,
  },
];
const columns = [
  {
    name: "Exam",
    key: "name",
    width: 220,
    shrink: true,
    grow: false,
  },
  {
    name: "Viewed",
    key: "viewed",
    width: 220,
    shrink: true,
    grow: false,
  },
];
const ExamManagement = () => {
  const onClickRow = (value: any) => {
    console.log(value);
  };
  return (
    <div className="exam-management">
      <div className="exam-management-search"></div>
      <div className="exam-management-record">
        <Table
          columns={columns}
          data={records}
          emptyMessage={"test"}
          onClickRow={onClickRow}
          isCheckbox
        />
      </div>
    </div>
  );
};
export default ExamManagement;
