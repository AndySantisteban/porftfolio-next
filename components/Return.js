import Link from "next/link";

const Return = () => {
  return (
    <>
      <Link href="/proyectos">
        <a>
          <span title={"Return"}>
            <img
              src="https://img.icons8.com/ios/30/000000/circled-left-2.png"
              alt={"..."}
              className={"return"}
            />
          </span>
        </a>
      </Link>
    </>
  );
};
export default Return;
