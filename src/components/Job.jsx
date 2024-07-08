import { Row, Col } from "react-bootstrap";
import { Star, StarFill, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Job = ({ data }) => {
  const addToFavorites = useDispatch();
  const removeFavorite = useDispatch();
  const favorites = useSelector(state => state.favorites.content);
  const location = useLocation();
  console.log(location);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <div className="d-flex gap-2 align-items-center">
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          {location.pathname !== "/favorites" ? (
            favorites.includes(data) ? (
              <StarFill
                type="button"
                className="flex-shrink-0"
                onClick={() => removeFavorite({ type: "REMOVE_FROM_FAVORITES", payload: data._id })}
              />
            ) : (
              <Star
                type="button"
                className="flex-shrink-0"
                onClick={() => addToFavorites({ type: "ADD_TO_FAVORITES", payload: data })}
              />
            )
          ) : (
            <Trash
              type="button"
              className="flex-shrink-0"
              onClick={() => removeFavorite({ type: "REMOVE_FROM_FAVORITES", payload: data._id })}
            />
          )}
        </div>
      </Col>
      {location.pathname !== "/favorites" && (
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      )}
    </Row>
  );
};

export default Job;
