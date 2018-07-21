import React from 'react'

class Career extends React.Component {
  render(){
    const lang = localStorage.getItem('lang')
    return (
      <div className='contact-group-block' id='Career' >
        <h2>{lang==='ar'?'الوظائف':'Career'}</h2>
        <div className='contact-list-row'>
          <div className='row is-flex'>
            <div className='col-sm-4'>
              <div className='con-block clearfix'>
                <div className='con-icon'>
                  <i className='icon-screen-smartphone icons' />
                </div>
                <div className='con-txt'>
                  <p>+965-333-333-333</p>
                  <p>{lang==='ar'?'(متوفر من الاحد الي الخميس من الساعة 9:00 صباحا حتي الساعة 5:00 مساء بتوقيت الكويت) (بتوقيت جرينتش +3)':'(available Sunday to Thursday From 9: 00 AM to 5: 00 PM Kuwait Local Time ) (GMT +3)'}</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='con-block clearfix'>
                <div className='con-icon'>
                  <i className='icon-envelope-open icons' />
                </div>
                <div className='con-txt'>
                  <p>Career@nazzek.com</p>
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
                      <input type='text' className='form-control' placeholder={lang==='ar'?'اسم':'Name'} />
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='form-group'>
                      <input type='email' className='form-control' placeholder={lang==='ar'?'بريد':'Email'} />
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder={lang==='ar'?'الجوال (اختياري)':'Mobile (optional)'} />
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder={lang==='ar'?'موضوع':'Subject'} />
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='form-group'>
                      <textarea className='form-control' placeholder={lang==='ar'?'تعليق':'Comment'} />
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

export default Career
