import styled from "styled-components";

const movies = [
    "https://d1j8r0kxyu9tj8.cloudfront.net/images/1582011116apopEhnXoJKQX64.jpg",
    "https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809317niNpzY2khA3tzMg.jpg",
    "https://bazaarvietnam.vn/wp-content/uploads/2022/05/Harpers-Bazaar-Em-va-Trinh-poster_03.jpg",
    "https://static2.yan.vn/YanNews/2167221/202204/7q9macmh_660x946giacmocuame-53783864.jpeg",
    "https://vietup.net/files/3d4ecb3ddbef9a1841af9135f98a4cf2/a3e1b8754ab41b075a10860506ac553b/poster-phim-49-ngay-showbizvn-1082015-1.jpg",
    "https://img.idesign.vn/2017/12/20/43625/20-poster-phim-xuat-sac-nhat-nam-2017_16.jpg"


];
function Contents(props) {
    return (
        <MoviesRowContainer>
            <h1 className="heading">Netflix Originals</h1>
            <MoviesSlider>
            {
                movies.map((movie, index) => (
                    <div key={index} className="movieItem">
                    <img src={movie} alt=""/>
                    <div className="movieName">Movie Name</div>
                </div>
                ))
            }
                
            </MoviesSlider>
        </MoviesRowContainer>
    )
    
}

export default Contents

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color:  var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;


    .heading {
        font-size: 18px;
        user-select: none;

    }


`;


const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(${movies.length}, 300px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;


    .movieItem {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;
        

        &:hover {
            transform: scale(1.1);
            z-index: 10;
        }
    }

`;