/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SWDbyt7scap
 */
export default function Component() {
  return (
    <div className="bg-[#1a1a1a] text-white p-8 h-screen">
      <div className="flex justify-end mb-6">
        <span className="text-sm">Device License: NLV8HD0CKKREEV6T</span>
      </div>
      <div className="bg-[#333] p-4 rounded-md shadow-md max-w-sm mx-auto mb-8">
        <div className="mb-4">
          <div className="text-sm mb-1">From:</div>
          <div className="text-2xl font-bold">08:00 AM</div>
        </div>
        <div>
          <div className="text-sm mb-1">To:</div>
          <div className="text-2xl font-bold">09:00 AM</div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="w-24 text-sm">Title :</span>
          <span>This is the Title Field</span>
        </div>
        <div className="border-b border-gray-600" />
        <div className="flex items-center">
          <span className="w-24 text-sm">Creator :</span>
          <span>Jhon Doe</span>
        </div>
        <div className="border-b border-gray-600" />
        <div className="flex items-center">
          <span className="w-24 text-sm">From :</span>
          <span>01/01/2023 08:00 PM</span>
        </div>
        <div className="border-b border-gray-600" />
        <div className="flex items-center">
          <span className="w-24 text-sm">To :</span>
          <span>01/01/2023 09:00 PM</span>
        </div>
        <div className="border-b border-gray-600" />
        <div className="flex items-start">
          <span className="w-24 text-sm">Description&nbsp;:&nbsp;</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

