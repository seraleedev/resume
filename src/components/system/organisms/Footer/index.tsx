import { Container, FlexBox } from "@/components/common/component";
import { Anchor, Paragraph } from "@/components/common/typhography";
import { contactData } from "@/data/static";
import { IMainLayout } from "../../templates/MainLayout";

/**
 * 하단 푸터 컴포넌트
 * @param isMobile
 * @returns
 */

const Footer = ({ isMobile }: IMainLayout) => {
  return isMobile ? (
    <Container width="100%">
      <FlexBox $flexDirection="column" width="100%" gap="10px" padding="30px 0">
        <Anchor fontWeight={500}>seraLeeDev@gmail.com</Anchor>
        {contactData.map((contact, index) => (
          <Anchor
            key={`contact-${index}`}
            target="_blank"
            href={contact.link}
            title={contact.platform}
            fontWeight={500}
          >
            {contact.platform}
          </Anchor>
        ))}
      </FlexBox>
    </Container>
  ) : (
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
