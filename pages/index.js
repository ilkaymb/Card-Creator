import Head from "next/head";
import { Inter } from "next/font/google";
import CustomCard from "@/components/Cards/CustomCard,";
import CustomNavbar from "@/components/CustomNavbar";
import CardArea from "@/components/CardArea";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import FlexContainer from "@/components/Containers/FlexContainer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cardTitle, setCardTitle] = useState("Card Title");
  const [cardText, setCardText] = useState("Card Text");
  const [cardTitleSize, setCardTitleSize] = useState("30px");
  const [cardTextSize, setCardTextSize] = useState("20px");
  const [backgroundColor, setBackgroundColor] = useState("#E8F6EF");
  const [cardWidth, setCardWidth] = useState("250px");
  const [cardHeigth, setCardHeigth] = useState("100%");
  const [imageWidth, setImageWidth] = useState("100%");
  const [imageHeigth, setImageHeigth] = useState("200px");
  const [borderColor, setBorderColor] = useState("#1B9C85");
  const [textColor, setTextColor] = useState("black");
  const [borderSize, setBorderSize] = useState("3");
  const [imageMarginTop, setImageMarginTop] = useState("25px");
  const [cardBorderRadius, setCardBorderRadius] = useState("8px");

  return (
    <>
      <Head>
        <title>Card Creator</title>
        <meta
          name="description"
          content="Card Creator for your next web sites"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <CustomNavbar />
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              {" "}
              <FlexContainer>
                <CustomCard
                  cardTitle={cardTitle}
                  cardText={cardText}
                  cardWidth={cardWidth}
                  cardHeigth={cardHeigth}
                  cardBackgroundColor={backgroundColor}
                  borderColor={borderColor}
                  cardBorderRadius={cardBorderRadius}
                  imageWidth={imageWidth}
                  imageHeigth={imageHeigth}
                  cardTitleSize={cardTitleSize}
                  cardTitleWeight={"bold"}
                  cardTextSize={cardTextSize}
                  textColor={textColor}
                  borderSize={borderSize}
                  imageMarginTop={imageMarginTop}
                />{" "}
              </FlexContainer>
            </Col>
            <Col sm="12" md="12" lg="8">
              {" "}
              <CardArea
                cardTitle={cardTitle}
                cardText={cardText}
                cardWidth={cardWidth}
                cardHeigth={cardHeigth}
                cardBackgroundColor={backgroundColor}
                borderColor={borderColor}
                imageWidth={imageWidth}
                imageHeigth={imageHeigth}
                cardTitleSize={cardTitleSize}
                cardTitleWeight={"bold"}
                cardTextSize={cardTextSize}
                textColor={textColor}
                borderSize={borderSize}
                imageMarginTop={imageMarginTop}
                cardBorderRadius={cardBorderRadius}
                setTextColor={setTextColor}
                setCardTitle={setCardTitle}
                setCardText={setCardText}
                setCardTitleSize={setCardTitleSize}
                setCardTextSize={setCardTextSize}
                setBackgroundColor={setBackgroundColor}
                setCardWidth={setCardWidth}
                setCardHeigth={setCardHeigth}
                setImageWidth={setImageWidth}
                setImageHeigth={setImageHeigth}
                setBorderColor={setBorderColor}
                setBorderSize={setBorderSize}
                setImageMarginTop={setImageMarginTop}
                setCardBorderRadius={setCardBorderRadius}
              />
            </Col>
            <Col sm="12" md="12" lg="4">
              <center className="my-3">
                <h3>Card Next.js Code</h3>
              </center>
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.5,
                  fontSize: 14,
                  height: 350,
                }}
              >
                &lt;div style=&#x7B;&#x7B;
                <br />
                width: "{`${cardWidth}`}",
                <br />
                height: "{`${cardHeigth}`}",
                <br />
                backgroundColor: "{`${backgroundColor}`}",
                <br />
                border: "{`${borderSize}px solid ${borderColor}`},
                <br />
                borderRadius: "{`${cardBorderRadius}`}",
                <br />
                color: "{`${textColor}`}",
                <br />
                paddingTop: "{`${imageMarginTop}`}",
                <br />
                &#x7D; &#x7D;&gt;
                <br />
                &lt;div style=&#x7B;&#x7B;
                <br />
                width: "{`${imageWidth}`}",
                <br />
                height: "{`${imageHeigth}`}",
                <br />
                position: "relative",
                <br />
                &#x7D; &#x7D;
                <br />
                &gt;
                <br />
                &lt;Image
                <br />
                src="/image-placeholder.svg"
                <br />
                style=&#x7B;&#x7B;
                <br />
                objectFit: "cover",
                <br />
                objectPosition: "center",
                <br />
                &#x7D; &#x7D;
                <br />
                alt="image-placeholder"
                <br />
                fill
                <br />
                /&gt;
                <br />
                &lt;/div&gt;
                <br />
                &lt;div style=&#x7B;&#x7B;
                <br />
                padding: 15,
                <br />
                display: "flex",
                <br />
                justifyContent: "center",
                <br />
                alignItems: "center",
                <br />
                flexDirection: "column",
                <br />
                gap: 10,
                <br />
                &#x7D;&#x7D;
                <br />
                &gt;
                <br />
                &lt;h2 style=&#x7B;&#x7B;
                <br />
                fontSize: "{`${cardTitleSize}`}",
                <br />
                fontWeight: 'bold',
                <br />
                wordBreak: "break-all"
                <br />
                &#x7D;&#x7D;&gt;
                <br />
                {cardTitle}
                <br />
                &lt;/h2&gt;
                <br />
                &lt;p style=&#x7B;&#x7B;
                <br />
                fontSize: "{`${cardTextSize}`}",
                <br />
                wordBreak: "break-all"
                <br />
                &#x7D;&#x7D;&gt;
                <br />
                {cardText}
                <br />
                &lt;/p&gt;
                <br />
                &lt;/div&gt;
                <br />
                &lt;/div&gt;
                <br />
              </pre>
            </Col>
            <Col className="my-5" sm="12" md="12" lg="12">
              {" "}
              <center>
                <h1>Card Area</h1>
              </center>
              <FlexContainer>
                <CustomCard
                  cardTitle={cardTitle}
                  cardText={cardText}
                  cardWidth={cardWidth}
                  cardHeigth={cardHeigth}
                  cardBackgroundColor={backgroundColor}
                  borderColor={borderColor}
                  cardBorderRadius={cardBorderRadius}
                  imageWidth={imageWidth}
                  imageHeigth={imageHeigth}
                  cardTitleSize={cardTitleSize}
                  cardTitleWeight={"bold"}
                  cardTextSize={cardTextSize}
                  textColor={textColor}
                  borderSize={borderSize}
                  imageMarginTop={imageMarginTop}
                />{" "}
                <CustomCard
                  cardTitle={cardTitle}
                  cardText={cardText}
                  cardWidth={cardWidth}
                  cardHeigth={cardHeigth}
                  cardBackgroundColor={backgroundColor}
                  borderColor={borderColor}
                  cardBorderRadius={cardBorderRadius}
                  imageWidth={imageWidth}
                  imageHeigth={imageHeigth}
                  cardTitleSize={cardTitleSize}
                  cardTitleWeight={"bold"}
                  cardTextSize={cardTextSize}
                  textColor={textColor}
                  borderSize={borderSize}
                  imageMarginTop={imageMarginTop}
                />{" "}
                <CustomCard
                  cardTitle={cardTitle}
                  cardText={cardText}
                  cardWidth={cardWidth}
                  cardHeigth={cardHeigth}
                  cardBackgroundColor={backgroundColor}
                  borderColor={borderColor}
                  cardBorderRadius={cardBorderRadius}
                  imageWidth={imageWidth}
                  imageHeigth={imageHeigth}
                  cardTitleSize={cardTitleSize}
                  cardTitleWeight={"bold"}
                  cardTextSize={cardTextSize}
                  textColor={textColor}
                  borderSize={borderSize}
                  imageMarginTop={imageMarginTop}
                />{" "}
              </FlexContainer>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
