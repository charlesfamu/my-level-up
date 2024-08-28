'use client'

const ProcessingState = ({ prompt = 'Loading...' }: {prompt?: string}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500 mb-4"></div>
      <p className="text-xs">{prompt}</p>
    </div>
  );
}

export default ProcessingState;