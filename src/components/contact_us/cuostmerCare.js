import React from 'react'

class CuostmerCare extends React.Component {
  render(){
    const lang = localStorage.getItem('lang')
    return (
      <div className='contact-group-block' id='Customer-Care' >
        <h2>{lang==='ar'?'خدمة العملاء':'Customer Care'}</h2>
        <div className='contact-list-row'>
          <div className='row is-flex'>
            <div className='col-sm-4'>
              <div className='con-block clearfix'>
                <div className='con-icon'>
                  <i className='icon-screen-smartphone icons' />
                </div>
                <div className='con-txt'>
                  <p>+965-333-333-333</p>
                  <p>(available Sunday to Thusday </p>
                  <p>From 9 :00 AM to 5 : 00 PM Kuwait Loacl Time ) (GMT +3)</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='con-block clearfix'>
                <div className='con-icon'>
                  <i className='icon-envelope-open icons' />
                </div>
                <div className='con-txt'>
                  <h3>{lang==='ar'?'خدمة العملاء':'Customer Service'}</h3>
                  <p>MAIL@MAIL.COM</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='con-block clearfix'>
                <div className='con-icon'>
                  <i className='icon-clock icons' />
                </div>
                <div className='con-txt'>
                  <h3>{lang==='ar'?'ساعات العمل':'Work Hours'}</h3>
                  <p>From : 8:00 AM<br />To : 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className='col-sm-offset-4 col-sm-4'>
              <div className='con-block clearfix'>
                <div className='con-icon'>
                  <i className='icon-envelope-open icons' />
                </div>
                <div className='con-txt'>
                  <h3>{lang==='ar'?'الاقتراحات والآراء':'Feedback and Suggestion'}</h3>
                  <p>MAIL@MAIL.COM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-form-block'>
          <form className='form-st2' action='#'>
            <div className='row'>
              <div className='col-sm-9'>
                <div className='row'>
                  <div className='col-sm-4'>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='form-group'>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Mobile (optional)' />
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Subject' />
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='form-group'>
                      <textarea className='form-control' placeholder='Comment' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='form-group'>
                  <label className='upload-label'>{lang==='ar'?'تحميل الملفات (إختياري)':'Upload Files (optional)'}</label>
                  <div className='upload-file'>
                    <div className='btn-upload'>
                      <input type='file' className='form-control' />
                      <i className='icon-plus icons' /> {lang==='ar'?'إضافة ملف':'Add File'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-offset-4 col-sm-4'>
                <button type='submit' className='btn btn-submit btn-block marg-t20'>{lang==='ar'?'أرسل':'Send'}</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default CuostmerCare
