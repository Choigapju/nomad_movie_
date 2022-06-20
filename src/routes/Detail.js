import { useEffect } from "react";
// eslint-disable-next-line
import { useParams } from "react-router-dom";
// eslint-disable-next-line
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;