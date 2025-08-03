import React from "react";
import { useSearchParams } from "react-router-dom";
import ComingSoonComponent from "../components/ComingSoon/ComingSoon";

const ComingSoon = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "This Page";
  const category = searchParams.get("category") || "content";

  return <ComingSoonComponent title={title} category={category} />;
};

export default ComingSoon;
