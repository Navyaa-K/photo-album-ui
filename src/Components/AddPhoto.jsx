import React from 'react'
import { Nav } from '../Nav'

export const AddPhoto = () => {
  return (
    <div
    style={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/035/494/595/non_2x/ai-generated-antique-old-elegant-background-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    
    >
        <Nav />
        <div className="container-fluid">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3 px-3">
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">AlbumId</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">URL</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Thumbnailurl</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
