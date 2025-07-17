import { Link } from "react-router-dom";
import fire from "../../assets/icons/fire.svg";
import star from "../../assets/icons/star.svg";
import russia from "../../assets/img/russia.png";
export default function Card({
  id,
  img,
  title,
  sale,
  rus,
  rate,
  ps4,
  ps5,
  price,
  originPrice,
}) {
  return (
    <Link to={`/games/${id}`} className="w-48 max-sm:w-25">
      <div
        className={`bg-[url('${img}')] bg-gray-300 flex flex-col p-2.5 rounded-2xl w-48 h-48 max-sm:w-25 max-sm:h-25 max-sm:p-1.5`}
      >
        {sale && (
          <div
            className="bg-red-600 flex items-center self-end shadow-red-600 
				shadow-[0px_0px_20px_0px_rgba(255,0,0,0.5)] gap-1 px-3 py-2 rounded-xl max-sm:p-1 max-sm:rounded-md"
          >
            <img src={fire} alt="fire" />
            <span className="font-bold max-sm:text-[10px]">SALE</span>
          </div>
        )}
        {rus && (
          <div className="flex items-center bg-white self-start mt-auto gap-1 px-1.5 py-1 rounded-lg max-sm:p-1 max-sm:rounded-md">
            <img src={russia} alt="russian flag" className="w-6 max-sm:w-4" />
            <span className="font-bold text-primary max-sm:text-[10px]">
              Рус. озв
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 max-sm:gap-1 mt-2 max-sm:mt-1">
        <h3 className="text-primary font-bold text-xl max-sm:text-sm">
          {title}
        </h3>
        <div className="flex items-center gap-2 max-sm:gap-1">
          <img src={star} alt="star" className="max-sm:w-3" />
          <span className="text-primary font-bold text-sm max-sm:text-[10px]">
            {rate}
          </span>
          {ps4 && (
            <span className="text-primary font-medium max-sm:text-[10px]">
              PS4
            </span>
          )}
          {ps5 && (
            <span className="text-primary font-medium max-sm:text-[10px]">
              PS5
            </span>
          )}
        </div>
        {sale ? (
          <div className="flex items-center justify-between gap-1">
            <p className="text-primary text-xl font-bold max-sm:text-sm">
              от {price}Р
            </p>
            <span className="text-primary text-xs line-through max-sm:text-[9px]">
              {originPrice}
            </span>
            <span className="max-sm:hidden bg-red-600 text-sm font-bold rounded-lg p-1">
              {sale}
            </span>
          </div>
        ) : (
          <p className="text-primary text-xl font-bold max-sm:text-sm">
            от {originPrice}Р
          </p>
        )}
      </div>
    </Link>
  );
}
