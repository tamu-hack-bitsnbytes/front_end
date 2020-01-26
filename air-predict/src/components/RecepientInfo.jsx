import React from "react"
import "rbx/index.css"
import {
    Card, List, Container
} from "rbx"
export default () => {
    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Header.Title>Flight: AA-01</Card.Header.Title>
                </Card.Header>
                <Card.Body>
                    <List>
                        <List.Item>T Shirts x 500</List.Item>
                        <List.Item>Corn Meal x 100Lbs</List.Item>
                    </List>
                </Card.Body>
                <Card.Footer>Arrival : 2020-02-01 12:38:00</Card.Footer>
            </Card>
        </Container>
    )
}
