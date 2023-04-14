import Container from "../../components/templates/Container";
import React from 'react';
import Text from "../../components/atoms/Text";
import ContactBox from "../../components/organisms/ContactBox";

const Contact = () => {
    return (
        <Container>
            <Text type="title">Contact</Text>
            <ContactBox />
        </Container>
    )
}
export default Contact;