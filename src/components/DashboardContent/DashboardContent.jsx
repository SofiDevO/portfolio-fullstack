

import { getIMGAverageColor } from '../../utils/average-img-color/average-img-color';
import CardPortfolioDashboad from '../molecules/CardPortfolioDashboad/CardPortfolioDashboad';
import "./dashboard-content.css"

    const DashboardContent = () => {

      return (

        <section className="portfolio-content">
            <h1 className='portfolio-content__title' >Bienvenido Jhon Doe</h1>
          <CardPortfolioDashboad/>
        </section>
      )
    }

    export default DashboardContent
