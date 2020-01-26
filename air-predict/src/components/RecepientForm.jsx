import React from "react"
import "rbx/index.css"
import { Control, Field, Label, Input, Select, Button, Column, Box, Title, Container } from "rbx"

export default () => {
    return (
        <Container>
            <Column.Group>
                <Column size="4">
                    <Box>
                        <Title>Flights</Title>
                        <form>
                            <Field>
                                <Label>Date</Label>
                                <Control>
                                    <Input type="date" />
                                </Control>
                            </Field>
                            <Field>
                                <Label>Flight</Label>
                                <Control>
                                    <Select.Container>
                                        <Select>
                                            <Select.Option value="AA-01">AA-01</Select.Option>
                                            <Select.Option value="AA-02">AA-02</Select.Option>
                                        </Select>
                                    </Select.Container>
                                </Control>
                            </Field>
                            <Field>
                                <Control>
                                    <Button color="info">Search</Button>
                                </Control>
                            </Field>
                        </form>
                    </Box>
                </Column>
            </Column.Group>
        </Container>
    )
}