import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <p>Could not find requested resource</p>
      <p>
        Go to the &gt;<Link href="/library"> library page</Link>
      </p>
    </div>
  );
};

export default NotFound;
