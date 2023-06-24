import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Computer Market</title>
    </Helmet>
  );
};

export default PageTitle;
