import { Programme } from "@/gql/graphql";
import { ExcelClassicIcon, ExcelDarkIcon } from "@/icons/excel";
import Link from "next/link";

interface Props {
  programs: Programme[]
  count : number
}
export default function Download() {
  return (
    <div className="h-[16rem] w-[50%] rounded-3xl bg-[#F7F7F7] px-5">
                {/* title */}
                <div className="w-full h-[20%] flex items-center justify-center">
                  <h1 className="text-4xl font-bold leading-none mt-2">Overall Status</h1>
                </div>
                {/* small cards */}
                <div className="h-[80%] w-full flex gap-5 items-center justify-center">
                  {/* small card1 */}
                  {/* <div className="h-4/6 w-1/3 cursor-pointer 2xl:w-1/4 bg-accent rounded-2xl flex flex-col items-center justify-around leading-tight pt-5 transition-all duration-500  hover:scale-105"> */}
                  <Link className="h-4/6 w-1/3 cursor-pointer 2xl:w-1/4 bg-accent rounded-2xl flex flex-col items-center justify-around leading-tight pt-5 transition-all duration-500  hover:scale-105" href="https://docs.google.com/spreadsheets/d/1yzjfSJvtiSIPr1ozSLCLMhIgPPhY648bQ_LgMoGI9j4/edit?usp=sharing" passHref={true}>
                    <ExcelClassicIcon className="w-10 h-10 fill-secondary"/>
                    <h1 className="text-sm  2xl:text-base font-bold text-center">CLASS VISE RESULT</h1>
                    <h1 className="text-xs text-center">(SMS)</h1>
                  </Link>
                  {/* </div> */}
                  {/* small card2 */}
                  <Link className="h-4/6 w-1/3 cursor-pointer 2xl:w-1/4 bg-accent rounded-2xl flex flex-col items-center justify-around leading-tight pt-5 transition-all duration-500  hover:scale-105 " href="https://docs.google.com/spreadsheets/d/1mNESBjbU3jeLlB2fXz7YlXY6CaGCh2zruDWmyiDSnns/edit?usp=sharing" passHref={true}>
                  <ExcelDarkIcon className="w-10 h-10 fill-secondary"/>
                    <h1 className="text-sm  2xl:text-base font-bold text-center">DEPT VISE RESULT</h1>
                    <h1 className="text-xs text-center">(SMS)</h1>
                  </Link>
                  {/* small card3 */}
                  <Link className="h-4/6 w-1/3 cursor-pointer 2xl:w-1/4 bg-accent rounded-2xl flex flex-col items-center justify-around leading-tight pt-5 transition-all duration-500  hover:scale-105 " href="https://docs.google.com/spreadsheets/d/1yzjfSJvtiSIPr1ozSLCLMhIgPPhY648bQ_LgMoGI9j4/edit?usp=sharing" passHref={true}>
                    <ExcelClassicIcon className="w-10 h-10 fill-secondary"/>
                    <h1 className="text-sm  2xl:text-base font-bold text-center">CLASS VISE RESULT</h1>
                    <h1 className="text-xs text-center">(CHS)</h1>
                  </Link>
                </div>
              </div>
  );
}
