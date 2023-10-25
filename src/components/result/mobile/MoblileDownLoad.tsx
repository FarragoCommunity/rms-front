import { Programme } from "@/gql/graphql";
import { ExcelClassicIcon, ExcelDarkIcon } from "@/icons/excel";
import Link from "next/link";

interface Props {
    programs: Programme[]
    count: number
}
export default function MobileDownLoad() {
    return (
        <div className="h-44 bigphone:h-72 mx-auto min-h-14 min-w-6/8 w-[90%] flex bg-gray-100 rounded-2xl flex-col overflow-hidden">
            <div className="h-1/4 w-full flex items-end justify-center">
                <h1 className="text-2xl bigphone:text-4xl font-semibold">
                Overall Status
                </h1>
            </div>
            <div className="h-3/4 w-full flex justify-between px-2 gap-2 pt-3">
                <Link className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-around leading-tight" href="https://docs.google.com/spreadsheets/d/1yzjfSJvtiSIPr1ozSLCLMhIgPPhY648bQ_LgMoGI9j4/edit?usp=sharing" passHref={true}>
                    <ExcelClassicIcon className="w-8 h-8 fill-secondary" />
                    <div>
                        <h1 className="text-tn font-bold text-center">CLASS WISERESULT</h1>
                        <h1 className="text-tn text-center">(SMS)</h1>
                    </div>
                </Link>
                <Link className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-around leading-tight" href="https://docs.google.com/spreadsheets/d/1mNESBjbU3jeLlB2fXz7YlXY6CaGCh2zruDWmyiDSnns/edit?usp=sharing" passHref={true}>
                    <ExcelDarkIcon className="w-8 h-8 fill-secondary" />
                    <div>
                        <h1 className="text-tn font-bold text-center">DEPT WISERESULT</h1>
                        <h1 className="text-tn text-center">(SMS)</h1>
                    </div>
                </Link>
                <Link className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-around leading-tight" href="https://docs.google.com/spreadsheets/d/1yzjfSJvtiSIPr1ozSLCLMhIgPPhY648bQ_LgMoGI9j4/edit?usp=sharing" passHref={true}>
                    <ExcelClassicIcon className="w-8 h-8 fill-secondary" />
                    <div>
                        <h1 className="text-tn font-bold text-center">CLASS WISERESULT</h1>
                        <h1 className="text-tn text-center">(CHS)</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
