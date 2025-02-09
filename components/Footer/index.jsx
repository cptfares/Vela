import Link from "next/link";
import { Container, FooterTitles, Section } from "./Footer.styled";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Section>
      <Container>
        <FooterTitles>&copy; {year} All Rights Reserved</FooterTitles>
        <FooterTitles>
          Designed And Developed By{" "}
          <strong>
            <Link
              href="velaagencies.com
"
            >
              Vela Agency
            </Link>
          </strong>
        </FooterTitles>
        <Link href="mailto:contact@velaagencies.com">
          <FooterTitles>contact@velaagencies.com</FooterTitles>
        </Link>
      </Container>
    </Section>
  );
};

export default Footer;
