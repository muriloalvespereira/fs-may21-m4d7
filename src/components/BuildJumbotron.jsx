import { Jumbotron, Container } from "react-bootstrap"

const BuildJumbotron = () => (
    <Jumbotron fluid className="my-5">
        <Container>
            <h1>Welcome to our Bookstore</h1>
            <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
            </p>
        </Container>
    </Jumbotron>
)

export default BuildJumbotron