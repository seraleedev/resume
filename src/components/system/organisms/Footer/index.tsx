import { Container, FlexBox } from "@/components/common/component";
import { Anchor, Paragraph } from "@/components/common/typhography";
import { contactData } from "@/data/static";

/**
 * 하단 푸터 컴포넌트
 * @param
 * @returns
 */

const Footer = () => {
  return (
    <Container>
      <FlexBox justify="space-between" width="100%" padding="30px 0">
        <Paragraph>seraLeeDev@gmail.com</Paragraph>
        <FlexBox justify="flex-start" gap="15px">
          {contactData.map((contact, index) => (
            <Anchor
              key={`contact-${index}`}
              target="_blank"
              href={contact.link}
              title={contact.platform}
            >
              {contact.platform}
            </Anchor>
          ))}
        </FlexBox>
      </FlexBox>
    </Container>
  );
};
export default Footer;
