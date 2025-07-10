export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      <span className="ml-4 text-xl text-gray-700">Loading...</span>
    </div>
  );
}
