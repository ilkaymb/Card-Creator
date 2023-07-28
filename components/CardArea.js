import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function CardArea({
  cardTitle,
  cardText,
  cardWidth,
  cardHeigth,
  cardBackgroundColor,
  borderColor,
  imageWidth,
  imageHeigth,
  cardTitleSize,
  cardTitleWeight,
  textColor,
  setTextColor,
  cardTextSize,
  borderSize,
  imageMarginTop,
  cardBorderRadius,

  setCardTitle,
  setCardText,
  setCardTitleSize,
  setCardTextSize,
  setBackgroundColor,
  setCardWidth,
  setCardHeigth,
  setImageWidth,
  setImageHeigth,
  setBorderColor,
  setBorderSize,
  setImageMarginTop,
  setCardBorderRadius,
}) {
  return (
    <Form>
      <fieldset>
        <Row>
          <Col lg="4">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Card Title</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Card Title Size
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={cardTitleSize}
                onChange={(e) => setCardTitleSize(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Card Text</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={cardText}
                onChange={(e) => setCardText(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Card Text Size
              </Form.Label>
              <Form.Control
                placeholder={cardTextSize}
                id="disabledTextInput"
                onChange={(e) => setCardTextSize(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Border Size</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={borderSize}
                onChange={(e) => setBorderSize(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col lg="4">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Card Width</Form.Label>
              <Form.Control
                placeholder={cardWidth}
                id="disabledTextInput"
                onChange={(e) => setCardWidth(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Card Height</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={cardHeigth}
                onChange={(e) => setCardHeigth(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Image Width</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={imageWidth}
                onChange={(e) => setImageWidth(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Image Height</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={imageHeigth}
                onChange={(e) => setImageHeigth(e.target.value)}
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Image Margin Top{" "}
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={imageMarginTop}
                onChange={(e) => setImageMarginTop(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col lg="4">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Border Radius</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder={cardBorderRadius}
                onChange={(e) => setCardBorderRadius(e.target.value)}
              />
            </Form.Group>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <label for="favcolor">Background Color:</label>
              <input
                onChange={(e) => setBackgroundColor(e.target.value)}
                style={{ width: "50px", height: "50px", border: 0 }}
                type="color"
                id="favcolor"
                name="favcolor"
                value={cardBackgroundColor}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <label for="favcolor">Text Color:</label>
              <input
                onChange={(e) => setTextColor(e.target.value)}
                style={{ width: "50px", height: "50px", border: 0 }}
                type="color"
                id="favcolor"
                name="favcolor"
                value={textColor}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <label for="favcolor">Border Color:</label>
              <input
                onChange={(e) => setBorderColor(e.target.value)}
                style={{ width: "50px", height: "50px", border: 0 }}
                type="color"
                id="favcolor"
                name="favcolor"
                value={borderColor}
              />
            </div>
          </Col>
        </Row>
      </fieldset>
    </Form>
  );
}
