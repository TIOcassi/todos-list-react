import { Part, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Part>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Part>
);

export default Section;