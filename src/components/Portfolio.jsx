import PortfolioCard from './PortfolioCard';

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <PortfolioCard image="/assets/1.jpg" title="FINance Expense Tracker"/>
      <PortfolioCard image="/assets/2.jpg" title="Samplenym Search Engine"/>
      <PortfolioCard image="/assets/3.jpg" title="Social Network API" />
      <PortfolioCard image="/assets/4.jpg" title="ORM E-Commerce Backend" />
      <PortfolioCard image="/assets/5.jpg" title="Employee Tracker Database" />
      <PortfolioCard image="/assets/6.jpg" title="Note Taking App" />
    </div>
  );
}

export default Portfolio;