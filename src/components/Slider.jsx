import React from 'react'
import "../css/Slider.css"
export function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner h-25">
                <div className="carousel-item active">
                    <img src="https://dscolourlabs.co.uk/cms/asset/beff49001351e289357471f61ab613a1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://dscolourlabs.co.uk/cms/asset/ffc93b2596a73cf9443ab2e3f8075b98.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://learn.zoner.com/wp-content/uploads/2022/06/how-to-make-a-photo-book.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-capitalize text-light fw-bolder fs-1">Projeect Title</h2>
                            <p className="w-50 text-light mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quasi ad accusamus sint praesentium, alias possimus suscipit maiores vero, tempore corrupti ab temporibus totam sapiente deserunt quas laboriosam quia veniam.</p>
                            <div>
                                <a href=""
                                    className="btn blue-btn border-2 px-5 border-white rounded-pill text-white text-capitalize position-relative overflow-hidden">
                                    <div className="white-div position-absolute"></div>View Project
                                </a>
                            </div>
                        </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
