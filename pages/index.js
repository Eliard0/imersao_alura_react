import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    // const estiloHomePage = { color: "green" };

    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}/>
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height:80px;
        border-radius: 50%;
    }
    .user-info {
        display:flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        margin-top: 50px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="" /> */}
            <section className="user-info">
                <img src={config.github} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    const playListsNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            { playListsNames.map((playListsName) => {
                const videos = props.playlists[playListsName];
                return (
                    <section>
                        <h2>{ playListsName }</h2>
                        <div>
                            { videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}