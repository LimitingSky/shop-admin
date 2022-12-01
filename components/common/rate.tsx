import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

interface RateSectionProps {
  rate: number;
  maxRate?: number;
  activeColor?: string;
  disableColor?: string;
}

export const RateSection: FC<RateSectionProps> = (props) => {
  return (
    <div className="flex flex-row justify-start items-center mr-4">
      {Array.from({ length: props.maxRate! }).map((_, index) => {
        const rate = index + 1;
        return (
          <AiFillStar
            className={`${
              rate <= props.rate ? props.activeColor : props.disableColor
            } text-3xl`}
            key={`rate-${rate}`}
          />
        );
      })}
    </div>
  );
};

RateSection.defaultProps = {
  activeColor: "text-yellow-300",
  disableColor: "text-gray-400",
  maxRate: 5,
  rate: 3,
};
