import { useParams } from "react-router-dom";

const ViewDetails = ({ data }) => {
  const { id } = useParams();
  return (
    <div>
      <h1>view details</h1>
    </div>
  );
};

export default ViewDetails;
