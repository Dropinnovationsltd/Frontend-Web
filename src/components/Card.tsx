import PropTypes from "prop-types";

type CardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};

function Card({ title, value, icon }: CardProps) {
  return (
    <div className="bg-[#ffffff] shadow-md p-[16px] rounded-[12px] flex items-center border-[1px] border-[ #808080] space-x-4">
      {icon}
      <div>
        <p className="text-[]">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node.isRequired,
};

export default Card;