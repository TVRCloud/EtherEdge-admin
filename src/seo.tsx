import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const metaInfo = {
    metaTitle: "Ether Edge",
    metaDescription:
      "Ether Edge is a admin panel developed by KrAtos using React, chakra-UI and tailwind css",
  };

  const characterLimit = 160;

  const truncateDescription = (description: string, limit: number) => {
    if (!description) return "";
    return description.length > limit
      ? description.substring(0, limit) + "..."
      : description;
  };

  const desc = truncateDescription(
    description || metaInfo.metaDescription,
    characterLimit
  );

  return (
    <Helmet>
      <title>
        {title ? `${title} | ${metaInfo.metaTitle}` : metaInfo.metaTitle}
      </title>
      <meta
        property="og:title"
        content={
          title ? `${title} | ${metaInfo.metaTitle}` : metaInfo.metaTitle
        }
      />
      <meta property="og:description" content={desc} />
      <meta name="description" content={desc} />
    </Helmet>
  );
};

export default SEO;
