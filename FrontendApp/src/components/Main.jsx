import Navbar from './Navbar'
import PropTypes from 'prop-types';

const Main = ({children}) => {
  return (
      <div>
        <Navbar/>
        {children}
    </div>
  )
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main