const MessengerButton = () => {
  return (
    <div className="flex gap-3 mt-4">
      <a
        href="https://www.messenger.com/t/106901505595286"
        target="_blank"
        className="flex-1 flex items-center gap-2 w-fit justify-center px-4 py-3 rounded-xl bg-[#1877F2] hover:brightness-110 transition font-semibold shadow-lg text-white"
      >
        <svg
          className="size-6"
          viewBox="0 0 48 48"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>Messenger-color</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Color-" transform="translate(-301.000000, -860.000000)" fill="currentColor">
                <path
                  d="M325,860 C311.745143,860 301,869.949185 301,882.222222 C301,889.215556 304.489988,895.453481 309.944099,899.526963 L309.944099,908 L318.115876,903.515111 C320.296745,904.118667 322.607155,904.444444 325,904.444444 C338.254857,904.444444 349,894.495259 349,882.222222 C349,869.949185 338.254857,860 325,860 Z M327.385093,889.925926 L321.273292,883.407407 L309.347826,889.925926 L322.465839,876 L328.726708,882.518519 L340.503106,876 L327.385093,889.925926 Z"
                  id="Messenger"
                />
              </g>
            </g>
          </g>
        </svg>
        Send us a message
      </a>
      {/* <a
              href={`https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(`Hello! I would like to inquire about this item: ${window.location.href}`)}`}
              target="_blank"
              className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl bg-[#25D366] hover:brightness-110 transition font-semibold shadow-lg text-white"
            >
              WhatsApp
            </a>
            <a
              href={`viber://chat?number=YOUR_NUMBER&text=${encodeURIComponent(`Hello! I would like to inquire about this item: ${window.location.href}`)}`}
              className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl bg-[#7360F2] hover:brightness-110 transition font-semibold shadow-lg text-white"
            >
              Viber
            </a> */}
    </div>
  );
};

export { MessengerButton };
