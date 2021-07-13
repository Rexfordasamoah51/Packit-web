import {
  useEffect,
  useState,
} from 'react';

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';

import Footer from '../components/Footer';
import PackCardSection from '../components/sub/PackCardSection';
import PackCarousel from '../components/sub/PackCarousel';
import PackFeatureSection from '../components/sub/PackFeatureSection';
import PackHero from '../components/sub/PackHeroSection';
import PackItSubcribe from '../components/sub/PackItSubcribe';
import PackSponsor from '../components/sub/PackSponsor';
import response from '../utils/demo/tableData';

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))

  }, [page])

  const sound = [
    { name: "High" },
    { name: "Low" },
  ];


  const type = [
    { name: "Domestic tourism" },
    { name: "Inbound tourism" },
    { name: "Outbound tourism" },
  ];




  return (
    <>
      <Zoom left>
        <PackHero />
      </Zoom>
      <Fade right>
        <PackCardSection />
      </Fade>
      <Bounce left>
        <PackFeatureSection />
      </Bounce>
      <Bounce left>
        <PackCarousel />
      </Bounce>
      <Fade right>
        <PackItSubcribe />
      </Fade>
      <Bounce right>
        <PackFeatureSection />
      </Bounce>
      <Bounce right>
        <PackCarousel />
      </Bounce>

      <Fade right>
        <PackSponsor />
      </Fade>
      <Jump>
        <Footer />
      </Jump>
    </>
  )
}

export default Dashboard
