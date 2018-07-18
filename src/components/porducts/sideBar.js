import React from 'react'
import { connect } from 'react-redux'
import { getSearchByProducts } from '../../actions/searchByAction'

class SideBar extends React.Component {
  render(){
    const lang = localStorage.getItem('lang')
    return (
      <div className='side-filter'>
        <h2>{lang==='ar'?'منقي':'Filter'}</h2>
        <div className='filter-block-content'>
          <div className='filter-block'>
            <h3 className='f-title-sm'>{lang==='ar'?'الأثاث':'Furniture'}</h3>
            <h3 className='f-title-xs'>{lang==='ar'?'الأثاث':'Furniture'}</h3>
            <div className='asked-list panel-group accordion-content' id='accordion'>
              <div className='panel panel-default'>
                <div className='panel-heading accordion-heading'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#collapse1' className=''>{lang==='ar'?'طاولة':'Table'}</a>
                </div>
                <div id='collapse1' className='panel-collapse collapse in'>
                  <div className='panel-body'>
                    <div className='ui_checkbox-collapse'>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('table', 1)}/>
                        <label>{lang==='ar'?'1طاولة':'Table1'}</label>
                      </div>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('table', 2)}/>
                        <label>{lang==='ar'?'2طاولة':'Table2'}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading accordion-heading'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#collapse2' className='collapsed'>{lang==='ar'?'كرسي':'Chair'}</a>
                </div>
                <div id='collapse2' className='panel-collapse collapse'>
                  <div className='panel-body'>
                    <div className='ui_checkbox-collapse'>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('chair', 1)}/>
                        <label>{lang==='ar'?'1كرسي':'Chair1'}</label>
                      </div>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('chair', 2)}/>
                        <label>{lang==='ar'?'2كرسي':'Chair2'}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading accordion-heading'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#collapse3' className='collapsed'>{lang==='ar'?'كنبة':'Sofa'}</a>
                </div>
                <div id='collapse3' className='panel-collapse collapse'>
                  <div className='panel-body'>
                    <div className='ui_checkbox-collapse'>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('sofa', 1)}/>
                        <label>{lang==='ar'?'1كنبة':'Sofa1'}</label>
                      </div>
                      <div className='ui_checkbox'>
                        <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('sofa', 2)}/>
                        <label>{lang==='ar'?'2كنبة':'Sofa2'}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='filter-block'>
            <h3 className='f-title-sm'>{lang==='ar'?'المصمم / التسوق':'Designer/ shop'}</h3>
            <h3 className='f-title-xs'>{lang==='ar'?'المصمم / التسوق':'Designer/ shop'}</h3>
            <div className='block-checkList content accordion-content' data-mcs-theme='dark'>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 1)}/>
                <label>{lang==='ar'?'مصمم1':'Designer1'}</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 2)}/>
                <label>{lang==='ar'?'مصمم2':'Designer2'}</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 3)}/>
                <label>{lang==='ar'?'مصمم3':'Designer3'}</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 4)}/>
                <label>{lang==='ar'?'مصمم4':'Designer4'}</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 5)}/>
                <label>{lang==='ar'?'مصمم5':'Designer5'}</label>
              </div>
              <div className='ui_checkbox'>
                <input type='checkbox' name='example' onClick={()=> this.props.getSearchByProducts('designer', 6)}/>
                <label>{lang==='ar'?'مصمم1':'Designer6'}</label>
              </div>
            </div>
          </div>
          <div className='filter-block'>
            <h3 className='f-title-sm'>{lang==='ar'?'النمط':'Style'}</h3>
            <h3 className='f-title-xs'>{lang==='ar'?'المصمم / التسوق':'Designer/ shop'}</h3>
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
