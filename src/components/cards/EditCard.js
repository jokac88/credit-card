import React from "react";
import { useParams } from "react-router-dom";
import CardForm from "./CardForm";

function EditCard() {
  const params = useParams();
  return <CardForm />;
}

export default EditCard;
