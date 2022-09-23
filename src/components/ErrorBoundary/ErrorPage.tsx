import "./ErrorPage.scss";

interface ErrorPageProps {
  error: Error;
}

export const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div className="error-page">
      <img
        width="100px"
        alt=""
        src="https://cdn-icons-png.flaticon.com/512/1791/1791330.png"
      />
      <h1>Oops! {error.message}</h1>
    </div>
  );
};
