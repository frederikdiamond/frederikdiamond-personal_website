import { Link } from "react-router-dom";

const VisitBtn = ({ to }) => {
  return (
    <Link
      to={to}
      className="px-[25px] py-[10px] mt-[15px] font-semibold text-white bg-blue-500 rounded-[10px] hover:drop-shadow-[0_5px_15px_rgba(52,123,240,.75)] hover:translate-y-[-5px] transition-all ease-in-out duration-200"
    >
      VISIT
    </Link>
  );
};

export default VisitBtn;
