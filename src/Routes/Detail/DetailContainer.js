import { moviesApi, tvApi } from "api";
import Loader from "Components/Loader";
import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;

    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    console.log(parsedId);
    try {
      let result = null;
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
      }
      this.setState({
        result,
      });
    } catch {
      this.setState({
        error: "Couldn't find Matching",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}

export default DetailContainer;
