import Image from "next/image";
import React from "react";

export default function CustomCard({
  cardTitle,
  cardText,
  cardWidth,
  cardHeigth,
  cardBackgroundColor,
  borderColor,
  cardBorderRadius,
  imageWidth,
  imageHeigth,
  cardTitleSize,
  cardTitleWeight,
  cardTextSize,
  textColor,
  borderSize,
  imageMarginTop,
}) {
  return (
    <div
      style={{
        width: cardWidth,
        height: cardHeigth,
        backgroundColor: cardBackgroundColor,
        border: `${borderSize}px solid ${borderColor}`,
        borderRadius: cardBorderRadius,
        color: textColor,
        paddingTop: imageMarginTop,
      }}
    >
      <div
        style={{
          width: imageWidth,
          height: imageHeigth,
          position: "relative",
        }}
      >
        <Image
          src="/image-placeholder2.svg"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt={"image-placeholder"}
          fill
        />
      </div>
      <div
        style={{
          padding: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h2
          style={{
            fontSize: cardTitleSize,
            fontWeight: cardTitleWeight,
            wordBreak: "break-all",
          }}
        >
          {cardTitle}
        </h2>
        <p style={{ fontSize: cardTextSize, wordBreak: "break-all" }}>
          {cardText}
        </p>
      </div>
    </div>
  );
}
