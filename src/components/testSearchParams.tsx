"use client";
import testData from "../app/test/testData.json";
export default function TestSearchParams({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);
  return (
    <>
      {testData?.map((item) => (
        <div key={item.id} className="flex gap-2 mb-4">
          <p>{item.name}</p>
          <p>{item.odds}</p>
          <p>{item.sport}</p>
        </div>
      ))}
    </>
  );
}
