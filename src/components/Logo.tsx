type Props = {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <div className={className}>
      <div className="flex h-full items-center justify-center gap-1.5">
        {/* <span className="text-2xl font-semibold text-slate-900">
          <span className="text-blue-600">Y</span>O
        </span>
        <svg
          className="h-[22px] w-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -32 576 576"
        >
          <circle cx="288" cy="256" r="256" fill="white" />
          <path
            fill="#2563eb"
            d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
          />
        </svg> */}

        <svg
          className="h-full w-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -32 576 576"
        >
          <circle cx="288" cy="256" r="256" fill="white" />
          <path
            fill="#2563eb"
            d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
          />
        </svg>
        <span className="text-lg text-slate-900 font-bold">YO</span>
      </div>
    </div>
  )
}
