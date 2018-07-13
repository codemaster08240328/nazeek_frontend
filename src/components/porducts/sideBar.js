import React from 'react'
import { connect } from 'react-redux'
import { getSearchByProducts } from '../../actions/searchByAction'

class SideBar extends React.Component {
  render(){
    return (
      <div className='side-filter'>
        <h2>Filter</h2>
        <div className='filter-block-content'>
          <div className='filter-block'>
            <h3 className='f-title-sm'>Furniture</h3>
            <h3 className='f-title-xs'>Furniture</h3>
            <div className='asked-list panel-group accordion-content' id='accordion'>
              <div className='panel panel-default'>
                <div className='panel-heading accordion-heading'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#collapse1' className=''>Table</a>
                </div>
                <div id='collapse1' className='panel-collapse collapse in'>
                  <div className='panel-body'>
                    <div className='ui_checkbox-collapse'>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('table', 1)}/>
                        <label>Table1</label>
                      </div>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('table', 2)}/>
                        <label>Table2</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading accordion-heading'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#collapse2' className='collapsed'>Chair</a>
                </div>
                <div id='collapse2' className='panel-collapse collapse'>
                  <div className='panel-body'>
                    <div className='ui_checkbox-collapse'>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('chair', 1)}/>
                        <label>Chair1</label>
                      </div>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('chair', 2)}/>
                        <label>Chair2</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading accordion-heading'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#collapse3' className='collapsed'>Sofa</a>
                </div>
                <div id='collapse3' className='panel-collapse collapse'>
                  <div className='panel-body'>
                    <div className='ui_checkbox-collapse'>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('sofa', 1)}/>
                        <label>Sofa1</label>
                      </div>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('sofa', 2)}/>
                        <label>Sofa2</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='filter-block'>
            <h3 className='f-title-sm'>Designer/ shop</h3>
            <h3 className='f-title-xs'>Designer/ shop</h3>
            <div className='block-checkList content accordion-content' data-mcs-theme='dark'>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 1)}/>
                <label>Designer1</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 2)}/>
                <label>Designer2</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 3)}/>
                <label>Designer3</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 4)}/>
                <label>Designer4</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 5)}/>
                <label>Designer5</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 6)}/>
                <label>Designer6</label>
              </div>
            </div>
          </div>
          <div className='filter-block'>
            <h3 className='f-title-sm'>Style</h3>
            <h3 className='f-title-xs'>Designer/ shop</h3>
            <div className='block-checkList content accordion-content' data-mcs-theme='dark'>
              { this.props.styleLists.styles && 
                this.props.styleLists.styles.map((item, index)=> {
                  return(
                    <div className='ui_checkbox' key={index}>
                      <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('styles', item.id)}/>
                      <label>{item.title}</label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({searchBy}) => {
  return {
    styleLists: searchBy.searchByLists
  }
}

const mapDsipatchToProps = {
  getSearchByProducts: getSearchByProducts
}

export default connect(mapStateToProps, mapDsipatchToProps)(SideBar)
