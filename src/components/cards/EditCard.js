import React from "react";
import { useParams } from "react-router-dom";
import CardForm from "./CardForm";

const EditCard = () => {
  const params = useParams();
  return <CardForm id={params.id} />;
};

export default EditCard;
