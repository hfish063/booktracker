import { Dispatch, SetStateAction } from "react";

export default function ToggleButton({ handleClick }: ToggleButtonParams) {
  return (
    <label className="inline-flex items-center cursor-pointer w-14 mt-2 mb-2">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={() => handleClick((state) => !state)}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
    </label>
  );
}

type ToggleButtonParams = {
  handleClick: Dispatch<SetStateAction<boolean>>;
};
