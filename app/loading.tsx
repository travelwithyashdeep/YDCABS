export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#FAFAFA]">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-[#221F2B]"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-[#D51745] animate-spin"></div>
      </div>
    </div>
  );
}
