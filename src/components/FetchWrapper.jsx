import Loader from "./Loader/Loader";

export default function FetchWrapper({
  isLoading,
  isError,
  error,
  data,
  children,
  filter,
}) {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="text-center text-2xl text-primaryColor mt-28">
        {error?.message || "An error occurred while fetching data."}
      </div>
    );
  }

  const isEmpty =
    !Array.isArray(data) ||
    data.length === 0 ||
    (filter && Array.isArray(filter) && filter.length === 0);

  if (isEmpty) {
    return (
      <div className="text-center text-2xl text-primaryColor mt-28">
        No Data Found
      </div>
    );
  }

  return children;
}
