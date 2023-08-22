import Table, { Instruction as InstructionProps } from "@/common/table";

type Props = {
  type: string;
  instructions?: InstructionProps[];
};
const yesNoNotGivenInstruction = [
  {
    value: "Yes",
    instruction: "if the statement agrees with the views of the writer",
  },
  {
    value: "No",
    instruction: "if the statement contradicts the views of the writer",
  },
  {
    value: "Not Given",
    instruction: "if it is impossible to say what the writer thinks about this",
  },
];
const Instruction = ({ type, instructions }: Props) => {
  return (
    <>
      {type === "YES_NO_NOTGIVEN" && <Table rows={yesNoNotGivenInstruction} />}
      {instructions && <Table rows={instructions} />}
    </>
  );
};

export default Instruction;
