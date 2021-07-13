import { useEffect } from "react";
import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Loading from "./Loading";

const CommentsArea = (props) => {

  console.log(props.asin, "props")

  // const [asin, setAsin] = useState(null)
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //    fetchComments()

  // }, [])

  useEffect(() => {
    fetchComments()

  }, [props.asin])


  const deleteComment = async (e) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + e,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjk1ZGIzNTgxNzAwMTVjMjI3MjYiLCJpYXQiOjE2MjUwNTc2MzAsImV4cCI6MTYyNjI2NzIzMH0.PCebFyd28A7h5LkwblkqMU8Gf3BXrcfKepkegk76eaw",
          },
        }
      );
      if (response.ok) {
        alert("Comment Deleted");
        // fetchComments()

      } else alert("We had a problem to delete it");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjk1ZGIzNTgxNzAwMTVjMjI3MjYiLCJpYXQiOjE2MjUwNTc2MzAsImV4cCI6MTYyNjI2NzIzMH0.PCebFyd28A7h5LkwblkqMU8Gf3BXrcfKepkegk76eaw",
        },
      }
    );
    console.log(response)
    let commentBooks = await response.json();
    console.log(commentBooks)
    // setAsin(props.asin)
    setComments(commentBooks)
    setIsLoading(false)
  };


    return (
      <>
       {isLoading && <Loading />}
        <ListGroup>
          {comments
            .map((comment) => (
              <div key={comment._id} className="d-flex justify-content-between">
                <ListGroup.Item className="m-2">
                  {comment.comment}
                </ListGroup.Item>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => deleteComment(comment._id)}
                >
                  Delete
                </Button>
              </div>
            ))
            .slice(-10)}
        </ListGroup>
      </>
    );
}

export default CommentsArea;
