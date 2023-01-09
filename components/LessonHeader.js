import Link from "next/link";

const LessonHeader = ({ children }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="/">⬅️</Link>
        <h2 className="text-xl font-semibold">{children}</h2>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default LessonHeader;
