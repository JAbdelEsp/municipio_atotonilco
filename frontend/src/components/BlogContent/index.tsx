import {
  CardButton,
  CardContent,
  CardHeader,
  CardLocation,
  CardLocContent,
  ImageRevealTrigger,
  MinPara,
  MinParaIcon,
  MinTitle,
  MuiBoxRoot,
  MuiGridContainer,
  MuiGridItem,
  MuiPaperRoot,
  Section,
  Span,
} from "./styles";
import parse from "html-react-parser";
import Image from "../../common/Image";
import { Divider } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import useFetch from "../../services";
const BlogContent = () => {
  const { data, status, error } = useFetch(
    "https://k753lncj-9000.usw3.devtunnels.ms/tourism/records"
  );
  return (
    <Section>
      <MuiGridContainer>
        {Array.isArray(data) &&
          data.map((item: any, key: number) => (
            <MuiGridItem key={key}>
              <MuiBoxRoot>
                <MuiPaperRoot>
                  <CardHeader className="card-header">
                    <Image
                      src={item.image}
                      alt={item.image}
                      cls=""
                      location={item.path}
                    />
                    <ImageRevealTrigger />
                  </CardHeader>
                  <CardContent>
                    <CardButton>
                      <MinParaIcon>
                        <SvgIcon
                          src="view-svgrepo-com.svg"
                          width="20px"
                          height=""
                        />
                        <Span>{item.views}</Span>
                      </MinParaIcon>
                    </CardButton>
                    <MinTitle>
                      {parse(
                        item.title.length > 35
                          ? item.title.slice(0, 35 - 1) + "&hellip;"
                          : item.title
                      )}
                    </MinTitle>
                    <MinPara>
                      {parse(
                        item.content.length > 160
                          ? item.content.slice(0, 160 - 1) + "&hellip;"
                          : item.content
                      )}
                    </MinPara>
                  </CardContent>
                  <Divider />
                  <CardLocation>
                    <CardLocContent>
                      <Span>
                        <SvgIcon
                          src="location-pin-svgrepo-com.svg"
                          width="13px"
                          height=""
                        />
                      </Span>
                      <Span>{item.neighborhood}</Span>
                    </CardLocContent>
                  </CardLocation>
                </MuiPaperRoot>
              </MuiBoxRoot>
            </MuiGridItem>
          ))}
      </MuiGridContainer>
    </Section>
  );
};
export default BlogContent;
