import '../tailwind.css'

export default function Footer() {
  return (
    <div class="bg-white pt-12 pl-8 pr-8 pb-8">
      <div class="">
        <div class="flex items-center justify-center">
          <div className="pr-10">
            <button
              class="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              class="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-facebook-square"></i>
            </button>
            <button
              class="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-dribbble"></i>
            </button>
            <button
              class="bg-amber-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
          <div class="text-sm text-amber-500 font-bold">
            Copyright © <span>YUMMee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
