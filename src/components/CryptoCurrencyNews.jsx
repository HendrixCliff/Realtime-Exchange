import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FcReading } from "react-icons/fc";
import { FcFullBattery } from "react-icons/fc";

export default function CryptoCurrencyNews() {
  const { data8, error } = useSelector((state) => state.data);

  if (!data8 || !data8.Data) {
    return (
      <div className="font-bold text-[3rem] text-[#eba3ff] text-center mt-[3em]">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center mt-4">Error: {error}</div>;
  }

  return (
    <>
      {data8.Data.map((user, index) => (
        <NewsCard key={index} user={user} />
      ))}
    </>
  );
}

function NewsCard({ user }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="border-solid border-[#ff7f26] border-b-[.2em] max-md:mt-[1em] overflow-hidden px-[1em] py-[1em]">
      {/* Header: Image + Title */}
      <section className="flex gap-[1em] max-md:gap-[.5em] items-center">
        <img
          src={user.imageurl}
          className="w-[30%] object-fill h-[10em] max-md:w-[35%] max-md:h-[14em] mt-[.5em] ml-[3em] max-md:ml-[1em]
                   rounded-xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-[#3e99ff]
                   focus:outline-none focus:ring-2 focus:ring-[#3e99ff]/70 focus:ring-offset-2
                   transition-all duration-300 ease-in-out hover:scale-105 active:scale-105"
        />

        <h3 className="font-bold text-center max-md:text-left max-md:text-[1.15rem] text-[1.5em]">
          {user.title}
        </h3>
      </section>

      {/* Body: collapsible */}
      <div className="mt-[1em]">
        <p className={`text-left max-md:text-[.97rem] text-[1.15rem] transition-all duration-300 ${expanded ? '' : 'line-clamp-2'}`}>
          {user.body}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-[#3e99ff] hover:text-[#5543ff] text-sm font-semibold underline"
        >
          {expanded ? <FcFullBattery size={27}  /> : <FcReading size={27} /> }
        </button>
      </div>
    </section>
  );
}
