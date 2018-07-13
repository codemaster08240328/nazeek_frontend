import Categorie from '../categorie/categorie'
import { connect } from 'react-redux'
import { fetchCategotie } from '../../actions/fetchCatigorieActions'

const mapStateToProps = ({products}) => {
  const {products: Products, isFetching, error} = products

  return {
    products: Products,
    isFetching,
    error
  }
}

const mapDsipatchToProps = {
  fetchCategotie
}

export default connect(mapStateToProps, mapDsipatchToProps)(Categorie)
