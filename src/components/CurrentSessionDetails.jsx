function getTime(n) {
  //input n = "1/8/2024, 7:00:00 PM" and output must be "7:00 PM"
    const date = new Date(n);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

export default function Component(props) {
  return (
    <div className="align-items-center min-h-screen bg-[#fff] p-4 sm:p-8 ">
      <div className="absolute top-4 left-4">
        <img src="/images/2gethr_logo.png" alt="" className="w-[14em]" />
      </div>
      <div className="mt-7  text-black w-full flex justify-center">
        <span className="text-5xl font-bold text-[#000000] underline">Meeting Details</span>
      </div>
      <div className=" mt-10 max-w-2xl mx-auto bg-[#fadf1a] rounded-3xl p-4 sm:p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-5xl font-bold text-black">Title: {props?.data?.booking?.event?.title}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl">
            <h2 className="text-2xl font-semibold text-black mb-2">From:</h2>
            <p className="text-5xl font-bold text-black">{getTime(props?.data?.formattedFromTime)}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl">
            <h2 className="text-2xl font-semibold text-black mb-2">To:</h2>
            <p className="text-5xl font-bold text-black">{getTime(props?.data?.formattedToTime)}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="mb-2">
            <h3 className="text-3xl font-semibold text-black">Creator:</h3>
            <p className="text-2xl text-black">{props?.data?.booking?.event?.creator}</p>
          </div>
          <div className="mb-2">
            <h3 className="text-3xl font-semibold text-black">From:</h3>
            <p className="text-2xl text-black">{props?.data?.formattedFromTime}</p>
          </div>
          <div className="mb-2">
            <h3 className="text-3xl font-semibold text-black">To:</h3>
            <p className="text-2xl text-black">{props?.data?.formattedToTime}</p>
          </div>
          <div className="mb-2">
            <h3 className="text-3xl font-semibold text-black">Description:</h3>
            <p className="text-2xl text-black">
              {props?.data?.booking?.event?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

