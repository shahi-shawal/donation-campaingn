import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError();
    return (
        <div className="h-screen  py-20 text-center">
             <h1 className="text-2xl font-bold text-red-600">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-4xl">
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
    );
};

export default ErrorPage;