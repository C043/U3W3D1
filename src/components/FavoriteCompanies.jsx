import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const FavoriteCompanies = () => {
  const favoriteCompanies = useSelector(state => state.favorites.content);
  return (
    <Container>
      <Row className="mx-0 mt-3 p-3">
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favorite Companies</h1>
        </Col>

        {favoriteCompanies.map(company => (
          <Col key={company._id} xs="10" className="mx-auto">
            <Job data={company} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoriteCompanies;
