import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ITag, InfoData, RouteState, PriceData } from "../types/CoinType";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouteState;
  const { coinId } = useParams();
  const [coin, setCoin] = useState();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      // const infoData = await (
      //   await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      // ).json();
      // const priceData = await (
      //   await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      // ).json();
      // setInfo(infoData);
      // setPriceInfo(priceData);
    })();
  }, [coinId, priceInfo]);
  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
      </Header>
      {/* {loading ? (
        <Loader>Loading...</Loader>
      ) : ( */}
      <>
        <Overview>
          <OverviewItem>
            <span>Rank:</span>
            <span>{info?.rank}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Symbol:</span>
            <span>${info?.symbol}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Open Source:</span>
            <span>{info?.open_source ? "Yes" : "No"}</span>
          </OverviewItem>
        </Overview>
        <Description>{info?.description}</Description>
        <Overview>
          <OverviewItem>
            <span>Total Supply:</span>
            <span>{priceInfo?.total_supply}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply:</span>
            <span>{priceInfo?.max_supply}</span>
          </OverviewItem>
        </Overview>
        <Link to="price">price</Link>
        <Link to="chart">chart</Link>
        <Outlet></Outlet>
      </>
      {/* )} */}
    </Container>
  );
}

export default Coin;
