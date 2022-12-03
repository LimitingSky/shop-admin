import { useRouter } from "next/router";
import { Select } from "../../../components/common/forms/select";
import { RateSection } from "../../../components/common/rate";

const SIZES = [
    {
        value:"SM",
        label: 'Small'
    },
    {
        value:"MD",
        label: 'Medium'
    },
]


export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="relative flex h-screen w-screen flex-row items-start justify-center py-12 px-10 text-black bg-gray-50">
      <div className="container flex h-3/4 justify-between">
        <section className="flex h-full w-1/2 flex-col">
          <div className="mb-8 h-3/4 w-full rounded-md bg-slate-300"></div>
          <div className="h-1/4 w-full rounded-md bg-slate-300"></div>
        </section>
        <section className="flex h-full w-1/2 flex-col px-8 pt-14">
          <h3 className="text-6xl font-bold text-gray-900">Name of Product</h3>
          <span className="text-sm text-gray-700">subtitle</span>
          <div className="mt-6 flex flex-row items-center justify-start">
            <RateSection rate={2} />
            <p className="text-base text-gray-800">Rate records</p>
          </div>
          <div className="mt-12 flex flex-row items-center">
            <div className="relative flex items-center font-bold text-indigo-600 mr-12">
              <span className="text-center text-4xl">$</span>
              <span className="text-5xl">120</span>
            </div>
            <text className="text-base text-gray-800 font-cabin">
                Style #: 121212
            </text>
          </div>
          <div className="mt-16">
            <Select className="mr-4" options={SIZES} onChange={console.log} placeholder="Select your size"/>
            <Select className="mr-4" options={SIZES} onChange={console.log} placeholder="Select your size"/>
            <button className="px-8 py-4 rounded-full bg-purple-700 text-white">
                Add To cart
            </button>
          </div>
          <span className="mt-4 text-base text-gray-700">additional information</span>
        </section>
      </div>
    </div>
  );
}
