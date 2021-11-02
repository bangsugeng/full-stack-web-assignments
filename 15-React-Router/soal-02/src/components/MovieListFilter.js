import qs from "qs";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const MovieListFilter = () => {
  const location = useLocation();
  const history = useHistory();

  const params = qs.parse(location.search, { ignoreQueryPrefix: true });

  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  const [show, setShow] = useState(params.show || shows[0]);
  const [category, setCategory] = useState(params.category || categories[0]);
  const [sortBy, setSortBy] = useState(params.sort || fields[0]);

  return (
    <div className="col-12 my-5">
      <div className="row align-items-stretch justify-content-center">
        <div className="col-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category}
          >
            {categories.map((c, id) => (
              <option key={id} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="show" className="form-label">
            Show
          </label>
          <select
            id="show"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setShow(e.target.value)}
            defaultValue={show}
          >
            {shows.map((s, id) => (
              <option key={id} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="show" className="form-label">
            Sort By
          </label>
          <select
            id="show"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSortBy(e.target.value)}
            defaultValue={sortBy}
          >
            {fields.map((f, id) => (
              <option key={id} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2 row align-items-end">
          <button
            id="submit"
            className="btn btn-outline-success"
            onClick={() =>
              history.push(
                `/movies/?show=${show}&category=${category}&sort=${sortBy}`
              )
            }
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieListFilter;