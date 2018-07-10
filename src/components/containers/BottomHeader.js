import BottomHeader from '../common/header/bottomHeader'
import { connect } from 'react-redux'
import { fetchCategoties } from '../../actions/fetchCatigoriseActions'
import { fetchCategotie } from '../../actions/fetchCatigorieActions'
import { getSearchByLists } from '../../actions/searchByAction'
import { getSearchByProducts } from '../../actions/searchByAction'

const mapStateToProps = ({categories,searchBy}) => {
  const { isFetching, error, categories: Categories } = categories;
  const { searchByLists, isFetching: isSearchBy } = searchBy;

  return {
    categories: Categories,
    isFetching,
    isSearchBy,
    searchByLists,
    error
  }
}

const mapDispatchToProps = {
  fetchCategoties,
  fetchCategotie,
  getSearchByLists,
  getSearchByProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomHeader)
