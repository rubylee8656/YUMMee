import '../tailwind.css'

export default function Footer() {
  return (
    <div className="bg-white pt-12 pl-8 pr-8 pb-8">
      <div className="">
        <div className="flex items-center justify-center">
          <div className="pr-10">
            <button
              className="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-facebook-square"></i>
            </button>
            <button
              className="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
            <button
              className="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
          <div className="text-sm text-amber-500 font-bold">
            Copyright © <span>YUMMee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
